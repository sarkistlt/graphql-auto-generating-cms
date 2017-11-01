const parse = require('graphql').parse;

console.log(parse(require('./schema.js')));
