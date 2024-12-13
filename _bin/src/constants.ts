import path from 'path';

export const SLUG_EXAMPLE_MARKER = '<%SLUG_EXAMPLE_MARKER%>';

export const URL_WIKI =
	'https://github.com/WordPress/block-development-examples/wiki';
export const URL_ASSETS = `https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets`;
export const URL_REPO = `https://github.com/WordPress/block-development-examples/tree/trunk`;
export const WIKI_PAGE_WHY_ID = '04-Why-an-ID-for-every-example%3F';
export const WIKI_PAGE_TAGS = '03-Tags';
export const REPO_ORIGIN = 'WordPress/block-development-examples';
export const URL_EXAMPLE_ZIP = `https://raw.githubusercontent.com/${ REPO_ORIGIN }/deploy/zips/${ SLUG_EXAMPLE_MARKER }.zip`;
export const PLAYGROUND_URL_WITH_PLUGIN = `https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22${ URL_EXAMPLE_ZIP }%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D`;

export const PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG = `https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22${ URL_EXAMPLE_ZIP }%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}`;
export const URL_PLAYGROUND_BLUEPRINT = `https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/${ SLUG_EXAMPLE_MARKER }/_playground/blueprint.json`;
export const PROJECT_FOLDER_NAME = 'bde-fork';

export const PLUGINS_PATH = path.join( process.cwd(), 'plugins' );
export const EXAMPLES_DATA_PATH = path.join(
	process.cwd(),
	'_data',
	'examples.json'
);
export const TAGS_DATA_PATH = path.join( process.cwd(), '_data', 'tags.json' );
