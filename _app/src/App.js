import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { useState, useMemo } from 'react';
import { getItemsForFilter } from './utils';
import './styles.scss';

import data from './_data/examples.json';
const tagsForFilter = getItemsForFilter( 'tags' )( data );
console.log( tagsForFilter );
const fields = [
	{
		id: 'slug',
		label: 'Slug',
		enableGlobalSearch: true,
		enableHiding: false,
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
		enableGlobalSearch: true,
		enableSorting: false,
		render: ( { item } ) => {
			return (
				<div class="tags_example">
					{ item.tags.map( ( tag ) => (
						<span>{ tag.toUpperCase() }</span>
					) ) }
				</div>
			);
		},
		filterBy: {
			isPrimary: true,
		},
	},
];

const DEFAULT_VIEW = {
	type: 'table',
	hiddenFields: [],
	perPage: 10,
	layout: {
		page: 1,
		perPage: 10,
		layout: {},
		columnFields: [],
	},
	filters: [],
	fields: [ 'slug', 'folder', 'demo', 'zip', 'description', 'tags' ],
};

const App = () => {
	const [ view, setView ] = useState( DEFAULT_VIEW );
	const { data: processedData, paginationInfo } = useMemo( () => {
		return filterSortAndPaginate( data, view, fields );
	}, [ view ] );

	return (
		<DataViews
			data={ processedData }
			fields={ fields }
			view={ view }
			getItemId={ ( item ) => item.slug }
			onChangeView={ setView }
			paginationInfo={ paginationInfo }
		/>
	);
};

export default App;
