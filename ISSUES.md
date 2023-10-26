# Issues

## Current Issues

### 1. docusaurus-lunr-search

using a private fork of version 2.1.15. Can't remember why but it doesn't seem to work with official versions. e.g. when running 'yarn build' the message will report 'indexed 0 out of X documents'

### 2. Dependencies

Various warnings during 'yarn install' most appear to be originating from the lunr-search. See below

```txt
warning "@docusaurus/preset-classic > @docusaurus/plugin-debug > @microlink/react-json-view > flux@4.0.4" has incorrect peer dependency "react@^15.0.2 || ^16.0.0 || ^17.0.0".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-preset-algolia@1.9.3" has unmet peer dependency "@algolia/client-search@>= 4.9.1 < 6".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-core > @algolia/autocomplete-plugin-algolia-insights@1.9.3" has unmet peer dependency "search-insights@>= 1 < 3".
warning "@docusaurus/preset-classic > @docusaurus/theme-search-algolia > @docsearch/react > @algolia/autocomplete-core > @algolia/autocomplete-shared@1.9.3" has unmet peer dependency "@algolia/client-search@>= 4.9.1 < 6".
warning " > docusaurus-lunr-search@2.1.15" has incorrect peer dependency "@docusaurus/core@^2.0.0-alpha.60 || ^2.0.0".
warning " > docusaurus-lunr-search@2.1.15" has incorrect peer dependency "react@^16.8.4 || ^17".
warning " > docusaurus-lunr-search@2.1.15" has incorrect peer dependency "react-dom@^16.8.4 || ^17".
```

## Old Issues

### 1. Latex Math

The latex math plugin is not working. Was working OK with docusaurus 2.x but can't seem to get it right with 3.x. Pages with $ and $$ environments will just show the dollar signs and raw latex code - and the latex code will then trigger further mdx errors due to the unescaped characters.

Answer seems to be here but needs more investigation:

<https://docusaurus.io/docs/next/markdown-features/math-equations>

#### Resolution

Simply had to upgrade `remark-math` and `rehype-katex` with:

```bash
yarn add remark-math@5 rehype-katex@6
```
