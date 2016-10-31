import React, {PropTypes, Component} from 'react';
import {Menu, Grid, Dropdown, Button} from 'semantic-ui-react';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this._handleMenuClick = ::this._handleMenuClick;
        this._handleNewMenuClick = ::this._handleNewMenuClick;
    }

    static propTypes = {
        items: PropTypes.array,
        setState: PropTypes.func,
        _routeToList: PropTypes.func,
        newMenuItems: PropTypes.array,
        _handleNewMenuClick: PropTypes.func
    }

    state = {
        activeItem: this.props.newMenuItems ? this.props.newMenuItems[0].secret : this.props.items[0].typeName,
        items: this.props.items
    }

    _handleMenuClick(e, {name}) {
        if (e.name) {
            this.setState({activeItem: e.name});
            this.props._routeToList(e.name);
        } else {
            this.setState({activeItem: name});
            this.props._routeToList(name);
        }
    }

    _handleNewMenuClick(e, {name}) {
        if (e.name) {
            this.setState({activeItem: e.name});
            this.props._handleNewMenuClick(e.name);
        } else {
            this.setState({activeItem: name});
            this.props._handleNewMenuClick(name);
        }
    }

    render() {
        const {activeItem, items} = this.state;
        let {_handleMenuClick, _handleNewMenuClick} = this,
            {newMenuItems} = this.props;

        return (
            <Grid columns={1} className='SideMenuWrapper'>
                <Menu as={Grid.Column} pointing vertical inverted className='SideMenu' only='computer'>
                    {newMenuItems ? newMenuItems.map((item, idx) =>
                        <Menu.Item
                            key={idx}
                            name={item.secret}
                            id={item.secret}
                            active={activeItem === item.secret}
                            onClick={_handleNewMenuClick}>
                            {item.label}
                        </Menu.Item>
                    ) : null}
                    {items.map((item, idx) =>
                        <Menu.Item
                            key={idx}
                            name={item.typeName}
                            id={item.typeName}
                            active={activeItem === item.typeName}
                            onClick={_handleMenuClick}>
                            {item.label}
                        </Menu.Item>
                    )}
                    <Menu.Item href='https://github.com/sarkistlt/graphql-auto-generating-cms' target='_blink'>
                        <Button
                            inverted
                            content='GitHub'
                            className='github'
                            icon='github'/>
                    </Menu.Item>
                </Menu>
                <Dropdown as={Grid.Column} text='NAVIGATION MENU' floating labeled button
                          className='icon mobile-nav' only='tablet mobile'>
                    <Dropdown.Menu>
                        {items.map((item, idx) =>
                            <Dropdown.Item
                                key={idx}
                                text={item.label}
                                onClick={_handleMenuClick.bind(this, {name: item.label})}/>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
        );
    }
}