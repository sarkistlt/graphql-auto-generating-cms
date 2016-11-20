import printedSchema from '../example/src/schema';
import CMSConfig from '../example/src/cms_config';
import path from 'path';
import { printSchema } from 'graphql';
const {parse} = require('graphql');
import {
    graphqlCMS,
    fileUploadingMiddleware,
    applyRules,
    resolveInputType,
    resolveInputControl,
    getResolverName,
    findResolverArgs,
    checkMethodPermission,
    getListHeader,
    hasNestedFields,
    getTypeListData,
    isListOfType,
    getFields,
    fixPath
} from '../lib/middleware';
const expect = require('chai').expect;

const schema = parse(printSchema(printedSchema));
const rules = CMSConfig.rules ? CMSConfig.rules : false;
const exclude = CMSConfig.exclude ? CMSConfig.exclude : false;
const uploadRoot = CMSConfig.uploadRoot ? fixPath(CMSConfig.uploadRoot) : false;
const Mutations = schema.definitions.find(obj => obj.name.value === 'Mutation');
const Queries = schema.definitions.find(obj => obj.name.value === 'Query');

describe('graphqlCMS:middleware', () => {
    describe('var:schema', () => {
        it('check if it\'s valid parsed schema', () => {
            expect(schema).to.be.an('object').and.to.contain.all.keys('kind', 'definitions');
            expect(schema.kind).to.be.a('string').and.to.be.equal('Document');
            expect(schema.definitions).to.be.an('array');
        });
    });
    describe('func:fixPath', () => {
        it('should check and fix "/" symbol in upload pathes from user config', () => {
            let fixedPath1 = fixPath('public/src'),
                fixedPath2 = fixPath('/public/src/'),
                fixedPath3 = fixPath('public/src/');

            expect(fixedPath1).to.be.a('string').and.to.be.equal('/public/src');
            expect(fixedPath2).to.be.a('string').and.to.be.equal('/public/src');
            expect(fixedPath3).to.be.a('string').and.to.be.equal('/public/src');
        });
    });
    describe('func:isListOfType', () => {
        it('should return true if this field of graphQL Type is a graphQLlist', () => {
            expect(isListOfType('Int')).to.be.a('boolean').and.to.be.false;
            expect(isListOfType('Float')).to.be.a('boolean').and.to.be.false;
            expect(isListOfType('Boolean')).to.be.a('boolean').and.to.be.false;
            expect(isListOfType('String')).to.be.a('boolean').and.to.be.false;
            expect(isListOfType('other types')).to.be.a('boolean').and.to.be.true;
        });
    });
    describe('func:hasNestedFields', () => {
        it('should return true if this field of graphQL Type has nested fields', () => {
            expect(hasNestedFields('BoOlean')).to.be.a('boolean').and.to.be.false;
            expect(hasNestedFields('STriNg')).to.be.a('boolean').and.to.be.false;
            expect(hasNestedFields('iNt')).to.be.a('boolean').and.to.be.false;
            expect(hasNestedFields('floAt')).to.be.a('boolean').and.to.be.false;
            expect(hasNestedFields('nuMber')).to.be.a('boolean').and.to.be.false;
            expect(hasNestedFields('other types')).to.be.a('boolean').and.to.be.true;
        });
    });
    describe('func:resolveInputControl', () => {
        it('check if this field type need "input" controler', () => {
            expect(resolveInputControl('Int')).to.be.a('string').and.to.be.equal('input');
            expect(resolveInputControl('Float')).to.be.a('string').and.to.be.equal('input');
            expect(resolveInputControl('Boolean')).to.be.a('string').and.to.be.equal('input');
            expect(resolveInputControl('String')).to.be.a('string').and.to.be.equal('input');
            expect(resolveInputControl('other types')).to.be.a('string').and.to.be.equal('input');
        });
    });
    describe('func:resolveInputType', () => {
        it('return input type for each field of graphQL Type', () => {
            expect(resolveInputType('Int')).to.be.a('string').and.to.be.equal('number');
            expect(resolveInputType('Float')).to.be.a('string').and.to.be.equal('number');
            expect(resolveInputType('Boolean')).to.be.a('string').and.to.be.equal('checkbox');
            expect(resolveInputType('String')).to.be.a('string').and.to.be.equal('text');
            expect(resolveInputType('other types')).to.be.a('string').and.to.be.equal('text');
        });
    });
    describe('func:getFields', () => {
        it('return object with all fields of graphQL Type + additional information for each field', () => {
            Queries.fields.forEach(graphqlType => {
                let typeName = graphqlType.type.type.name.value,
                    fields = getFields(schema, typeName, rules);

                for (let key in fields) {
                    if (fields.hasOwnProperty(key)) {
                        expect(fields[key]).to.be.an('object').and.to.have.all.keys(
                            'label',
                            'fieldType',
                            'inputType',
                            'inputControl',
                            'disabled',
                            'exclude',
                            'list',
                            'nestedFields'
                        );
                        expect(fields[key].label).to.be.a('string');
                        expect(fields[key].fieldType).to.be.a('string');
                        expect(
                            typeof (fields[key].inputType) === 'string' ||
                            typeof (fields[key].inputType) === 'boolean'
                        ).to.be.true;
                        expect(fields[key].inputControl).to.be.a('string');
                        expect(fields[key].disabled).to.be.a('boolean');
                        expect(fields[key].exclude).to.be.a('boolean');
                        expect(
                            typeof (fields[key].list) === 'object' ||
                            typeof (fields[key].list) === 'boolean'
                        ).to.be.true;
                        expect(
                            typeof (fields[key].nestedFields) === 'object' ||
                            typeof (fields[key].nestedFields) === 'boolean'
                        ).to.be.true;
                    }
                }
            })
        });
    });
    describe('func:getTypeListData', () => {
        it('if field of graphQL Type is graphQLList, should return new "schema" object for that field', () => {
            Queries.fields.forEach(graphqlType => {
                let typeName = graphqlType.type.type.name.value,
                    fields = getFields(schema, typeName, rules);

                for (let key in fields) {
                    if (fields.hasOwnProperty(key) && fields[key].list) {
                        let listSchema = getTypeListData(schema, fields[key].fieldType, rules);

                        expect(listSchema).to.be.an('object').and.to.have.all.keys(
                            'label',
                            'propTypeName',
                            'resolvers'
                        );
                        expect(listSchema.label).to.be.false;
                        expect(listSchema.propTypeName).to.be.a('string');
                        expect(listSchema.resolvers).to.be.an('object');
                        expect(listSchema.resolvers).to.have.all.keys('find', 'create');
                        expect(listSchema.resolvers.find).to.have.all.keys('resolver', 'args');
                        expect(listSchema.resolvers.create).to.have.all.keys('resolver', 'args');
                    }
                }
            })
        });
    });
    describe('func:getListHeader', () => {
        it('get fields name which will be used as table header in CMS', () => {
            Queries.fields.forEach(graphqlType => {
                let typeName = graphqlType.type.type.name.value,
                    fields = getFields(schema, typeName, rules);

                for (let key in fields) {
                    if (fields.hasOwnProperty(key) && fields[key].list) {
                        let listSchema = getTypeListData(schema, fields[key].fieldType, rules);

                        expect(listSchema).to.be.an('object').and.to.have.all.keys(
                            'label',
                            'propTypeName',
                            'resolvers'
                        );
                        expect(listSchema.label).to.be.false;
                        expect(listSchema.propTypeName).to.be.a('string');
                        expect(listSchema.resolvers).to.be.an('object');
                        expect(listSchema.resolvers).to.have.all.keys('find', 'create');
                        expect(listSchema.resolvers.find).to.have.all.keys('resolver', 'args');
                        expect(listSchema.resolvers.create).to.have.all.keys('resolver', 'args');
                    }
                }
            })
        });
    });
});