import React, {PropTypes, Component} from 'react';
import {Grid} from 'semantic-ui-react';
import SideMenu from './components/SideMenu';
import View from './components/View';
import List from './components/List';
import './components/styles.scss';

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.getData = ::this.getData;
        this.changeRouteTo = ::this.changeRouteTo;
        this.routeToView = ::this.routeToView;
    }

    static propTypes = {
        route: PropTypes.object
    }

    state = {
        viewId: false,
        data: false,
        SideMenuItems: false,
        routeTo: false,
        viewMode: false
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch(this.props.route.endpoint, {method: 'GET'})
            .then(json => json.json())
            .then(res => {
                let menuItems = [];
                res.forEach(obj => menuItems.push(obj.essence));
                this.setState({
                    data: res,
                    SideMenuItems: menuItems,
                    routeTo: menuItems[0]
                });
            })
            .catch(err => console.log(err));
    }

    changeRouteTo(path) {
        this.setState({routeTo: path, viewMode: false, viewId: false}, () => this.forceUpdate());
    }

    routeToView(data) {
        this.setState({
            viewId: data.target.id,
            viewMode: !this.state.viewMode
        }, () => {
            console.log(this.state);
        });
    }

    render() {
        const {Column} = Grid;
        const {data, SideMenuItems, routeTo, viewMode, viewId} = this.state;
        let {changeRouteTo, routeToView} = this;

        if (!data) {
            return <div/>;
        } else {
            return (
                <Grid className='graphql-cms'>
                    <Column computer={3} mobile={16}>
                        <SideMenu
                            items={SideMenuItems}
                            routeTo={changeRouteTo}
                        />
                    </Column>
                    <Column computer={13} mobile={16}>
                        {viewMode ?
                            <View
                                viewId={viewId}
                                currentRoute={routeTo}
                                fields={data.find(obj => obj.essence === routeTo).fields}
                            /> :
                            <List
                                routeToView={routeToView}
                                currentRoute={routeTo}
                                fields={data.find(obj => obj.essence === routeTo).fields}
                            />}

                    </Column>
                </Grid>
            );
        }
    }
}