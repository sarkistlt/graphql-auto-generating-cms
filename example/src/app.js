import GraphqlCMS from '../../lib';
import React from 'react';
import {render} from 'react-dom';
//import {Router, Route, browserHistory} from 'react-router';

class View extends React.Component {
    render() {
        return (
            <div>newMenu</div>
        );
    }
}

let newItem = {
    label: 'New Item',
    secret: 'newItem',
    view: {
        secret: 'newItem',
        component: View
    }
};

render(
    <GraphqlCMS
        endpoint='/graphql_cms_endpoint'
        graphql='/graphql'
        newMenuItems={[newItem]}
    />, document.getElementById('root'));

/**
 * if you want to try on separate route
 */
/*render(
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
        <Route
            path='/admin'
            endpoint='/graphql_cms_endpoint'
            graphql='/graphql'
            newMenuItems={[newItem]}
            components={GraphqlCMS}
        />
    </Router>, document.getElementById('root'));*/
