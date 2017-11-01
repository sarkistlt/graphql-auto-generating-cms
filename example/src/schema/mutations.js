import { GraphQLBoolean, GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';
import { category, coupon, customer, product } from './Types';
import { Category, Coupon, Customer, Product } from './Resolvers';

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    category_create: {
      type: category,
      description: 'add new category',
      args: {
        name: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve: (_, args) => Category.create(args),
    },
    category_update: {
      type: category,
      description: 'update category',
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve: (_, args) => Category.update(args),
    },
    category_remove: {
      type: category,
      description: 'remove category',
      args: {
        _id: { type: GraphQLString },
      },
      resolve: (_, args) => Category.remove(args),
    },

    coupon_create: {
      type: coupon,
      description: 'add new coupon',
      args: {
        couponCode: { type: GraphQLString },
        description: { type: GraphQLString },
        discountAmount: { type: GraphQLInt },
        minimumAmount: { type: GraphQLInt },
        expirationDate: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve: (_, args) => Coupon.create(args),
    },
    coupon_update: {
      type: coupon,
      description: 'update coupon',
      args: {
        _id: { type: GraphQLString },
        couponCode: { type: GraphQLString },
        description: { type: GraphQLString },
        discountAmount: { type: GraphQLInt },
        minimumAmount: { type: GraphQLInt },
        expirationDate: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve: (_, args) => Coupon.update(args),
    },

    customer_create: {
      type: customer,
      description: 'add new customer',
      args: {
        _id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        info: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve: (_, args) => Customer.create(args),
    },
    customer_update: {
      type: customer,
      description: 'update customer',
      args: {
        _id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        info: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
      },
      resolve: (_, args) => Customer.update(args),
    },

    product_create: {
      type: product,
      description: 'add new product',
      args: {
        name: { type: GraphQLString },
        price: { type: GraphQLString },
        shortDescription: { type: GraphQLString },
        pageTitle: { type: GraphQLString },
        metaDescription: { type: GraphQLString },
        metaKeywords: { type: GraphQLString },
        categories: { type: GraphQLString },
        ingredients: { type: GraphQLString },
        createdAt: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        image: { type: GraphQLString },
        isPublished: { type: GraphQLBoolean },
        longDescription: { type: GraphQLString },
        notes: { type: GraphQLString },
      },
      resolve: (_, args) => Product.create(args),
    },
    product_update: {
      type: product,
      description: 'update product',
      args: {
        _id: { type: GraphQLString },
        name: { type: GraphQLString },
        price: { type: GraphQLString },
        shortDescription: { type: GraphQLString },
        pageTitle: { type: GraphQLString },
        metaDescription: { type: GraphQLString },
        metaKeywords: { type: GraphQLString },
        categories: { type: GraphQLString },
        ingredients: { type: GraphQLString },
        updatedAt: { type: GraphQLString },
        image: { type: GraphQLString },
        isPublished: { type: GraphQLBoolean },
        longDescription: { type: GraphQLString },
        notes: { type: GraphQLString },
      },
      resolve: (_, args) => Product.update(args),
    },
  }),
});

export default mutations;
