import React, {PropTypes, Component} from 'react';
import {Menu, Grid, Dropdown} from 'semantic-ui-react';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.handleItemClick = ::this.handleItemClick;
    }

    static propTypes = {
        items: PropTypes.array,
        routeTo: PropTypes.func
    }

    state = {
        activeItem: this.props.routeTo,
        items: this.props.items
    }

    handleItemClick(e, {name}) {
        if (e.name) {
            this.setState({activeItem: e.name});
            this.props.routeTo(e.name);
        } else {
            this.setState({activeItem: name});
            this.props.routeTo(name);
        }
    }

    render() {
        const {activeItem, items} = this.state;
        let {handleItemClick} = this;

        return (
            <Grid columns={1} className='SideMenuWrapper'>
                <Menu as={Grid.Column} pointing vertical inverted className='SideMenu' only='computer'>
                    {items.map((item, idx) =>
                        <Menu.Item
                            key={idx}
                            name={item}
                            active={activeItem === item}
                            onClick={handleItemClick}>
                            {item}
                        </Menu.Item>
                    )}
                </Menu>
                <Dropdown as={Grid.Column} text='NAVIGATION MENU' floating labeled button
                          className='icon mobile-nav' only='tablet mobile'>
                    <Dropdown.Menu>
                        {items.map((item, idx) =>
                            <Dropdown.Item
                                key={idx}
                                text={item}
                                onClick={handleItemClick.bind(this, {name: item})}/>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Grid>
        );
    }
}