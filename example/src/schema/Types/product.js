import { GraphQLBoolean, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql';
import category from './category';

const ingredient = new GraphQLObjectType({
  name: 'ingredient',
  description: 'Sub-type for list of ingredient',
  fields: {
    value: { type: GraphQLString },
    label: { type: GraphQLString },
  },
});

const product = new GraphQLObjectType({
  name: 'product',
  description: 'Product schema',
  fields: {
    _id: { type: GraphQLString },
    name: { type: GraphQLString },
    categories: { type: new GraphQLList(category) },
    ingredients: { type: new GraphQLList(ingredient) },
    price: { type: GraphQLString },
    shortDescription: { type: GraphQLString },
    pageTitle: { type: GraphQLString },
    metaDescription: { type: GraphQLString },
    metaKeywords: { type: GraphQLString },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
    image: { type: GraphQLString },
    isPublished: { type: GraphQLBoolean },
    longDescription: { type: GraphQLString },
    notes: { type: GraphQLString },
  },
});

export default product;
