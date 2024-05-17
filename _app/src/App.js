import { DataViews, filterSortAndPaginate } from '@wordpress/dataviews';
import { useState } from 'react';

import '@wordpress/dataviews/build-style/style.css';
import '@wordpress/components/build-style/style.css';

import EXAMPLES from './_data/examples.json';

function App() {
	const [ data, setData ] = useState( EXAMPLES );

	const fields = [
		{
			id: 'slug',
			header: 'Slug',
			enableGlobalSearch: true,
			enableSorting: true,
		},
		{
			id: 'description',
			header: 'Description',
			enableGlobalSearch: true,
		},
		{
			id: 'tags',
			header: 'Tags',
			render: ( { item } ) => {
				return item.tags.join( ', ' );
			},
			enableSorting: false,
		},
	];

	const [ paginationInfo, setPaginationInfo ] = useState( {
		totalItems: 0,
		totalPages: 0,
	} );
	const [ view, setView ] = useState( {
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
	} );

	// const fields = [
	// 	{
	// 		id: 'imaxe_src',
	// 		header: 'Imaxe',
	// 		render: ( { item } ) => (
	// 			<a title={ item.imaxe_autor } href={ item.imaxe_url }>
	// 				<img
	// 					width="512"
	// 					alt="Praia de Silgar, Sanxenxo, Galiza"
	// 					src={ item.imaxe_src }
	// 				/>
	// 			</a>
	// 		),
	// 		enableSorting: false,
	// 	},
	// 	{
	// 		id: 'nome',
	// 		header: 'Nome',
	// 		enableGlobalSearch: true,
	// 	},
	// 	{
	// 		id: 'provincia',
	// 		header: 'Provincia',
	// 		enableGlobalSearch: true,
	// 		elements: PROVINCIAS,
	// 		filterBy: {
	// 			isPrimary: true,
	// 			operators: [ 'is' ],
	// 		},
	// 	},
	// 	{
	// 		id: 'habitantes',
	// 		header: 'Nro hab.',
	// 		render: ( { item } ) => formatNumber( item.habitantes ),
	// 		enableSorting: false, // filterSortAndPaginate cannot sort by number types yet.
	// 	},
	// 	{
	// 		id: 'km_cadrados',
	// 		header: 'Extensión (km2)',
	// 		render: ( { item } ) => formatNumber( item.km_cadrados ),
	// 		enableSorting: false, // filterSortAndPaginate cannot sort by number types yet.
	// 	},
	// ];

	const onChangeView = ( view ) => {
		const { data: newData, paginationInfo: newPaginationInfo } =
			filterSortAndPaginate( EXAMPLES, view, fields );
		setView( view );
		setData( newData );
		setPaginationInfo( newPaginationInfo );
	};

	return (
		<DataViews
			data={ data }
			fields={ fields }
			view={ view }
			getItemId={ ( item ) => item.slug }
			onChangeView={ onChangeView }
			paginationInfo={ paginationInfo }
		/>
	);
}

export default App;
