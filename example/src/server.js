const NODE_ENV = process.env.NODE_ENV || 'development';
import graphQLHTTP from 'express-graphql';
import schema from './schema';
import webpack from 'webpack';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import { printSchema } from 'graphql';
let config = require('../../webpack.config.js');

/**
 * you can just use "import graphqlCMS from '';"
 * I use NODE_ENV only for development reason to be able use hot module reloading
 */
let folder = 'src';
if (NODE_ENV === 'test') {
    folder = 'lib';
} else {
    config.entry.app.unshift('webpack-dev-server/client?http://localhost:7700/', 'webpack/hot/dev-server');
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
}
const graphqlCMS = require(`../../${folder}/middleware`).default;

let compiler = webpack(config, () => {
    console.log('webpack: bundle is ready, app is now running on http://localhost:7700');
});

let app = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../public'),
    noInfo: NODE_ENV === 'test',
    hot: NODE_ENV !== 'test',
    inline: NODE_ENV !== 'test'
});

let CMSConfig = {
    schema: printSchema(schema),
    uploadRoot: path.resolve(__dirname, '../public'),
    rules: {
        product: {
            fields: {
                _id: {},
                name: {},
                price: {},
                shortDescription: {},
                pageTitle: {},
                metaDescription: {},
                metaKeywords: {},
                categories: {},
                ingredients: {},
                createdAt: {},
                updatedAt: {},
                image: {
                    inputType: 'file'
                },
                isPublished: {}
            }
        },
        coupon: {
            fields: {
                _id: {},
                couponCode: {},
                description: {},
                discountAmount: {},
                minimumAmount: {},
                expirationDate: {
                    label: 'expiration date',
                    inputType: 'date'
                },
                createdAt: {},
                updatedAt: {}
            }
        }
    }
};

//running graphqlCMS middleware
app.use('/graphql_cms_endpoint', graphqlCMS(CMSConfig));
//running graphQL API endpoint
app.use('/graphql', graphQLHTTP({schema: schema, graphiql: true, pretty: true}));
//running server on http://localhost:7700/
app.listen(7700, () => console.log('wait for webpack bundle, can take ~1 min'));