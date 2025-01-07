import path from 'path';

// Base paths
export const ROOT_PATH = process.cwd();
export const PLUGINS_PATH = path.join( ROOT_PATH, 'plugins' );
export const DATA_PATH = path.join( ROOT_PATH, '_data' );

// File paths
export const ROOT_README_PATH = path.join( ROOT_PATH, 'README.md' );
export const EXAMPLES_DATA_PATH = path.join( DATA_PATH, 'examples.json' );
export const TAGS_DATA_PATH = path.join( DATA_PATH, 'tags.json' );

// Repository info
export const REPO_ORIGIN = 'WordPress/block-development-examples';
export const REPO_BRANCH = 'trunk';
export const PROJECT_FOLDER_NAME = 'bde-fork';

// URL markers and segments
export const SLUG_EXAMPLE_MARKER = '<%SLUG_EXAMPLE_MARKER%>';

// Base URLs
export const GITHUB_BASE_URL = `https://github.com/${ REPO_ORIGIN }`;
export const RAW_GITHUB_BASE_URL = `https://raw.githubusercontent.com/${ REPO_ORIGIN }/${ REPO_BRANCH }`;

// Documentation URLs
export const URL_WIKI = `${ GITHUB_BASE_URL }/wiki`;
export const WIKI_PAGE_WHY_ID = '04-Why-an-ID-for-every-example%3F';
export const WIKI_PAGE_TAGS = '03-Tags';

// App URLS
export const APP_URL =
	'https://WordPress.github.io/block-development-examples/';
export const APP_URL_WITH_TAGS = `${ APP_URL }?tags=`;

// Resource URLs
export const URL_REPO = `${ GITHUB_BASE_URL }/tree/${ REPO_BRANCH }`;
export const URL_ASSETS = `${ RAW_GITHUB_BASE_URL }/_assets`;
export const URL_EXAMPLE_ZIP = `https://github.com/${ REPO_ORIGIN }/releases/download/latest/${ SLUG_EXAMPLE_MARKER }.zip`;
export const URL_PLAYGROUND_BLUEPRINT = `${ RAW_GITHUB_BASE_URL }/plugins/${ SLUG_EXAMPLE_MARKER }/_playground/blueprint.json`;

// Playground URLs
export const PLAYGROUND_URL_WITH_PLUGIN = `https://playground.wordpress.net/#%7B%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:%5B%7B%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22%7D,%7B%22step%22:%22mkdir%22,%22path%22:%22/downloads%22%7D,%7B%22step%22:%22writeFile%22,%22path%22:%22/downloads/plugin.zip%22,%22data%22:%7B%22resource%22:%22url%22,%22url%22:%22${ URL_EXAMPLE_ZIP }%22,%22caption%22:%22Downloading%20plugin...%22%7D%7D,%7B%22step%22:%22installPlugin%22,%22pluginZipFile%22:%7B%22resource%22:%22vfs%22,%22path%22:%22/downloads/plugin.zip%22%7D%7D%5D%7D`;
export const PLAYGROUND_URL_WITH_PLUGIN_AND_GUTENBERG = `https://playground.wordpress.net/#{%22landingPage%22:%22/wp-admin/plugins.php%22,%22steps%22:[{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22url%22,%22url%22:%22${ URL_EXAMPLE_ZIP }%22}},{%22step%22:%22installPlugin%22,%22pluginZipFile%22:{%22resource%22:%22wordpress.org/plugins%22,%22slug%22:%22gutenberg%22}},{%22step%22:%22login%22,%22username%22:%22admin%22,%22password%22:%22password%22}]}`;
