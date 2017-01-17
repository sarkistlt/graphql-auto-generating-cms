import { GraphQLObjectType, GraphQLString } from 'graphql';

const category = new GraphQLObjectType({
  name: 'category',
  description: 'Category schema',
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
});

export default category;
