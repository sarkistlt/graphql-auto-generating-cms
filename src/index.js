import React, {PropTypes, Component} from 'react';
import {Grid, Loader, Segment, Message} from 'semantic-ui-react';
import SideMenu from './components/SideMenu';
import View from './components/View';
import List from './components/List';
import './components/styles.scss';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.query = ::this.query;
        this.create = ::this.create;
        this.update = ::this.update;
        this.remove = ::this.remove;
        this.initCMS = ::this.initCMS;
        this._nextPage = ::this._nextPage;
        this._addNewItem = ::this._addNewItem;
        this.getListData = ::this.getListData;
        this.getViewData = ::this.getViewData;
        this._routeToList = ::this._routeToList;
        this._routeToView = ::this._routeToView;
        this._previewsPage = ::this._previewsPage;
        this.getCurrentViewFields = ::this.getCurrentViewFields;
        this._collectFieldsData = ::this._collectFieldsData;
    }

    static propTypes = {
        route: PropTypes.object
    }

    state = {
        viewData: false,
        listData: false,
        schema: false,
        currentPathSchema: false,
        currentPathName: false,
        SideMenuItems: false,
        viewMode: false,
        currentItemId: false,
        limit: 50,
        offset: 0,
        lasPage: false
    }

    componentDidMount() {
        this.initCMS();
    }

    shouldComponentUpdate(p, n) {
        return n.currentPathSchema && n.schema;
    }

    query(type, request, resolver, variables) {
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
                        varForRequest += `${[key]}: $${[key]} `;
                    }
                }
                xhr.send(JSON.stringify({
                    query: `${type} ${resolver}(${varTypes}) { ${resolver}(${varForRequest}) {${request}}}`,
                    variables: variables.values
                }));
            }
        });
    }

    create(data) {
        if (this.state.currentPathSchema.resolvers.create) {
            let schema = this.state.currentPathSchema,
                currentList = this.state.currentPathName,
                resolver = schema.resolvers.create.resolver,
                req = '';

            schema.fields.forEach(prop => req += `${Object.keys(prop)[0]} `);

            if (!data) {
                console.log('data wasn\'t provided');
            } else {
                if (schema.resolvers.create) {
                    this.query('mutation', req, resolver, data)
                        .then(() => {
                            this.forceUpdate();
                            this.showSuccessMs();
                            this._routeToList(currentList);
                        })
                        .catch(err => {
                            this.showErrorMs();
                            console.log(`create error: ${err}`);
                        });
                }
            }
        }
    }

    update() {
        if (this.state.currentPathSchema.resolvers.update) {
            let schema = this.state.currentPathSchema,
                resolver = schema.resolvers.update.resolver,
                id = this.state.currentItemId,
                req = id ? id.split(':')[0] : '',
                fields = this.state.fields,
                data = this._collectFieldsData(fields, id);

            if (!id) {
                this.create(data);
            } else {
                if (schema.resolvers.update) {
                    this.query('mutation', req, resolver, data)
                        .then(this.showSuccessMs)
                        .catch(err => {
                            this.showErrorMs();
                            console.log(`update error: ${err}`);
                        });
                }
            }
        }
    }

    remove(e) {
        if (this.state.currentPathSchema.resolvers.remove) {
            let id = e.target.id,
                schema = this.state.currentPathSchema,
                currentList = this.state.currentPathName,
                resolver = schema.resolvers.remove.resolver,
                req = id.split(':')[0],
                data = {values: {}, types: {}};

            data.values[id.split(':')[0]] = id.split(':')[1];
            data.types[id.split(':')[0]] = id.split(':')[2];

            if (!id) {
                console.log('id wasn\'t provided');
            } else {
                if (schema.resolvers.remove) {
                    this.query('mutation', req, resolver, data)
                        .then(() => {
                            this.forceUpdate();
                            this.showSuccessMs();
                            this._routeToList(currentList);
                        })
                        .catch(err => {
                            this.showErrorMs();
                            console.log(`remove error: ${err}`);
                        });
                }
            }
        }
    }

    getListData() {
        let d = this.state.currentPathSchema,
            h = this.state.currentPathSchema.listHeader,
            resolver = d.resolvers.find.resolver,
            {offset, limit} = this.state,
            data = {
                values: {offset: offset, limit: limit},
                types: {offset: 'Int', limit: 'Int'}
            },
            req = `${h.id.join(' ')} ${h.title.join(' ')}`;
        this.query('query', req, resolver, data)
            .then(res => {
                res.errors ? console.log(res) : null;
                this.setState({
                    listData: res,
                    lasPage: res.data[resolver].length < 50
                });
            })
            .catch(err => console.log(`error: ${err}`));
    }

    getViewData(id) {
        let resolver = this.state.currentPathSchema.resolvers.find.resolver,
            queryArgs = this.state.currentPathSchema.resolvers.find.args.query,
            queryId = '',
            request = '';

        for (let key in queryArgs) {
            if (key === 'id' || key === '_id') {
                !queryId || queryId === 'id' ? queryId = key : null;
            }
        }

        let variables = {
            values: {[queryId]: id.split(':')[1]},
            types: {[queryId]: queryArgs[queryId]}
        };
        this.state.fields.forEach(prop => request += `${Object.keys(prop)[0]} `);
        this.query('query', request, resolver, variables)
            .then(res => this.setState({viewData: res, viewMode: true, currentItemId: id}))
            .catch(err => console.log(`error: ${err}`));
    }

    getCurrentViewFields(obj, currentRout) {
        let array = [];
        for (let key in obj.fields) {
            if (obj.fields.hasOwnProperty(key)) {
                if (!obj.fields[key].exclude) {
                    array.push({[key]: obj.fields[key]});
                }
            }
        }
        this.setState({
            currentPathSchema: {
                typeName: currentRout[0],
                label: obj.label,
                resolvers: obj.resolvers,
                fields: array,
                listHeader: obj.listHeader
            },
            fields: array
        }, this.getListData);
    }

    initCMS() {
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
                    schema: res,
                    SideMenuItems: menuItems
                }, () => {
                    let prop = this.state.SideMenuItems[0].typeName;
                    this.getCurrentViewFields(this.state.schema[prop], prop);
                });
            })
            .catch(err => console.log(err));
    }

    showErrorMs() {
        document.getElementById('ms-error').style.visibility = 'visible';
        document.getElementById('ms-error').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('ms-error').style.visibility = 'hidden';
            document.getElementById('ms-error').style.opacity = 0;
        }, 3000);
    }

    showSuccessMs() {
        document.getElementById('ms-success').style.visibility = 'visible';
        document.getElementById('ms-success').style.opacity = 1;
        setTimeout(() => {
            document.getElementById('ms-success').style.visibility = 'hidden';
            document.getElementById('ms-success').style.opacity = 0;
        }, 3000);
    }

    _nextPage() {
        let {offset, limit, lasPage} = this.state;
        if(!lasPage) {
            console.log('_nextPage');
            this.setState({
                offset: offset + 50,
                limit: limit + 50
            }, this.getListData);
        }
    }

    _previewsPage() {
        let {offset, limit} = this.state;
        if (offset) {
            console.log('_previewsPage');
            this.setState({
                offset: offset - 50,
                limit: limit - 50
            }, this.getListData);
        }
    }

    _addNewItem() {
        if (this.state.currentPathSchema.resolvers.create) {
            this.setState({
                viewMode: true,
                currentItemId: false
            }, this.forceUpdate);
        }
    }

    _routeToList(path) {
        this.setState({
            currentPathName: path,
            viewData: false,
            viewMode: false,
            listData: false,
            currentPathSchema: false,
            currentItemId: false,
            limit: 50,
            offset: 0
        }, () => {
            this.getCurrentViewFields(this.state.schema[this.state.currentPathName], [this.state.currentPathName]);
        });
    }

    _routeToView(e) {
        this.getViewData(e.target.id);
    }

    _collectFieldsData(fields, id) {
        let data = {values: {}, types: {}};

        function getCurrentFieldData(id, type) {
            switch (type) {
            case 'Int':
                return document.getElementById(id).value;
            case 'Float':
                return document.getElementById(id).value;
            case 'Boolean':
                return document.getElementById(id).checked;
            case 'String':
                return document.getElementById(id).value;
            default:
                return document.getElementById(id).value;
            }
        }

        fields.forEach(fieldObj => {
            let propName = Object.keys(fieldObj)[0];
            if (!fieldObj[propName].disabled) {
                if (propName !== 'id' && propName !== '_id' && propName !== 'offset' && propName !== 'limit') {
                    data.values[propName] = getCurrentFieldData(propName, fieldObj[propName].fieldType);
                    data.types[propName] = fieldObj[propName].fieldType;
                } else if (id) {
                    if (!data.values[id.split(':')[0]]) {
                        data.values[id.split(':')[0]] = id.split(':')[1];
                        data.types[id.split(':')[0]] = id.split(':')[2];
                    } else {
                        data.values[propName] = getCurrentFieldData(propName, fieldObj[propName].fieldType);
                        data.types[propName] = fieldObj[propName].fieldType;
                    }
                }
            }
        });
        return data;
    }

    render() {
        const {Column} = Grid;
        const {
            schema, currentPathSchema, fields, viewData, offset, lasPage,
            listData, SideMenuItems, viewMode, currentItemId
        } = this.state;
        let {_routeToList, _routeToView, _routeToAdd, _addNewItem,
            _nextPage, _previewsPage, query, update, remove} = this;
        if (!schema || !currentPathSchema) {
            return (
                <Segment className='loading-block'>
                    <div className='ui active dimmer'>
                        <Loader content='Loading'/>
                    </div>
                </Segment>
            );
        } else {
            let resolverForList = currentPathSchema.resolvers.find.resolver;

            return (
                <Grid className='graphql-cms'>
                    <Column computer={3} mobile={16}>
                        <SideMenu
                            setState={this.setState}
                            items={SideMenuItems}
                            _routeToList={_routeToList}
                        />
                    </Column>
                    <Message color='green' id='ms-success'>Success!</Message>
                    <Message color='red' id='ms-error'>Error!</Message>
                    <Column computer={13} mobile={16}>
                        {viewMode ?
                            (!viewData && currentItemId ?
                                <Segment className='loading-block'>
                                    <div className='ui active dimmer'>
                                        <Loader content='Loading'/>
                                    </div>
                                </Segment> :
                                <View
                                    query={query}
                                    data={!viewData ? false : viewData.data[resolverForList][0] ?
                                        viewData.data[resolverForList][0] : viewData.data[resolverForList]}
                                    fields={fields}
                                    update={update}
                                    remove={remove}
                                    currentItemId={currentItemId}
                                    _addNewItem={_addNewItem}
                                    _routeToAdd={_routeToAdd}
                                    schema={currentPathSchema}
                                />) :
                            (!listData ?
                                <Segment className='loading-block'>
                                    <div className='ui active dimmer'>
                                        <Loader content='Loading'/>
                                    </div>
                                </Segment> :
                                <List
                                    query={query}
                                    remove={remove}
                                    offset={offset}
                                    lasPage={lasPage}
                                    _nextPage={_nextPage}
                                    _previewsPage={_previewsPage}
                                    _addNewItem={_addNewItem}
                                    _routeToView={_routeToView}
                                    data={listData.data[resolverForList]}
                                    schema={currentPathSchema}
                                />)}
                    </Column>
                </Grid>
            );
        }
    }
}