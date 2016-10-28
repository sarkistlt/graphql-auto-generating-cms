function applyRules(og, so) {
    for (var key in og) {
        if (typeof (og[key]) === 'object') {
            if (!so.hasOwnProperty(key)) {
                so[key] = og[key];
            }
            applyRules(og[key], so[key]);
        } else if (!so[key] && typeof (so[key]) !== 'boolean') {
            so[key] = og[key];
        }
    }
    return so;
}

function resolveInputType(scalarType) {
    switch (scalarType) {
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

function resolveInputControl(scalarType) {
    switch (scalarType) {
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

module.exports = function (config) {
    var {parse} = require('graphql');
    var schema = config.schema ? parse(config.schema) : false;
    var rules = config.rules ? config.rules : false;
    var exclude = config.exclude ? config.exclude : false;

    if (!schema) {
        console.log('you have to provide your PRINTED schema in config object "{schema: myPrintedSchema}"');
        return;
    }
    return function (req, res) {
        if (req.method.toLowerCase() === 'get') {
            var Mutations = schema.definitions.find(function (obj) {
                return obj.name.value === 'Mutation';
            });
            var Queries = schema.definitions.find(function (obj) {
                return obj.name.value === 'Query';
            });
            var shape = {};

            Queries.fields.forEach(function (method) {
                var methodTypeName =
                    method.type &&
                    method.type.type &&
                    method.type.type.name &&
                    method.type.type.name.value ?
                        method.type.type.name.value : false;

                if (methodTypeName && Mutations.fields.find(function (obj) {
                        return obj.type.name.value === methodTypeName;
                    }) &&
                    (!exclude || !exclude.find(function (type) {
                        return type === methodTypeName;
                    }))) {
                    var methodTypeObject = schema.definitions.find(function (obj) {
                        return obj.name.value === methodTypeName;
                    });

                    shape[methodTypeName] = {
                        label: methodTypeName,
                        resolvers: {
                            find: {
                                resolver: methodTypeName + '_find',
                                allowed: true
                            },
                            get: {
                                resolver: methodTypeName + '_get',
                                allowed: true
                            },
                            create: {
                                resolver: methodTypeName + '_create',
                                allowed: true
                            },
                            update: {
                                resolver: methodTypeName + '_update',
                                allowed: true
                            },
                            remove: {
                                resolver: methodTypeName + '_remove',
                                allowed: true
                            }
                        },
                        fields: {}
                    };

                    methodTypeObject.fields.forEach(function (prop) {
                        if (prop &&
                            prop.name &&
                            prop.name.value &&
                            prop.type &&
                            prop.type.name &&
                            prop.type.name.value) {
                            if (prop.name.value !== 'Mutation' &&
                                prop.name.value !== 'Query') {
                                shape[methodTypeName].fields[prop.name.value] = {
                                    label: prop.name.value,
                                    fieldType: prop.type.name.value,
                                    inputType: resolveInputType(prop.type.name.value),
                                    inputControl: resolveInputControl(prop.type.name.value),
                                    disabled: false,
                                    exclude: false
                                };
                            }
                        }
                    });
                }
            });
            if (rules) {
                res.send(applyRules(shape, rules));
            } else {
                res.send(shape);
            }
        }
    };
};