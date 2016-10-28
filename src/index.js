import React, {PropTypes, Component} from 'react';
import {Grid} from 'semantic-ui-react';
import SideMenu from './components/SideMenu';
import View from './components/View';
import List from './components/List';
import './components/styles.scss';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.getViewData = ::this.getViewData;
        this._routeToList = ::this._routeToList;
        this._currentRoutView = ::this._currentRoutView;
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

    _currentRoutView(data) {
        this.setState({
            viewId: data.target.id,
            viewMode: true
        });
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
        let {_routeToList, _currentRoutView, _prepareFieldsForView} = this;
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
                                viewId={viewId}
                                currentRoute={currentRout}
                                fields={_prepareFieldsForView(data[currentRout].fields)}
                            /> :
                            <List
                                _routeToView={_currentRoutView}
                                currentRoute={currentRout}
                                fields={_prepareFieldsForView(data[currentRout].fields)}
                            />}

                    </Column>
                </Grid>
            );
        }
    }
}