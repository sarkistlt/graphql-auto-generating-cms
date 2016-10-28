import React, {PropTypes, Component} from 'react';
import {Grid} from 'semantic-ui-react';
import SideMenu from './components/SideMenu';
import View from './components/View';
import List from './components/List';
import './components/styles.scss';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.find = ::this.find;
        this.get = ::this.get;
        this.create = ::this.create;
        this.update = ::this.update;
        this.remove = ::this.remove;
        this.getViewData = ::this.getViewData;
        this._routeToList = ::this._routeToList;
        this._routeToView = ::this._routeToView;
    }

    static propTypes = {
        route: PropTypes.object
    }

    state = {
        viewId: false,
        data: false,
        SideMenuItems: false,
        currentRout: false,
        viewMode: false
    }

    componentDidMount() {
        this.getViewData();
    }

    find(type, request, resolver, variables) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', this.props.route.graphql);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = () => {
                resolve(xhr.response);
            };
            xhr.onerror = (err) => {
                reject(err.error);
            };
            if (!variables) {
                xhr.send(JSON.stringify({query: `${type} { ${resolver} {${request}} }`}));
            } else {
                let varTypes = '',
                    varForRequest = '';
                for (let key in variables.types) {
                    if (variables.types.hasOwnProperty(key)) {
                        varTypes += `$${[key]}: ${variables.types[key]} `;
                        varForRequest += `${[key]}: $${[key]}`;
                    }
                }
                xhr.send(JSON.stringify({
                    query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
                    variables: variables.values
                }));
            }
        });
    }

    get(type, request, resolver, variables) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', this.props.route.graphql);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = () => {
                resolve(xhr.response);
            };
            xhr.onerror = (err) => {
                reject(err.error);
            };
            if (!variables) {
                xhr.send(JSON.stringify({query: `${type} { ${resolver} {${request}} }`}));
            } else {
                let varTypes = '',
                    varForRequest = '';
                for (let key in variables.types) {
                    if (variables.types.hasOwnProperty(key)) {
                        varTypes += `$${[key]}: ${variables.types[key]} `;
                        varForRequest += `${[key]}: $${[key]}`;
                    }
                }
                xhr.send(JSON.stringify({
                    query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
                    variables: variables.values
                }));
            }
        });
    }

    create(type, request, resolver, variables) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', this.props.route.graphql);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = () => {
                resolve(xhr.response);
            };
            xhr.onerror = (err) => {
                reject(err.error);
            };
            if (!variables) {
                xhr.send(JSON.stringify({query: `${type} { ${resolver} {${request}} }`}));
            } else {
                let varTypes = '',
                    varForRequest = '';
                for (let key in variables.types) {
                    if (variables.types.hasOwnProperty(key)) {
                        varTypes += `$${[key]}: ${variables.types[key]} `;
                        varForRequest += `${[key]}: $${[key]}`;
                    }
                }
                xhr.send(JSON.stringify({
                    query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
                    variables: variables.values
                }));
            }
        });
    }

    update(type, request, resolver, variables) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', this.props.route.graphql);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = () => {
                resolve(xhr.response);
            };
            xhr.onerror = (err) => {
                reject(err.error);
            };
            if (!variables) {
                xhr.send(JSON.stringify({query: `${type} { ${resolver} {${request}} }`}));
            } else {
                let varTypes = '',
                    varForRequest = '';
                for (let key in variables.types) {
                    if (variables.types.hasOwnProperty(key)) {
                        varTypes += `$${[key]}: ${variables.types[key]} `;
                        varForRequest += `${[key]}: $${[key]}`;
                    }
                }
                xhr.send(JSON.stringify({
                    query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
                    variables: variables.values
                }));
            }
        });
    }

    remove(type, request, resolver, variables) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', this.props.route.graphql);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Accept', 'application/json');
            xhr.onload = () => {
                resolve(xhr.response);
            };
            xhr.onerror = (err) => {
                reject(err.error);
            };
            if (!variables) {
                xhr.send(JSON.stringify({query: `${type} { ${resolver} {${request}} }`}));
            } else {
                let varTypes = '',
                    varForRequest = '';
                for (let key in variables.types) {
                    if (variables.types.hasOwnProperty(key)) {
                        varTypes += `$${[key]}: ${variables.types[key]} `;
                        varForRequest += `${[key]}: $${[key]}`;
                    }
                }
                xhr.send(JSON.stringify({
                    query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
                    variables: variables.values
                }));
            }
        });
    }

    getViewData() {
        fetch(this.props.route.endpoint, {method: 'GET'})
            .then(json => json.json())
            .then(res => {
                let menuItems = [];
                for (let type in res) {
                    if (res.hasOwnProperty(type)) {
                        menuItems.push({label: res[type].label, typeName: type});
                    }
                }
                this.setState({
                    data: res,
                    SideMenuItems: menuItems,
                    currentRout: Object.keys(res)[0]
                });
            })
            .catch(err => console.log(err));
    }

    _routeToList(path) {
        this.setState({
            currentRout: path,
            viewMode: false,
            viewId: false
        }, () => this.forceUpdate());
    }

    _routeToView(data) {
        this.setState({
            viewId: data.target.id,
            viewMode: true
        }, this.forceUpdate());
    }

    _prepareFieldsForView(obj) {
        let array = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!obj[key].exclude) {
                    array.push({[key]: obj[key]});
                }
            }
        }
        return array;
    }

    render() {
        const {Column} = Grid;
        const {data, SideMenuItems, currentRout, viewMode, viewId} = this.state;
        let {
            _routeToList,
            _routeToView,
            _prepareFieldsForView,
            requestFromGQL,
            find,
            get,
            create,
            update,
            remove
        } = this;
        if (!data) {
            return <div/>;
        } else {
            return (
                <Grid className='graphql-cms'>
                    <Column computer={3} mobile={16}>
                        <SideMenu
                            items={SideMenuItems}
                            _routeToList={_routeToList}
                        />
                    </Column>
                    <Column computer={13} mobile={16}>
                        {viewMode ?
                            <View
                                find={find}
                                get={get}
                                create={create}
                                update={update}
                                remove={remove}
                                viewId={viewId}
                                currentRoute={currentRout}
                                fields={_prepareFieldsForView(data[currentRout].fields)}
                            /> :
                            <List
                                find={find}
                                get={get}
                                create={create}
                                update={update}
                                remove={remove}
                                _routeToView={_routeToView}
                                currentRoute={currentRout}
                                fields={_prepareFieldsForView(data[currentRout].fields)}
                            />}

                    </Column>
                </Grid>
            );
        }
    }
}