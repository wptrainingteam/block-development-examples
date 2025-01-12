# Data Files

This directory contains the JSON data files that power the Block Development Examples website and the tables generation scripts . Below is a description of each file and how they are maintained.

## Files Overview

### `examples.json`

Contains the metadata for all block development examples in the repository. Each example is represented by an object like the following:

```
	{
		"slug": "block-dynamic-rendering-64756b",
		"name": "Basic Block with Dynamic Rendering",
		"description": "Demonstrates how to create a block that renders its content dynamically on the server side rather than saving static content in the post content.",
		"tags": [
			"dynamic-rendering",
			"create-block"
		],
		"contributors": [
			"fai-sal",
			"juanmaguitar",
			"ryanwelcher"
		],
		"created": "2023-10-10T09:49:59+01:00",
		"lastModified": "2025-01-07T18:25:53+01:00"
	},
```

**Update Process**

When a new example is added to the repo, a new object representing that example should be manually added to this file

-   The field `tags` should be manually added and the tag slug added should match the slug of one of the tags defined at `tags.json`
-   The field `contributors` can be manually added or can be automatically filled by running the GitHub Action [\_Update GitHub Contributors](https://github.com/WordPress/block-development-examples/actions/workflows/github-contributors.yml)
    -   This Github Action will generate a PR with the changes on the file
-   The fields `created` and `lastModified` can be automatically updated locally by running `npm run dates:update` from the root of the folder

### `tags.json`

Contains the taxonomy of tags used to categorize the examples, including descriptions for each tag.

```
{
		"slug": "interactivity-api",
		"name": "INTERACTIVITY API",
		"description": "These examples show the use of the experimental [Interactivity API](https://make.wordpress.org/core/2023/03/30/proposal-the-interactivity-api-a-better-developer-experience-in-building-interactive-blocks/) in Blocks via the [`@wordpress/interactivity` package](https://github.com/WordPress/gutenberg/blob/trunk/packages/interactivity/README.md)"
	},
```

**Update Process**: Manually updated

When a new tag is used to define one of the examples, a new object representing that example should be manually added to this file

-   The field `description` can contain markdown with links

### `contributors.json`

Lists all contributors to the examples with their GitHub usernames and display names. This info is used to provide extended info of examples' contributors beyond their GitHub usernames.

**Update Process**

-   Extended info of new contributors can be manually added to this file when they contribute to an example
-   New contributors can be automatically added by running the GitHub Action [\_Contributor Details](https://github.com/WordPress/block-development-examples/actions/workflows/contributor-details.yml)
    -   This Gihub Action will generate a PR with the changes on the file
