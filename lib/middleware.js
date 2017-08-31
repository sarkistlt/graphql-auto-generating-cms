'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fileUploadingMiddleware = exports.graphqlCMS = exports.fixPath = exports.isListOfType = exports.hasNestedFields = exports.resolveInputControl = exports.resolveInputType = exports.getFields = exports.getTypeListData = exports.getListHeader = exports.checkMethodPermission = exports.findResolverArgs = exports.getResolverName = exports.applyRules = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (config) {
  const schema = config.schema ? (0, _graphql.parse)(config.schema) : false;
  if (!schema) {
    throw new Error('you have to provide your PRINTED schema in config object "{schema: myPrintedSchema}"');
  }
  const rules = config.rules ? config.rules : false;
  const exclude = config.exclude ? config.exclude : false;
  const uploadRoot = config.uploadRoot ? fixPath(config.uploadRoot) : false;
  return (req, res) => {
    if (req.method.toLowerCase() === 'get') {
      res.send(applyRules({ rules, shape: graphqlCMS({ schema, rules, exclude, uploadRoot }) }));
    } else if (req.method.toLowerCase() === 'post') {
      fileUploadingMiddleware.call(this, req, res, uploadRoot);
    }
  };
};

var _formidable = require('formidable');

var _formidable2 = _interopRequireDefault(_formidable);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _graphql = require('graphql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const applyRules = function funcApplyRules(args) {
  const { shape, rules } = args;
  const response = rules ? _extends({}, rules) : _extends({}, shape);
  if (rules) {
    Object.keys(shape).forEach(key => {
      if (typeof shape[key] === 'object') {
        if (!response[key]) {
          response[key] = shape[key];
        } else {
          response[key] = applyRules({ shape: shape[key], rules: response[key] });
        }
      } else if (!response[key] && typeof response[key] !== 'boolean') {
        response[key] = shape[key];
      }
    });
  }
  Object.keys(response).forEach(key => {
    if (key === 'resolvers') {
      Object.keys(response[key]).forEach(resolver => {
        if (typeof response[key][resolver].allowed === 'boolean' && !response[key][resolver].allowed) {
          delete response[key][resolver];
        }
      });
    }
  });
  return response;
};
const getResolverName = function funcGetResolverName(args) {
  const { typeName, method, rules } = args;
  let resolverName = '';
  if (rules && rules[typeName] && rules[typeName].resolvers && rules[typeName].resolvers[method] && rules[typeName].resolvers[method].resolver) {
    resolverName = rules[typeName].resolvers[method].resolver;
  } else {
    resolverName = `${typeName}_${method}`;
  }
  return resolverName;
};
const findResolverArgs = function funcFindResolverArgs(args) {
  const { typeName, method, fields, rules } = args;
  const respond = {};
  let tmpObj = {};
  if (rules && rules[typeName] && rules[typeName].resolvers && rules[typeName].resolvers[method] && rules[typeName].resolvers[method].resolver) {
    tmpObj = fields.find(obj => obj.name.value === rules[typeName].resolvers[method].resolver);
  } else {
    tmpObj = fields.find(obj => obj.name.value === `${typeName}_${method}`);
  }
  if (tmpObj && tmpObj.arguments) {
    tmpObj.arguments.forEach(argObj => {
      respond[argObj.name.value] = argObj.type.kind === 'NonNullType' ? `${argObj.type.type.name.value}!` : argObj.type.name.value;
    });
  }
  return respond;
};
const checkMethodPermission = function funcCheckMethodPermission(args) {
  const { typeName, method, mutations, rules } = args;
  let hasMethod = !!mutations.fields.find(obj => obj.name.value === `${typeName}_${method}`);
  if (rules && hasMethod && rules[typeName] && rules[typeName].resolvers && rules[typeName].resolvers[method] && (rules[typeName].resolvers[method].allowed || typeof rules[typeName].resolvers[method].allowed === 'boolean')) {
    hasMethod = rules[typeName].resolvers[method].allowed;
  }
  return hasMethod;
};
const getListHeader = function funcGetListHeader(args) {
  const { shape } = args;
  const response = _extends({}, shape);
  let id;
  let title;
  Object.keys(response).forEach(key => {
    id = Object.keys(response[key].fields).find(i => i === 'id' || i === '_id');
    title = Object.keys(response[key].fields)[1];
    response[key].listHeader = { id: [id], title: [title] };
  });
  return response;
};
const getTypeListData = function funcGetTypeListData(args) {
  const { schema, typeName, rules } = args;
  const Queries = schema.definitions.find(obj => obj.name.value === 'Query');
  const Mutations = schema.definitions.find(obj => obj.name.value === 'Mutation');
  return {
    propTypeName: typeName,
    label: false,
    resolvers: {
      find: {
        resolver: getResolverName({ rules, typeName, method: 'find' }),
        args: findResolverArgs({ rules, typeName, method: 'find', fields: Queries.fields })
      },
      create: {
        resolver: getResolverName({ rules, typeName, method: 'create' }),
        args: findResolverArgs({ rules, typeName, method: 'create', fields: Mutations.fields })
      }
    }
  };
};
const hasNestedFields = function funcHasNestedFields(propType) {
  switch (propType.toLowerCase()) {
    case 'boolean':
      return false;
    case 'string':
      return false;
    case 'int':
      return false;
    case 'float':
      return false;
    case 'number':
      return false;
    default:
      return true;
  }
};
const isListOfType = function funcIsListOfType(typeValue) {
  switch (typeValue) {
    case 'Int':
      return false;
    case 'Float':
      return false;
    case 'Boolean':
      return false;
    case 'String':
      return false;
    default:
      return true;
  }
};
const resolveInputType = function funcResolveInputType(scalarType) {
  switch (scalarType || scalarType.slice(0, -1)) {
    case 'Int':
      return 'number';
    case 'Float':
      return 'number';
    case 'Boolean':
      return 'checkbox';
    case 'String':
      return 'text';
    default:
      return 'text';
  }
};
const resolveInputControl = function funcResolveInputControl(scalarType) {
  switch (scalarType || scalarType.slice(0, -1)) {
    case 'Int':
      return 'input';
    case 'Float':
      return 'input';
    case 'Boolean':
      return 'input';
    case 'String':
      return 'input';
    default:
      return 'input';
  }
};
const getFields = function funcGetFields(args) {
  const { schema, typeName, rules } = args;
  const typeObject = schema.definitions.find(obj => obj.name.value === typeName);
  const result = {};
  typeObject.fields.forEach(prop => {
    if (prop && prop.type && prop.type.kind !== 'ListType') {
      if (prop.name && prop.name.value && prop.type.name && prop.type.name.value && prop.name.value !== 'Mutation' && prop.name.value !== 'Query') {
        const has = hasNestedFields(prop.type.name.value);
        result[prop.name.value] = {
          label: prop.name.value,
          fieldType: prop.type.name.value,
          inputType: has ? 'String' : resolveInputType(prop.type.name.value),
          inputControl: resolveInputControl(prop.type.name.value),
          disabled: false,
          exclude: false,
          list: false,
          nestedFields: has ? getFields({ schema, rules, typeName: prop.type.name.value }) : false
        };
      }
    } else if (prop && prop.type && prop.type.type && prop.type.type.name && prop.type.type.name.value && isListOfType(prop.type.type.name.value) && prop.name.value !== 'Mutation' && prop.name.value !== 'Query') {
      result[prop.name.value] = {
        label: prop.name.value,
        fieldType: prop.type.type.name.value,
        inputType: false,
        inputControl: 'selection',
        disabled: false,
        exclude: false,
        list: getTypeListData({ schema, rules, typeName: prop.type.type.name.value }),
        nestedFields: getFields({ schema, typeName: prop.type.type.name.value })
      };
    }
  });
  return result;
};
const fixPath = function funcFixPath(string) {
  let response = '';
  if (string.slice(0, 1) === '/' || string.slice(0, 1) === '.') {
    response = string;
  } else {
    response = `/${string}`;
  }
  if (response.slice(-1) === '/') {
    response = response.slice(0, -1);
  }
  return response;
};
const graphqlCMS = function funcGraphqlCMS(args) {
  const { schema, rules, exclude, uploadRoot } = args;
  const Mutations = schema.definitions.find(obj => obj.name.value === 'Mutation');
  const Queries = schema.definitions.find(obj => obj.name.value === 'Query');
  let shape = {};
  Queries.fields.forEach(method => {
    const methodTypeName = method.type && method.type.type && method.type.type.name && method.type.type.name.value ? method.type.type.name.value : false;
    if (methodTypeName && Mutations.fields.find(obj => obj.name.value.split('_')[0] === methodTypeName) && (!exclude || !exclude.find(type => type === methodTypeName))) {
      shape[methodTypeName] = {
        uploadRoot,
        label: methodTypeName,
        listHeader: false,
        resolvers: {
          find: {
            resolver: getResolverName({ rules, typeName: methodTypeName, method: 'find' }),
            args: findResolverArgs({
              rules,
              typeName: methodTypeName,
              method: 'find',
              fields: Queries.fields
            }),
            allowed: true
          },
          create: {
            resolver: getResolverName({ rules, typeName: methodTypeName, method: 'create' }),
            args: findResolverArgs({
              rules,
              typeName: methodTypeName,
              method: 'create',
              fields: Mutations.fields
            }),
            allowed: checkMethodPermission({
              rules,
              typeName: methodTypeName,
              method: 'create',
              mutations: Mutations
            })
          },
          update: {
            resolver: getResolverName({ rules, typeName: methodTypeName, method: 'update' }),
            args: findResolverArgs({
              rules,
              typeName: methodTypeName,
              method: 'update',
              fields: Mutations.fields
            }),
            allowed: checkMethodPermission({
              rules,
              typeName: methodTypeName,
              method: 'update',
              mutations: Mutations
            })
          },
          remove: {
            resolver: getResolverName({ rules, typeName: methodTypeName, method: 'remove' }),
            args: findResolverArgs({
              rules,
              typeName: methodTypeName,
              method: 'remove',
              fields: Mutations.fields
            }),
            allowed: checkMethodPermission({
              rules,
              typeName: methodTypeName,
              method: 'remove',
              mutations: Mutations
            })
          }
        },
        fields: getFields({ schema, rules, typeName: methodTypeName })
      };
    }
  });
  shape = getListHeader({ shape });
  return shape;
};
const fileUploadingMiddleware = function funcFileUploadingMiddleware(req, res, uploadRoot) {
  const form = new _formidable2.default.IncomingForm();
  form.parse(req, (err, fields, files) => {
    res.end(_util2.default.inspect({ fields, files }));
  });
  form.on('error', err => {
    if (err) throw new Error(err);
  });
  form.on('end', function () {
    const tempPath = this.openedFiles[0].path;
    const fileName = this.openedFiles[0].name.split(',')[0];
    const folderPath = fixPath(this.openedFiles[0].name.split(',')[1]);
    _fsExtra2.default.copy(tempPath, `${uploadRoot}${folderPath}/${fileName}`, err => {
      if (err) throw new Error(err);
    });
  });
};

// export declared only for test cases
exports.applyRules = applyRules;
exports.getResolverName = getResolverName;
exports.findResolverArgs = findResolverArgs;
exports.checkMethodPermission = checkMethodPermission;
exports.getListHeader = getListHeader;
exports.getTypeListData = getTypeListData;
exports.getFields = getFields;
exports.resolveInputType = resolveInputType;
exports.resolveInputControl = resolveInputControl;
exports.hasNestedFields = hasNestedFields;
exports.isListOfType = isListOfType;
exports.fixPath = fixPath;
exports.graphqlCMS = graphqlCMS;
exports.fileUploadingMiddleware = fileUploadingMiddleware;