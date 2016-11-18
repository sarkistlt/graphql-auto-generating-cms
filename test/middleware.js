import schema from '../example/src/schema';
import path from 'path';
import { printSchema } from 'graphql';
import graphqlCMS from '../src/middleware';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
let assert = require('chai').assert;
let expect = require('chai').expect;
chai.use(chaiEnzyme());
/**
 * DRAFT
 */
describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});