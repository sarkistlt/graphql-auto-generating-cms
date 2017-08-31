import { productDb } from '../../../nedb';

const Product = {};

Product.find = (args) => {
  const query = args._id ? { _id: args._id } : {};

  return new Promise((resolve, reject) => {
    if (args._id) {
      productDb.find(query)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    } else {
      productDb.find(query)
        .skip(args.offset)
        .limit(args.limit)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }
  });
};

Product.create = (args) => {
  args.categories = JSON.parse(args.categories);
  args.ingredients = JSON.parse(args.ingredients);

  return new Promise((resolve, reject) => {
    productDb.insert(args, (err, newDoc) => (err ? reject(err) : resolve(newDoc)));
  });
};

Product.update = (args) => {
  const query = { _id: args._id };
  args.categories = JSON.parse(args.categories);
  args.ingredients = JSON.parse(args.ingredients);
  delete args._id;

  return new Promise((resolve, reject) => {
    productDb.update(query, { $set: args }, (err, newDoc) => (err ? reject(err) : resolve(newDoc)));
  });
};

export default Product;
