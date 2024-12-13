const fs = require( 'fs' );
const https = require( 'https' );

// Read examples.json
const examples = JSON.parse( fs.readFileSync( '_data/examples.json', 'utf8' ) );

// Read existing contributors.json if it exists
let existingContributors = [];
try {
	existingContributors = JSON.parse(
		fs.readFileSync( '_data/contributors.json', 'utf8' )
	);
} catch ( e ) {
	// File doesn't exist yet, start with empty array
	existingContributors = [];
}

// Extract unique contributor emails, excluding ones we already have
const existingEmails = new Set( existingContributors.map( ( c ) => c.mail ) );
const uniqueEmails = [
	...new Set( examples.flatMap( ( example ) => example.contributors ) ),
].filter( ( email ) => ! existingEmails.has( email ) );

// Function to get GitHub user info
async function getGithubInfo( email ) {
	return new Promise( ( resolve ) => {
		const options = {
			hostname: 'api.github.com',
			path: `/search/users?q=${ encodeURIComponent( email ) }+in:email`,
			headers: {
				'User-Agent': 'Node.js',
				Authorization: `Bearer ${ process.env.GITHUB_TOKEN }`,
			},
		};

		https
			.get( options, ( res ) => {
				let data = '';
				res.on( 'data', ( chunk ) => ( data += chunk ) );
				res.on( 'end', () => {
					try {
						const result = JSON.parse( data );
						if ( result.items && result.items.length > 0 ) {
							const user = result.items[ 0 ];
							resolve( {
								mail: email,
								github: user.login,
								name: user.name || user.login,
							} );
						} else {
							resolve( {
								mail: email,
								github: null,
								name: null,
							} );
						}
					} catch ( e ) {
						resolve( {
							mail: email,
							github: null,
							name: null,
						} );
					}
				} );
			} )
			.on( 'error', () => {
				resolve( {
					mail: email,
					github: null,
					name: null,
				} );
			} );
	} );
}

// Process all new emails
async function generateContributors() {
	const newContributors = [];
	for ( const email of uniqueEmails ) {
		const info = await getGithubInfo( email );
		newContributors.push( info );
		// Respect GitHub API rate limiting
		await new Promise( ( resolve ) => setTimeout( resolve, 1000 ) );
	}

	// Combine existing and new contributors
	const allContributors = [ ...existingContributors, ...newContributors ];

	// Sort by email to maintain consistent ordering
	allContributors.sort( ( a, b ) => a.mail.localeCompare( b.mail ) );

	return allContributors;
}

// Generate and save the file
generateContributors().then( ( contributors ) => {
	fs.writeFileSync(
		'_data/contributors.json',
		JSON.stringify( contributors, null, 2 )
	);
} );
