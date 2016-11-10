import express from 'express';
import schema from './schema';
const printSchema = require('graphql/utilities/schemaPrinter').printSchema;
import graphqlCMS from 'graphql-auto-generating-cms/middleware';
let app = express();

let config = {
    schema: printSchema(schema),
    exclude: ['customerType'],
    rules: {
        ingredientType: {
            label: 'Ingredients',
            listHeader: {
                id: ['_id'],
                title: ['subtitle']
            }
        },
        categoryType: {
            label: 'Categories',
            resolvers: {
                remove: {
                    allowed: false
                }
            },
            fields: {
                _id: {
                    label: 'is Mass Promo'
                },
                name: {
                    label: 'Category name',
                    inputControl: 'textarea',
                    disabled: true,
                    exclude: false
                },
                createdAt: {
                    label: 'Created At'
                },
                updatedAt: {
                    label: 'Updated At'
                },
                isPublished: {
                    label: 'is Published'
                }
            }
        }
    }
};

app.use('/graphql_cms_endpoint', graphqlCMS(config));
app.listen(3030);