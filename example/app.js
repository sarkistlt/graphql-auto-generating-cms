import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route} from 'react-router';

class CustomPage extends Component {
    render() {
        return (
            <div>Place for some custom component</div>
        );
    }
}

let customPages = [{
    label: 'New Item',
    secret: 'newItem',
    view: {
        secret: 'newItem',
        component: CustomPage
    }
}];

render((
    <Router onUpdate={() => window.scrollTo(0, 0)}>
        <Route
            path='/graphql-cms'
            endpoint='/graphql_cms_endpoint'
            graphql='/graphql'
            components={GraphqlCMS}
        />
    </Router>
), document.getElementById('root'));