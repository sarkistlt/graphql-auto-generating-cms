import formidable from 'formidable';
import fs from 'fs-extra';
import util from 'util';

export function applyRules(shape, rules) {
  let response = rules ? rules : shape;
  if (rules) {
    for (let key in shape) {
      if (typeof (shape[key]) === 'object') {
        if (!response.hasOwnProperty(key)) {
          response[key] = shape[key];
        }
        applyRules(shape[key], response[key]);
      } else if (!response[key] && typeof (response[key]) !== 'boolean') {
        response[key] = shape[key];
      }
    }
  }
  for (let type in response) {
    if (response.hasOwnProperty(type)) {
      for (let key in response[type].resolvers) {
        if (response[type].resolvers.hasOwnProperty(key) &&
          typeof (response[type].resolvers[key].allowed) === 'boolean' && !response[type].resolvers[key].allowed) {
          delete response[type].resolvers[key];
        }
      }
    }
  }
  return response;
}

export function getResolverName(typeName, method, rules) {
  let resolverName = '';
  
  if (rules &&
    rules[typeName] &&
    rules[typeName].resolvers &&
    rules[typeName].resolvers[method] &&
    rules[typeName].resolvers[method].resolver
  ) {
    resolverName = rules[typeName].resolvers[method].resolver;
  } else {
    resolverName = typeName + '_' + method;
  }
  
  return resolverName;
}

export function findResolverArgs(typeName, method, array, rules) {
  let args = {},
    tmpObj = {};
  
  if (rules &&
    rules[typeName] &&
    rules[typeName].resolvers &&
    rules[typeName].resolvers[method] &&
    rules[typeName].resolvers[method].resolver
  ) {
    tmpObj = array.find(obj => obj.name.value === rules[typeName].resolvers[method].resolver);
  } else {
    tmpObj = array.find(obj => obj.name.value === typeName + '_' + method);
  }
  if (tmpObj && tmpObj.arguments) {
    tmpObj.arguments.forEach(argObj => {
      let type = argObj.type.kind === 'NonNullType' ? `${argObj.type.type.name.value}!` : argObj.type.name.value;
      args[argObj.name.value] = type;
    });
  }
  return args;
}

export function checkMethodPermission(typeName, method, mutations, rules) {
  let hasMethod = mutations.fields.find(obj => obj.name.value === `${typeName}_${method}`) ? true : false;
  if (hasMethod &&
    rules &&
    rules[typeName] &&
    rules[typeName].resolvers &&
    rules[typeName].resolvers[method] &&
    (rules[typeName].resolvers[method].allowed ||
    typeof (rules[typeName].resolvers[method].allowed) === 'boolean')
  ) {
    hasMethod = rules[typeName].resolvers[method].allowed;
  }
  return hasMethod;
}

export function getListHeader(shape) {
  for (let key in shape) {
    if (shape.hasOwnProperty(key)) {
      let id = Object.keys(shape[key].fields).find(key => key === 'id' || key === '_id'),
        title = Object.keys(shape[key].fields)[1];
      shape[key].listHeader = {id: [id], title: [title]};
    }
  }
}

export function getTypeListData(schema, propTypeName, rules) {
  const Mutations = schema.definitions.find(obj => obj.name.value === 'Mutation');
  const Queries = schema.definitions.find(obj => obj.name.value === 'Query');
  
  return {
    label: false,
    propTypeName: propTypeName,
    resolvers: {
      find: {
        resolver: getResolverName(propTypeName, 'find', rules),
        args: findResolverArgs(propTypeName, 'find', Queries.fields, rules)
      },
      create: {
        resolver: getResolverName(propTypeName, 'create', rules),
        args: findResolverArgs(propTypeName, 'create', Mutations.fields, rules)
      }
    }
  };
}

