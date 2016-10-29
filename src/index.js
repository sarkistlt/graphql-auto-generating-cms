import React, {PropTypes, Component} from 'react';
import {Grid, Loader, Segment} from 'semantic-ui-react';
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
        this.getListData = ::this.getListData;
        this.getViewData = ::this.getViewData;
        this._routeToList = ::this._routeToList;
        this._routeToView = ::this._routeToView;
        this.getCurrentViewFields = ::this.getCurrentViewFields;
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
        viewMode: false
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

    create(data) {
        console.log('create');
        let schema = this.state.currentPathSchema,
            type = schema.typeName,
            resolver = schema.resolvers.create.resolver,
            req = '';
        schema.fields.forEach(prop => req += `${Object.keys(prop)[0]} `);
        if (!data) {
            console.log('data wasn\'t provided');
        } else {
            if (schema.resolvers.create) {
                this.query(type, req, resolver);
            }
        }
    }

    update(data, id) {
        console.log('update');
        let schema = this.state.currentPathSchema,
            type = schema.typeName,
            resolver = schema.resolvers.update.resolver,
            req = Object.keys(schema.fields[0])[0];

        if (!id) {
            this.create(data);
        } else {
            if (schema.resolvers.update) {
                this.query(type, req, resolver, data);
            }
        }
    }

    remove(id) {
        console.log('remove');
        let schema = this.state.currentPathSchema,
            type = schema.typeName,
            resolver = schema.resolvers.remove.resolver,
            req = Object.keys(schema.fields[0])[0];

        if (!id) {
            console.log('id wasn\'t provided');
        } else {
            if (schema.resolvers.remove) {
                this.query(type, req, resolver);
            }
        }
    }

    getListData() {
        let d = this.state.currentPathSchema,
            h = this.state.currentPathSchema.listHeader,
            resolver = d.resolvers.find.resolver,
            req = `${h.id.join(' ')} ${h.title.join(' ')}`;

        this.query('query', req, resolver)
            .then(res => {
                res.errors ? console.log(res) : null;
                this.setState({listData: res});
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
            values: {[queryId]: id},
            types: {[queryId]: queryArgs[queryId]}
        };
        this.state.fields.forEach(prop => request += `${Object.keys(prop)[0]} `);
        this.query('query', request, resolver, variables)
            .then(res => this.setState({viewData: res, viewMode: true}))
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
                typeName: currentRout,
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

    _routeToList(path) {
        this.setState({
            currentPathName: path,
            viewData: false,
            viewMode: false,
            listData: false,
            currentPathSchema: false
        }, () => {
            this.getCurrentViewFields(this.state.schema[this.state.currentPathName], [this.state.currentPathName]);
        });
    }

    _routeToView(e) {
        this.getViewData(e.target.id);
    }

    _routeToAdd(e) {
        this.getViewData(e.target.id);
    }

    render() {
        const {Column} = Grid;
        const {schema, currentPathSchema, fields, viewData, listData, SideMenuItems, viewMode} = this.state;
        let {_routeToList, _routeToView, _routeToAdd, query, update, remove} = this;
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
                    <Column computer={13} mobile={16}>
                        {viewMode ?
                            (!viewData ?
                                <Segment className='loading-block'>
                                    <div className='ui active dimmer'>
                                        <Loader content='Loading'/>
                                    </div>
                                </Segment> :
                                <View
                                    setState={this.setState}
                                    query={query}
                                    data={viewData.data[resolverForList][0] ?
                                        viewData.data[resolverForList][0] : viewData.data[resolverForList]}
                                    fields={fields}
                                    update={update}
                                    remove={remove}
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
                                    setState={this.setState}
                                    query={query}
                                    remove={remove}
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