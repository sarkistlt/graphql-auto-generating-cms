import { customerDb } from '../../../nedb';

const Customer = {};

Customer.find = (args) => {
  const query = args._id ? { _id: args._id } : {};

  return new Promise((resolve, reject) => {
    if (args._id) {
      customerDb.find(query)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    } else {
      customerDb.find(query)
        .skip(args.offset)
        .limit(args.limit)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }
  });
};

Customer.create = (args) => {
  args.info = JSON.parse(args.info);

  return new Promise((resolve, reject) => {
    customerDb.insert(args, (err, newDoc) => (err ? reject(err) : resolve(newDoc)));
  });
};

Customer.update = (args) => {
  const query = { _id: args._id };
  args.info = JSON.parse(args.info);
  delete args._id;

  return new Promise((resolve, reject) => {
    customerDb.update(query, { $set: args }, (err, newDoc) => (err ? reject(err) : resolve(newDoc)));
  });
};

export default Customer;
