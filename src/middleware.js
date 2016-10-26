module.exports = function (config) {
    var {parse} = require('graphql');
    var schema = config.schema ? parse(config.schema) : false;
    var rules = config.rules ? config.rules : false;
    if (!schema) {
        console.log('you have to provide your NOT PRINTED schema in config object');
        return;
    }
    return function (req, res) {
        if (req.method.toLowerCase() === 'get') {
            function findMutations(obj) {
                return obj.name.value === 'Mutation';
            }
            function findQueries(obj) {
                return obj.name.value === 'Query';
            }

            var Mutations = schema.definitions.find(findMutations);
            var Queries = schema.definitions.find(findQueries);
            var shape = [];

            Queries.fields.forEach(function (method) {
                var methodTypeName =
                    method.type &&
                    method.type.type &&
                    method.type.type.name &&
                    method.type.type.name.value ?
                        method.type.type.name.value : false;

                if (methodTypeName && Mutations.fields.find(function (obj) {
                        return obj.type.name.value === methodTypeName
                    }) &&
                    !shape.find(function (obj) {
                        return obj.essence === methodTypeName
                    })) {
                    var methodTypeObject = schema.definitions.find(function (obj) {
                        return obj.name.value === methodTypeName
                    });
                    var tmpObj = {
                        essence: method.type.type.name.value,
                        fields: []
                    }

                    methodTypeObject.fields.forEach(function (prop) {
                        if (prop &&
                            prop.name &&
                            prop.name.value &&
                            prop.type &&
                            prop.type.name &&
                            prop.type.name.value) {
                            if (prop.name.value !== 'Mutation' && prop.name.value !== 'Query') {
                                tmpObj.fields.push({
                                    [prop.name.value]: prop.type.name.value
                                })
                            }
                        }
                    });
                    shape.push(tmpObj);
                }
            })
            res.send(shape);
        }
    }
};