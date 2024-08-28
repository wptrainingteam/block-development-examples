/**
 * Returns an array of unique items for a given filter.
 *
 * @param {string} filterByItem - The item to filter by.
 * @returns {Array} - An array of objects with label and value properties.
 */
export const getItemsForFilter = ( filterByItem ) => ( items ) => {
	const allItemsFilterBy = items.reduce( ( acc, item ) => {
		return acc.concat( item[ filterByItem ] );
	}, [] );
	return [ ...new Set( allItemsFilterBy ) ].map( ( itemFilterBy ) => {
		return {
			label: itemFilterBy
				.replace( /-/g, ' ' )
				.replace( /\b\w/g, ( l ) => l.toUpperCase() ),
			value: itemFilterBy,
		};
	} );
};
