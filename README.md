![Coderbox](https://s3-eu-west-1.amazonaws.com/coderbox/common/logo-blue.png)

[![npm](https://img.shields.io/npm/dm/coderbox-libs.svg)](https://www.npmjs.com/package/coderbox-libs)
[![npm](https://img.shields.io/npm/v/coderbox-libs.svg)](https://www.npmjs.com/package/coderbox-libs)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# Introduction
`coderbox-components` is a collection of libraries used to develop the application at [Coderbox](https://www.coderbox.me)

All REST Api calls are made using [superagent](https://github.com/visionmedia/superagent).

# Installation


```
npm install coderbox-components --save
```
Works with [browserify](https://github.com/substack/node-browserify) and should work with [webpack](https://github.com/visionmedia/superagent/wiki/SuperAgent-for-Webpack).

# Modules

```
.
├── autocomplete               # AutoComplete module
├── core                       # 
├── date-range                 # 
├── flexbox                    # 
├── form                       # 
├── infobox                    # 
├── input-location             # 
├── input-tags                 # 
├── list-item                  # 
├── localstorage               # localStorage helper
├── markdown                   # 
├── navigation                 # 
├── restapi                    # 
├── slider                     # 
└── spinner                    # 
```

# Tests

```
gulp test
```