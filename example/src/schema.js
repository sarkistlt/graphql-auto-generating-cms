import {GraphQLSchema} from 'graphql/type';
import {GraphQLList, GraphQLString, GraphQLObjectType, GraphQLBoolean, GraphQLNonNull, GraphQLInt} from 'graphql';

let productType = new GraphQLObjectType(...);
let ingredientType = new GraphQLObjectType(...);
let categoryType = new GraphQLObjectType(...);
let customerType = new GraphQLObjectType(...);
//just regular graphql types

let queries = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        productType_find: {
            type: new GraphQLList(productType),
            args: {
                offset: {type: GraphQLInt},
                limit: {type: GraphQLInt},
                _id: {type: GraphQLString}
            },
            resolve: (_, args) => 'Mongoose.get(args)'
            // some custom resolver
        },
        ingredientType_find: {
            type: new GraphQLList(ingredientType),
            args: {
                offset: {type: GraphQLInt},
                limit: {type: GraphQLInt},
                _id: {type: GraphQLString}
            },
            resolve: (_, args) => 'Mongoose.get(args)'
            // some custom resolver
        },
        categoryType_find: {
            type: new GraphQLList(categoryType),
            args: {
                offset: {type: GraphQLInt},
                limit: {type: GraphQLInt},
                _id: {type: GraphQLString}
            },
            resolve: (_, args) => 'Mongoose.get(args)'
            // some custom resolver
        },
        customerType_find: {
            type: new GraphQLList(customerType),
            args: {
                offset: {type: GraphQLInt},
                limit: {type: GraphQLInt},
                id: {type: GraphQLInt}
            },
            resolve: (_, args) => 'Mongoose.get(args)'
            // some custom resolver
        }
    })
});

let mutations = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        productType_update: {
            type: productType,
            description: 'update product',
            args: {
                _id: {type: GraphQLString},
                name: {type: GraphQLString},
                shortDescription: {type: GraphQLString},
                price: {type: GraphQLString},
                isPublished: {type: GraphQLBoolean},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                pageTitle: {type: GraphQLString},
                metaDescription: {type: GraphQLString},
                metaKeywords: {type: GraphQLString},
                isSample: {type: GraphQLBoolean}
            },
            resolve: (_, args) => 'Mongoose.update(args)'
            // some custom resolver
        },
        productType_create: {
            type: productType,
            description: 'add new product',
            args: {
                name: {type: GraphQLString},
                shortDescription: {type: GraphQLString},
                price: {type: GraphQLString},
                isPublished: {type: GraphQLBoolean},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                pageTitle: {type: GraphQLString},
                metaDescription: {type: GraphQLString},
                metaKeywords: {type: GraphQLString},
                isSample: {type: GraphQLBoolean}
            },
            resolve: (_, args) => 'Mongoose.create(args)'
            // some custom resolver
        },

        ingredientType_update: {
            type: ingredientType,
            description: 'update ingredient',
            args: {
                _id: {type: GraphQLString},
                name: {type: GraphQLString},
                subtitle: {type: GraphQLString},
                popupTitle: {type: GraphQLString},
                popupText: {type: GraphQLString},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                isPublished: {type: GraphQLBoolean}
            },
            resolve: (_, args) => 'Mongoose.update(args)'
            // some custom resolver
        },
        ingredientType_create: {
            type: ingredientType,
            description: 'add new ingredient',
            args: {
                simpleId: {type: GraphQLString},
                image: {type: GraphQLString},
                name: {type: GraphQLString},
                subtitle: {type: GraphQLString},
                popupTitle: {type: GraphQLString},
                popupText: {type: GraphQLString},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                isPublished: {type: GraphQLBoolean}
            },
            resolve: (_, args) => 'Mongoose.create(args)'
            // some custom resolver
        },

        categoryType_update: {
            type: categoryType,
            description: 'update category',
            args: {
                _id: {type: GraphQLString},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                name: {type: new GraphQLNonNull(GraphQLString)},
                isPublished: {type: GraphQLBoolean}
            },
            resolve: (_, args) => 'Mongoose.update(args)'
            // some custom resolver
        },
        categoryType_create: {
            type: categoryType,
            description: 'add new category',
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                isPublished: {type: GraphQLBoolean}
            },
            resolve: (_, args) => 'Mongoose.create(args)'
            // some custom resolver
        },
        categoryType_remove: {
            type: categoryType,
            description: 'remove category',
            args: {
                _id: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (_, args) => 'Mongoose.remove(args)'
            // some custom resolver
        },

        customerType_update: {
            type: customerType,
            description: 'update customer info',
            args: {
                id: {type: GraphQLInt},
                createdAt: {type: GraphQLString},
                updatedAt: {type: GraphQLString},
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                notes: {type: GraphQLString}
            },
            resolve: (_, args) => 'Mongoose.update(args)'
            // some custom resolver
        }
    })
});

const schema = new GraphQLSchema({
    query: queries,
    mutation: mutations
});

export default schema;