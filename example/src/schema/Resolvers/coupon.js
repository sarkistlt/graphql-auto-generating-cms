import { couponDb } from '../../../nedb';

const Coupon = {};

Coupon.find = (args) => {
  const query = args._id ? { _id: args._id } : {};

  return new Promise((resolve, reject) => {
    if (args._id) {
      couponDb.find(query)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    } else {
      couponDb.find(query)
        .skip(args.offset)
        .limit(args.limit)
        .exec((err, res) => (err ? reject(err) : resolve(res)));
    }
  });
};

Coupon.create = args => new Promise((resolve, reject) => {
  couponDb.insert(args, (err, newDoc) => (err ? reject(err) : resolve(newDoc)));
});

Coupon.update = (args) => {
  const query = { _id: args._id };
  delete args._id;

  return new Promise((resolve, reject) => {
    couponDb.update(query, { $set: args }, (err, newDoc) => (err ? reject(err) : resolve(newDoc)));
  });
};

export default Coupon;
