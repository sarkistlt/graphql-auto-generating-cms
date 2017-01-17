import { categoryDb } from '../../../nedb';
const Category = {};

Category.find = (args) => {
  const query = args._id ? { _id: args._id } : {};

  return new Promise((resolve, reject) => {
    if (args._id) {
      categoryDb.find(query)
      .exec((err, res) => err ? reject(err) : resolve(res));
    } else {
      categoryDb.find(query)
      .skip(args.offset)
      .limit(args.limit)
      .exec((err, res) => err ? reject(err) : resolve(res));
    }
  });
};

Category.create = args => new Promise((resolve, reject) => {
  categoryDb.insert(args, (err, newDoc) => err ? reject(err) : resolve(newDoc));
});

Category.update = (args) => {
  const query = { _id: args._id };
  delete args._id;

  return new Promise((resolve, reject) => {
    categoryDb.update(query, { $set: args }, (err, newDoc) => err ? reject(err) : resolve(newDoc));
  });
};

Category.remove = (args) => {
  const query = { _id: args._id };

  return new Promise((resolve, reject) => {
    categoryDb.remove(query, {}, err => err ? reject(err) : resolve(query));
  });
  /**
   * resolve(query), because we have to
   * return some fields to graphQL which this Type has
   */
};

export default Category;
