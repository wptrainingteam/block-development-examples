import { useSearchParams } from 'react-router-dom';
import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { useState, useEffect, useMemo, useRef } from 'react';
import { getItemsForFilter } from './utils';
import './styles.scss';

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
	perPage: 5,
	filters: [],
	fields: [ 'slug', 'folder', 'demo', 'zip', 'description', 'tags' ],
};

const Examples = () => {
	const [ searchParams, setSearchParams ] = useSearchParams();
	const [ activeLayout, setActiveLayout ] = useState();
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
	const onChangeSelection = ( [ selectedExampleSlug ] ) => {
		const selectedExamplePlaygroundDemoUrl = `https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/${ selectedExampleSlug }/_playground/blueprint.json`;
		iframeRef.current.contentWindow.location.href =
			selectedExamplePlaygroundDemoUrl;
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
			<div className="intro">
				<p>
					Dynamic table of examples at
					<a
						href={
							'https://github.com/WordPress/block-development-examples'
						}
					>
						WordPress/block-development-examples
					</a>
				</p>
			</div>
			{ activeLayout === 'list' ? (
				<div className="viewsContainer">
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
