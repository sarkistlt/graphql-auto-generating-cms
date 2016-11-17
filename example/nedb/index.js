import Datastore from 'nedb';
import path from 'path';

export let categoryDb = new Datastore({filename: path.resolve(__dirname, './category.db'), autoload: true});
export let couponDb = new Datastore({filename: path.resolve(__dirname, './coupon.db'), autoload: true});
export let customerDb = new Datastore({filename: path.resolve(__dirname, './customer.db'), autoload: true});
export let productDb = new Datastore({filename: path.resolve(__dirname, './product.db'), autoload: true});