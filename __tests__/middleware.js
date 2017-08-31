import {expect} from 'chai';
import printedSchema from '../example/src/schema';
import CMSConfig from '../example/src/cms_config';
import {printSchema, parse} from 'graphql';
import {
  applyRules,
  getResolverName,
  findResolverArgs,
  checkMethodPermission,
  resolveInputType,
  resolveInputControl,
  hasNestedFields,
  getTypeListData,
  isListOfType,
  getFields,
  fixPath,
  graphqlCMS
} from '../lib/middleware';

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
          fields = getFields({ schema, typeName, rules });
        
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
            fields = getFields({ schema, typeName, rules });
        
        for (let key in fields) {
          if (fields.hasOwnProperty(key) && fields[key].list) {
            let listSchema = getTypeListData({ schema, rules, typeName: fields[key].fieldType });
            
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
  describe('func:checkMethodPermission', () => {
    it('check if mutation permission is allowed for each graphQL Type', () => {
      Queries.fields.forEach(graphqlType => {
        let typeName = graphqlType.type.type.name.value,
          find = checkMethodPermission({ rules, typeName, method: 'find', mutations: Mutations }),
          create = checkMethodPermission({ rules, typeName, method: 'create', mutations: Mutations }),
          update = checkMethodPermission({ rules, typeName, method: 'update', mutations: Mutations }),
          remove = checkMethodPermission({ rules, typeName, method: 'remove', mutations: Mutations });
        
        expect(find).to.be.a('boolean');
        expect(create).to.be.a('boolean');
        expect(update).to.be.a('boolean');
        expect(remove).to.be.a('boolean');
      })
    });
  });
  describe('func:findResolverArgs', () => {
    it('find all arguments for each mutation method of GraphQL Type', () => {
      Queries.fields.forEach(graphqlType => {
        let typeName = graphqlType.type.type.name.value,
          find = findResolverArgs({ typeName, method: 'find', fields: Queries.fields, rules }),
          create = findResolverArgs({ typeName, method: 'create', fields: Mutations.fields, rules }),
          update = findResolverArgs({ typeName, method: 'update', fields: Mutations.fields, rules }),
          remove = findResolverArgs({ typeName, method: 'remove', fields: Mutations.fields, rules });
        
        expect(find).to.be.an('object');
        expect(create).to.be.a('object');
        expect(update).to.be.a('object');
        expect(remove).to.be.a('object');
      })
    });
  });
  describe('func:getResolverName', () => {
    it('get names of GraphQL Type mutation methods', () => {
      Queries.fields.forEach(graphqlType => {
        let typeName = graphqlType.type.type.name.value,
          find = getResolverName(typeName, 'find', rules),
          create = getResolverName(typeName, 'create', rules),
          update = getResolverName(typeName, 'update', rules),
          remove = getResolverName(typeName, 'remove', rules);
        
        expect(find).to.be.a('string');
        expect(create).to.be.a('string');
        expect(update).to.be.a('string');
        expect(remove).to.be.a('string');
      })
    });
  });
  describe('func:graphqlCMS', () => {
    it('generate "shape" object for CMS', () => {
      let shape = graphqlCMS({ schema, rules, exclude, uploadRoot });
      expect(shape).to.be.an('object');
  
    });
  });
  describe('func:applyRules', () => {
    it('apply users config object to auto-generated shape object for CMS', () => {
      const result = applyRules({ rules, shape: graphqlCMS({ schema, rules, exclude, uploadRoot }) });
      expect(result).to.be.an('object');
    });
  });
});