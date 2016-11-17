[![Build Status](https://travis-ci.org/sarkistlt/graphql-auto-generating-cms.svg?branch=master)](https://travis-ci.org/sarkistlt/graphql-auto-generating-cms)

![alt tag](https://github.com/sarkistlt/graphql-auto-generating-cms/blob/master/example/screenshots/Screen-Shot-2016-10-31-at-10.33.13-AM.png)
This package will build a fully-functional CMS by just using your printed GraphQL schema without any changes in your existed code or architecture.

**New release [v2] is available!**


**What is new:**
* [Example which you can run in one step on your local machine](/example/)
* Support of nested fields in a graphQL Type, any depth
* GraphQLList support
* File uploading support

**TODO:**
* Test cases [in progress]

**[Documentation](https://sarkistlt.gitbooks.io/graphql-cms/content/)**

[Auto generating CMS based on your GraphQL schema.](https://medium.com/@sarkis.tlt/auto-generating-cms-based-on-your-graphql-schema-5eaa6b07987b#.7lk3gbz0b) [v1]

### Install
~~~sh
npm i -S graphql-auto-generating-cms
~~~
> **If CMS doesn't work correct or you have any error massages in console after bundling your project, instead of ```npm```, directly use source code from ```./src``` or ```./lib``` folder in repository, to import React component on client side.**

> **if you use React component from source code, you need to install following babel presets:**
* **babel-preset-es2015**
* **babel-preset-react**
* **babel-preset-stage-0**
* **babel-preset-stage-1**

# License
MIT

