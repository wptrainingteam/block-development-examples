# Quiz 1835fa

The goal of this example is to show how to use the Interactivity API to communicate info between two blocks.

This example has been adapted (to use the latest API of the Interactivity API) from the [original example](https://github.com/luisherranz/wceu2023/tree/main) used for the [WordCamp Europe 2023 workshop, Building Interactive blocks](https://europe.wordcamp.org/2023/session/building-interactive-blocks-a-step-by-step-workshop/) workshopby [Luis Herranz](https://twitter.com/luisherranz). The recording of this workshop is available [here](https://www.youtube.com/watch?v=QS3IpSZ1sHY).

<!-- Please, do not remove these @TABLE EXAMPLES BEGIN and @TABLE EXAMPLES END comments or modify the table inside. This table is automatically generated from the data at _data/examples.json and _data/tags.json -->
<!-- @TABLE EXAMPLES BEGIN -->

| Folder                                                                                                         | <span style="display: inline-block; width:250px">Short description</span> | Tags                                                                                                                                                                                                                                                                                                   | ID ([❓](https://github.com/WordPress/block-development-examples/wiki/04-Why-an-ID-for-every-example%3F 'Why an ID for every example?')) | Download .zip                                                                                                                                                                                                                                                             | Live Demo                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [📁](https://github.com/WordPress/block-development-examples/tree/trunk/plugins/interactivity-api-quiz-1835fa) | Interactivity API Quiz                                                    | <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#interactive-block">INTERACTIVE BLOCK</a></code></small>, <small><code><a href="https://github.com/WordPress/block-development-examples/wiki/03-Tags#interactivity-api">INTERACTIVITY API</a></code></small> | `1835fa`                                                                                                                                 | [📦](https://raw.githubusercontent.com/WordPress/block-development-examples/deploy/zips/interactivity-api-quiz-1835fa.zip 'Install the plugin using this zip and activate it. Then use the ID of the block (1835fa) to find it and add it to a post to see it in action') | [![](https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/_assets/icon-wp.svg)](https://playground.wordpress.net/?blueprint-url=https://raw.githubusercontent.com/WordPress/block-development-examples/trunk/plugins/interactivity-api-quiz-1835fa/_playground/blueprint.json 'Use the ID of the block (1835fa) to find it and add it to a post to see it in action') |

<!-- @TABLE EXAMPLES END -->

## Understanding the Example Code

Some key ideas for this example are:

-   Both blocks share a common store named `quiz-1835fa-project-store`
-   Each quiz has a unique ID which is stored in the local state (its context) of each quiz
-   For `quiz-1835fa` block, the components used to define the controls in the sidebar are defined in a component apart (`editControls.js`)

## Related resources

-   https://developer.wordpress.org/block-editor/reference-guides/interactivity-api/

---

> **Note**
> Check the [Start Guide for local development with the examples](https://github.com/WordPress/block-development-examples/wiki/02-Examples#start-guide-for-local-development-with-the-examples)
