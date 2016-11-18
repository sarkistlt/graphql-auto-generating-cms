import GraphqlCMS from '../../src';
import React from 'react';
import {render} from 'react-dom';
//import {Router, Route, browserHistory} from 'react-router';

class firstComponent extends React.Component {
    render() {
        return (
            <div>place for your first custom solution</div>
        );
    }
}

class secondComponent extends React.Component {
    render() {
        return (
            <div>place for your second custom solution</div>
        );
    }
}

let customComponents = [
    {
        label: 'Custom component 1',
        secret: 'firstComponent',
        view: {
            secret: 'firstComponent',
            component: firstComponent
        }
    },
    {
        label: 'Custom component 2',
        secret: 'secondComponent',
        view: {
            secret: 'secondComponent',
            component: secondComponent
        }
    }
];

render(
    <GraphqlCMS
        endpoint='/graphql_cms_endpoint'
        graphql='/graphql'
        newMenuItems={customComponents}
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
