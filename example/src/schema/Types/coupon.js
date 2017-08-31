import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';

const coupon = new GraphQLObjectType({
  name: 'coupon',
  description: 'Coupon schema',
  fields: {
    _id: { type: GraphQLString },
    couponCode: { type: new GraphQLList(GraphQLString) },
    description: { type: GraphQLString },
    discountAmount: { type: GraphQLInt },
    minimumAmount: { type: GraphQLInt },
    expirationDate: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});

export default coupon;
