import { useSearchParams } from 'react-router-dom';
import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { ToggleControl } from '@wordpress/components';
import { useState, useEffect, useMemo, useRef } from 'react';
import { getItemsForFilter } from './utils';
import './styles.scss';

import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

import data from './_data/examples.json';

const fields = [
	{
		id: 'slug',
		label: 'Slug',
		enableGlobalSearch: true,
		enableHiding: false,
		// render: ( { item } ) => {
		// 	return (
		// 		<span className="link_example">
		// 			<a
		// 				target="_blank"
		// 				href={ `https://github.com/WordPress/block-development-examples/tree/trunk/plugins/${ item.slug }/README.md` }
		// 				rel="noreferrer"
		// 			>
		// 				{ item.slug }
		// 			</a>
		// 		</span>
		// 	);
		// },
	},
	{
		id: 'folder',
		label: 'Folder',
		enableHiding: false,
		render: ( { item } ) => {
			return (
				<span>
					<a
						target="_blank"
						href={ `https://github.com/WordPress/block-development-examples/tree/trunk/plugins/${ item.slug }` }
						rel="noreferrer"
					>
						📂
					</a>
				</span>
			);
		},
	},
	{
		id: 'demo',
		label: 'Demo',
		enableHiding: false,
		render: ( { item } ) => {
			return (
				<span>
					<a
						target="_blank"
						href={ `https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/${ item.slug }/_playground/blueprint.json` }
						rel="noreferrer"
					>
						📺
					</a>
				</span>
			);
		},
	},
	{
		id: 'zip',
		label: 'ZIP',
		enableHiding: false,
		render: ( { item } ) => {
			return (
				<span>
					<a
						target="_blank"
						href={ `https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/${ item.slug }.zip` }
						rel="noreferrer"
					>
						📦
					</a>
				</span>
			);
		},
	},
	{
		id: 'description',
		label: 'Description',
		enableGlobalSearch: true,
	},
	{
		id: 'tags',
		label: 'Tags',
		elements: getItemsForFilter( 'tags' )( data ),
		enableSorting: false,
		render: ( { item } ) => {
			return (
				<div className="tags_example">
					{ item.tags.map( ( tag ) => (
						<span key={ tag }>{ tag.toUpperCase() }</span>
					) ) }
				</div>
			);
		},
		filterBy: {
			isPrimary: true,
			operators: [ 'isAny', 'isAll', 'isNone', 'isNotAll' ],
		},
	},
];

const defaultLayouts = {
	table: {
		layout: {
			primaryField: 'slug',
		},
	},
	list: {
		layout: {
			primaryField: 'slug',
		},
	},
};

const DEFAULT_VIEW = {
	type: 'list',
	hiddenFields: [],
	perPage: 10,
	filters: [],
	fields: [ 'slug', 'folder', 'demo', 'zip', 'description', 'tags' ],
};

const Examples = () => {
	const [ searchParams, setSearchParams ] = useSearchParams();
	const [ activeLayout, setActiveLayout ] = useState();
	const [ displayReadme, setDisplayReadme ] = useState( false );
	//	const [ htmlReadmeContent, setHtmlReadmeContent ] = useState( '' );

	const iframeRef = useRef( null );
	const [ filterTags, setFilterTags ] = useState( () => {
		try {
			return searchParams.get( 'tags' ) || '';
		} catch {
			return '';
		}
	} );
	const [ filterOperator, setFilterOperator ] = useState( () => {
		try {
			return searchParams.get( 'operator' ) || '';
		} catch {
			return '';
		}
	} );
	const [ view, setView ] = useState( () => ( {
		...DEFAULT_VIEW,
		filters: filterTags
			? [
					{
						field: 'tags',
						operator: filterOperator || 'isAll',
						value: filterTags.split( ',' ),
					},
			  ]
			: [],
	} ) );

	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( data, view, fields );
	}, [ view ] );

	const onChangeView = ( newView ) => {
		const layout = newView.type;
		const filters = newView?.filters || [];
		setActiveLayout( layout );

		if ( filters.length ) {
			setFilterTags( filters.map( ( { value } ) => value ).join( ',' ) );
			setFilterOperator( filters[ 0 ].operator );
		} else {
			setFilterTags( '' );
			setFilterOperator( ' ' );
		}
		setView( newView );
	};
	const onChangeSelection = async ( [ selectedExampleSlug ] ) => {
		if ( ! displayReadme ) {
			const selectedExamplePlaygroundDemoUrl = `https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/${ selectedExampleSlug }/_playground/blueprint.json`;
			iframeRef.current.contentWindow.location.href =
				selectedExamplePlaygroundDemoUrl;
		} else {
			const selectedExampleReadmeUrl = `https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/${ selectedExampleSlug }/README.md`;
			let markdownReadmeContent = await fetch(
				selectedExampleReadmeUrl
			).then( ( response ) => response.text() );

			if ( markdownReadmeContent ) {
				markdownReadmeContent = markdownReadmeContent.replace(
					/<!-- @TABLE EXAMPLES BEGIN -->([\s\S]*?)<!-- @TABLE EXAMPLES END -->/g,
					''
				);
				const processedContent = await remark()
					.use( gfm )
					.use( html )
					.process( markdownReadmeContent );
				iframeRef.current.srcdoc = processedContent.toString();
			}
		}
	};

	useEffect( () => {
		if ( filterTags ) {
			setSearchParams( { tags: filterTags, operator: filterOperator } );
		} else {
			setSearchParams( {} );
		}
	}, [ filterTags, filterOperator, setSearchParams ] );

	const _DataViews = () => (
		<DataViews
			data={ processedData }
			fields={ fields }
			view={ view }
			getItemId={ ( item ) => item.slug }
			onChangeView={ onChangeView }
			onChangeSelection={ onChangeSelection }
			paginationInfo={ paginationInfo }
			defaultLayouts={ defaultLayouts }
		/>
	);

	return (
		<>
			{ activeLayout === 'list' ? (
				<div className="viewsContainer">
					<div className="toggleBox">
						<p>
							By default, in <code>list</code> layout, click on
							any example to see its demo (powered by
							<a href="https://wordpress.org/playground/">
								WordPress Playground
							</a>
							) on the right side.
						</p>
						<p>
							If you would like to open the <code>README.md</code>
							of each example instead on selection, toggle the
							following checkbox.
						</p>
						<ToggleControl
							checked={ !! displayReadme }
							label={
								'Display README on iFrame when selecting an Example'
							}
							onChange={ ( checkedState ) =>
								setDisplayReadme( checkedState )
							}
						/>
					</div>
					<div className="dataViewsContainer">
						<_DataViews />
					</div>

					<div className="iframeContainer">
						<iframe
							ref={ iframeRef }
							src={ `https://playground.wordpress.net` }
							title="Example Iframe" // Title for accessibility
							loading="lazy" // Optional: Defer loading the iframe until it is visible
							id="myIframe"
						/>
					</div>
				</div>
			) : (
				<_DataViews />
			) }
		</>
	);
};

export default Examples;