export function getFields(schema, typeName, rules) {
  let typeObject = schema.definitions.find(obj => obj.name.value === typeName),
    result = {};
  
  typeObject.fields.forEach(prop => {
    if (prop && prop.type && prop.type.kind !== 'ListType') {
      if (prop.name &&
        prop.name.value &&
        prop.type.name &&
        prop.type.name.value) {
        if (prop.name.value !== 'Mutation' &&
          prop.name.value !== 'Query') {
          result[prop.name.value] = {
            label: prop.name.value,
            fieldType: prop.type.name.value,
            inputType: hasNestedFields(prop.type.name.value) ?
              'String' : resolveInputType(prop.type.name.value),
            inputControl: resolveInputControl(prop.type.name.value),
            disabled: false,
            exclude: false,
            list: false,
            nestedFields: hasNestedFields(prop.type.name.value) ?
              getFields(schema, prop.type.name.value) : false
          };
        }
      }
    } else if (prop &&
      prop.type &&
      prop.type.type &&
      prop.type.type.name &&
      prop.type.type.name.value &&
      isListOfType(prop.type.type.name.value)) {
      result[prop.name.value] = {
        label: prop.name.value,
        fieldType: prop.type.type.name.value,
        inputType: false,
        inputControl: 'selection',
        disabled: false,
        exclude: false,
        list: getTypeListData(schema, prop.type.type.name.value, rules),
        nestedFields: getFields(schema, prop.type.type.name.value)
      };
    }
  });
  return result;
}

export function resolveInputType(scalarType) {
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
}

export function resolveInputControl(scalarType) {
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
}

export function hasNestedFields(propType) {
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
}

export function isListOfType(typeValue) {
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
}

export function fixPath(string) {
  let result = '';
  string.slice(0, 1) === '/' || string.slice(0, 1) === '.' ? result = string : result = `/${string}`;
  result.slice(-1) === '/' ? result = result.slice(0, -1) : null;
  return result;
}

export function graphqlCMS(schema, rules, exclude, uploadRoot) {
  const Mutations = schema.definitions.find(obj => obj.name.value === 'Mutation');
  const Queries = schema.definitions.find(obj => obj.name.value === 'Query');
  let shape = {};
  
  Queries.fields.forEach(function (method) {
    let methodTypeName =
      method.type &&
      method.type.type &&
      method.type.type.name &&
      method.type.type.name.value ?
        method.type.type.name.value : false;
    
    if (methodTypeName &&
      Mutations.fields.find(obj => obj.name.value.split('_')[0] === methodTypeName) &&
      (!exclude || !exclude.find(type => type === methodTypeName))) {
      
      shape[methodTypeName] = {
        label: methodTypeName,
        listHeader: false,
        uploadRoot: uploadRoot,
        resolvers: {
          find: {
            resolver: getResolverName(methodTypeName, 'find', rules),
            args: findResolverArgs(methodTypeName, 'find', Queries.fields, rules),
            allowed: true
          },
          create: {
            resolver: getResolverName(methodTypeName, 'create', rules),
            args: findResolverArgs(methodTypeName, 'create', Mutations.fields, rules),
            allowed: checkMethodPermission(methodTypeName, 'create', Mutations, rules)
          },
          update: {
            resolver: getResolverName(methodTypeName, 'update', rules),
            args: findResolverArgs(methodTypeName, 'update', Mutations.fields, rules),
            allowed: checkMethodPermission(methodTypeName, 'update', Mutations, rules)
          },
          remove: {
            resolver: getResolverName(methodTypeName, 'remove', rules),
            args: findResolverArgs(methodTypeName, 'remove', Mutations.fields, rules),
            allowed: checkMethodPermission(methodTypeName, 'remove', Mutations, rules)
          }
        },
        fields: getFields(schema, methodTypeName, rules)
      };
    }
  });
  
  getListHeader(shape);
  return shape;
}

export function fileUploadingMiddleware(req, res, uploadRoot) {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    res.end(util.inspect({fields: fields, files: files}));
  });
  form.on('error', err => console.error(err));
  form.on('end', function () {
    let tempPath = this.openedFiles[0].path;
    let fileName = this.openedFiles[0].name.split(',')[0];
    let folderPath = fixPath(this.openedFiles[0].name.split(',')[1]);
    fs.copy(tempPath, `${uploadRoot}${folderPath}/${fileName}`, err => err ? console.error(err) : null);
  });
}

export default function (config) {
  let {parse} = require('graphql');
  let schema = config.schema ? parse(config.schema) : false;
  let rules = config.rules ? config.rules : false;
  let exclude = config.exclude ? config.exclude : false;
  let uploadRoot = config.uploadRoot ? fixPath(config.uploadRoot) : false;
  
  if (!schema) {
    console.log('you have to provide your PRINTED schema in config object "{schema: myPrintedSchema}"');
    return;
  }
  
  return function (req, res) {
    if (req.method.toLowerCase() === 'get') {
      res.send(applyRules(graphqlCMS(schema, rules, exclude, uploadRoot), rules));
    } else if (req.method.toLowerCase() === 'post') {
      fileUploadingMiddleware(req, res, uploadRoot);
    }
  };
}