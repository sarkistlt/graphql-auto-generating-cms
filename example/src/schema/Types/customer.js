import {GraphQLString, GraphQLObjectType, GraphQLInt} from 'graphql';

let customer = new GraphQLObjectType({
    name: 'customer',
    description: 'Customer schema',
    fields: {
        _id: {type: GraphQLInt},
        firstName: {type: GraphQLString},
        lastName: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
        info: {
            type: new GraphQLObjectType({
                name: 'customer_info',
                fields: () => ({
                    postalCode: {type: GraphQLInt},
                    country: {type: GraphQLString},
                    city: {type: GraphQLString},
                    address: {type: GraphQLString},
                    phone: {type: GraphQLString}
                })
            })
        },
        createdAt: {type: GraphQLString},
        updatedAt: {type: GraphQLString}
    }
});

export default customer;