This package will build a fully-functional CMS by just using your printed GraphQL schema without any changes in your existed code or architecture.

We don't have yet documentation so it's highly recommended you first read this article [[Auto generating CMS based on your GraphQL schema.](https://www.google.com)] to understand how this package works.
On this page we'll just shortly go through the main stuff.

1. [Common requirements](#common-requirements)
2. [Prepare to start](#prepare-to-start)
3. [Naming pattern](#naming-pattern)
5. [Config file structure](#config-file-structure)
6. [Extend CMS with your additional functionality](#extend-cms-with-your-additional-functionality)
7. [Example](#example)

### Install
~~~sh
npm i -S graphql-auto-generating-cms
~~~

##Common requirements
You have to use following babel presets:
- ```Babel-preset-es2015```
- ```Babel-preset-react```
- ```Babel-preset-stage-0```
- ```Babel-preset-stage-1```

All Query methods has to have the following arguments for pagination and to query one specific item:
- ```offset: Int```
- ```limit: Int```
- ```id || _id: String || Int```

If you return one item, for example in Mongoose, by using ```findOne```, you have to wrapped object to array and then pass it to client.
To handle pagination you can use something like this: 
~~~js
let {offset, limit} = args;
return new Promise((resolve, reject) => {
   Customers.find(query).skip(offset).limit(limit).exec((err, res) =>  err ? reject(err) : resolve(res));
});
~~~


##Prepare to start
On your server side, in example below we specify endpoint for client side: ```/graphql_cms_endpoint```, but you can use any other URL: 
~~~js 
…
import express from 'express';
import graphqlCMS from 'graphql-auto-generating-cms/middleware';
import schema from '../schema';
const printSchema = require('graphql/utilities/schemaPrinter').printSchema;
let app = express();

let config = {schema: printSchema(schema)}
app.use('/graphql_cms_endpoint', graphqlCMS(config));
…
app.listen(port)
~~~

On your client side as separate route:
~~~js
...
import graphqlCMS from 'graphql-auto-generating-cms;

export default (
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route
           path=’/graphql-cms’'
           endpoint='/graphql_cms_endpoint'
           graphql='/graphql'
           components={GraphqlCMS}
        />
        …
</Router>
~~~

Or as child component:
~~~js
<GraphqlCMS
   path=’/graphql-cms’'
   endpoint='/graphql_cms_endpoint'
   graphql='/graphql'
/>
~~~

In property ```endpoint``` we provide same endpoint URL, we provided in middleware. In ```graphql``` property we provide URL to our GraphQL API.

Module will use only graphql Types which has one Query method and at least one Mutation method. 
All types can have only one Query method [find] to query list of items or one item by providing id, and three Mutation method [create, update, remove].

##Naming pattern
If you don't want to provide detailed configuration for each graphql Types you have to use following naming pattern, so module will know which method to use.
```[graphql Type name]_[action]```
examples:
```
productType_find
productType_create
productType_update
productType_remove
```


##Config file structure
~~~js
let config = {
    schema: printSchema(schema), 
    // your printed schema [required]
    
    exclude: ['paymentType', 'invoiceType'], 
    //graphql Types which you don't want to show in CMS

    rules: {
    // rules object is a tree with rules for each or some graphql types 
    // CMS in addition will use the same order for side menu and fields 
    // in the view page as you will provide in “rules” object
    
        categoryType: { 
        // graphql Type name, by default will be used as name for side menu
        
            label: 'Categories', 
            // custom side menu name

            listHeader: {
            // data from this fields will be used to show on first 
            // column [id] and second [title] on list page. 
            // you can provide  couple of fields for each columns 
            // so it will shows as “String” + “ “ + “String”
            
                id: ['id'],
                title: ['description']
            },
            
            resolvers: {
            // if you don't want to use the naming pattern you have to provide 
            // Query's and Mutation's method name for each graphql Type.
                                    
                find: {
                    resolver: 'getCategories' 
                    // Query method name
                },
                create: {
                    resolver: 'addCategory'
                    // Mutation method name
                    
                    allowed: true
                },
                update: {
                    resolver: 'updateCategory'
                    // Mutation method name
                    
                    allowed: true
                },
                remove: {
                    allowed: false
                    // if you don't want to provide some method to client 
                    // side you can depreciate it for any action besides “find”
                }
            },
            fields: {
                _id: {}, 
                // never exclude this field or “id” you always have to provide id
                
                sortNumber: {
                    label: 'custom field name to show in UI',
                    inputControl: 'input', 
                    // can be “input” or “textarea”
                    
                    inputType: 'number', 
                    // can be any input type: date, text, file etc.
                    
                    disabled: true, 
                    // will disable field from editing
                    
                    exclude: false, 
                    // if true (by default false) it won't provide this field
                    // to client side so you can't see it in UI
                },
                name: {}, 
                // you can also provide empty object 
                // if you want to just order fields
                
                createdAt: {},
                updatedAt: {},
                isPublished: {}
            }
        }
    }
}
~~~

##Extend CMS with your additional functionality
You can provide custom components to as CMS menu point. On your client side you have to provide one more property “newMenuItems”:
~~~js
<Route
   path=’/graphql-cms’'
   endpoint='/graphql_cms_endpoint'
   graphql='/graphql'
   newMenuItems={customPages}
   components={GraphqlCMS}
/>
~~~

And in that property we provide array with new menu points. “customPages” has the following structure:
~~~js
let customPages = [
    {
       label: 'Custom Page',
       secret: 'uniqeForEachComponentSecret',
       view: {
           secret: 'sameUniqeComponentSecret',
           component: CustomDashboard //your custom React component
       }
    }
]
~~~

##Example
You can find simple example in ```example``` folder in the root of repository.




