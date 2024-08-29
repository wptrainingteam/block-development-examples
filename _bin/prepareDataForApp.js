const { join } = require( 'path' );
const fs = require( 'fs' );

// const rootPath = process.cwd();
const examplesJsonPath = join( rootPath, './_data/examples.json' ); //?
const tagsJsonPath = join( rootPath, './_data/tags.json' ); //?

const examplesJson = JSON.parse( fs.readFileSync( examplesJsonPath, 'utf8' ) );
const tagsJson = JSON.parse( fs.readFileSync( tagsJsonPath, 'utf8' ) );

const examplesPerTag = tagsJson.reduce( ( acc, { slug } ) => {
	acc[ slug ] = examplesJson.filter( ( { tags } ) => tags.includes( slug ) );
	return acc;
}, {} );

console.log( examplesJson );
console.log( tagsJson );
console.log( examplesPerTag );
