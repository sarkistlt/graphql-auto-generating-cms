import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import { category, coupon, customer, product } from './Types';
import { Category, Coupon, Customer, Product } from './Resolvers';

const queries = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    category_find: {
      type: new GraphQLList(category),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        _id: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => Category.find(args),
    },
    coupon_find: {
      type: new GraphQLList(coupon),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        _id: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => Coupon.find(args),
    },
    customer_find: {
      type: new GraphQLList(customer),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        _id: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => Customer.find(args),
    },
    product_find: {
      type: new GraphQLList(product),
      args: {
        offset: { type: GraphQLInt },
        limit: { type: GraphQLInt },
        _id: {
          type: GraphQLString,
        },
      },
      resolve: (_, args) => Product.find(args),
    },
  }),
});

export default queries;
