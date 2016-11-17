import graphqlCMS from '../../lib/middleware';
import graphQLHTTP from 'express-graphql';
import schema from './schema';
import webpack from 'webpack';
import path from 'path';
import WebpackDevServer from 'webpack-dev-server';
import { printSchema } from 'graphql';
let config = require('../../webpack.config.js');
config.entry.app.unshift('webpack-dev-server/client?http://localhost:7700/', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
let app = new WebpackDevServer(webpack(config), {
    contentBase: path.resolve(__dirname, '../lib'),
    hot: true,
    inline: true
});

let CMSConfig = {
    schema: printSchema(schema),
    uploadRoot: path.resolve(__dirname, '../lib/uploads'),
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
        /*questionType: {
            label: 'Questions',
            listHeader: {
                id: ['_id'],
                title: ['question']
            },
            fields: {
                answers: {
                    list: {
                        label: 'title'
                    }
                }
            }
        },
        productType: {
            label: 'Products',
            listHeader: {
                id: ['_id'],
                title: ['name']
            },
            fields: {
                categories: {
                    list: {
                        label: 'name'
                    }
                },
                ingredients: {
                    list: {
                        label: 'label'
                    }
                },
                recommended: {
                    list: {
                        label: 'label'
                    }
                }
            }
        },
        couponType: {
            label: 'Coupons',
            listHeader: {
                id: ['id'],
                title: ['description']
            },
            resolvers: {
                find: {
                    resolver: 'getCoupons'
                },
                update: {
                    allowed: false
                }
            },
            fields: {
                isMassPromo: {
                    label: 'is Mass Promo'
                },
                couponBatch_id: {
                    label: 'Coupon Batch ID',
                    inputControl: 'textarea',
                    disabled: true,
                    exclude: false
                },
                description: {
                    inputType: 'file'
                },
                expirationDate: {
                    inputType: 'date'
                }
            }
        }*/
    }
};

//running graphqlCMS middleware
app.use('/graphql_cms_endpoint', graphqlCMS(CMSConfig));

//running graphQL API endpoint
app.use('/graphql', graphQLHTTP({schema: schema, graphiql: true, pretty: true}));

app.listen(7700);