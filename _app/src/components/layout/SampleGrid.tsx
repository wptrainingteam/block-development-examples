import { useState } from 'react';
import { SampleCard } from '../features/SampleCard';
import { Pagination } from '../features/Pagination';
import type { Example } from '../../types/Example';

interface SampleGridProps {
	samples: Example[];
	className?: string;
	onTagClick?: ( tag: string ) => void;
}

const ITEMS_PER_PAGE = 9;

export function SampleGrid( {
	samples,
	className = '',
	onTagClick,
}: SampleGridProps ) {
	const [ currentPage, setCurrentPage ] = useState( 1 );

	const totalPages = Math.ceil( samples.length / ITEMS_PER_PAGE );
	const startIndex = ( currentPage - 1 ) * ITEMS_PER_PAGE;
	const paginatedSamples = samples.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	);

	if ( samples.length === 0 ) {
		return (
			<div className="text-center py-12">
				<p className="text-gray-500">No samples found.</p>
			</div>
		);
	}

	return (
		<div className={ className }>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{ paginatedSamples.map( ( sample ) => (
					<SampleCard
						key={ `${ sample.slug }-${ sample.name }` }
						sample={ sample }
						onTagClick={ onTagClick }
					/>
				) ) }
			</div>

			{ totalPages > 1 && (
				<div className="mt-8">
					<Pagination
						currentPage={ currentPage }
						totalPages={ totalPages }
						onPageChange={ setCurrentPage }
					/>
				</div>
			) }
		</div>
	);
}
