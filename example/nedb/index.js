import Datastore from 'nedb';
import path from 'path';

export const categoryDb = new Datastore({
  filename: path.resolve(__dirname, './category.db'),
  autoload: true,
});
export const couponDb = new Datastore({
  filename: path.resolve(__dirname, './coupon.db'),
  autoload: true,
});
export const customerDb = new Datastore({
  filename: path.resolve(__dirname, './customer.db'),
  autoload: true,
});
export const productDb = new Datastore({
  filename: path.resolve(__dirname, './product.db'),
  autoload: true,
});
