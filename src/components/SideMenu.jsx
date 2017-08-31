import React, { Component } from 'react';
import { Button, Dropdown, Grid, Menu } from 'semantic-ui-react';

// const propTypes = {
//   items: PropTypes.array,
//   routeToList: PropTypes.func,
//   newMenuItems: PropTypes.oneOfType([
//     PropTypes.array,
//     PropTypes.bool,
//   ]),
//   handleNewMenuClick: PropTypes.func,
// };

class SideMenu extends Component {
  constructor(...args) {
    super(...args);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleNewMenuClick = this.handleNewMenuClick.bind(this);
    this.state = {
      activeItem: this.props.newMenuItems ?
        this.props.newMenuItems[0].secret : this.props.items[0].typeName,
      items: this.props.items,
    };
  }

  handleMenuClick(e, { name }) {
    if (e.name) {
      this.setState({ activeItem: e.name });
      this.props.routeToList(e.name);
    } else {
      this.setState({ activeItem: name });
      this.props.routeToList(name);
    }
  }

  handleNewMenuClick(e, { name }) {
    if (e.name) {
      this.setState({ activeItem: e.name });
      this.props.handleNewMenuClick(e.name);
    } else {
      this.setState({ activeItem: name });
      this.props.handleNewMenuClick(name);
    }
  }

  render() {
    const { activeItem, items } = this.state;
    const { handleMenuClick, handleNewMenuClick } = this;
    const { newMenuItems } = this.props;
    return (
      <Grid columns={1} className="SideMenuWrapper">
        <Menu as={Grid.Column} pointing vertical inverted className="SideMenu" only="computer">
          {newMenuItems ? newMenuItems.map((item, idx) =>
            (<Menu.Item
              key={idx}
              name={item.secret}
              id={item.secret}
              active={activeItem === item.secret}
              onClick={handleNewMenuClick}
            >
              {item.label}
            </Menu.Item>)) : null}
          {items.map((item, idx) =>
            (<Menu.Item
              key={idx}
              name={item.typeName}
              id={item.typeName}
              active={activeItem === item.typeName}
              onClick={handleMenuClick}
            >
              {item.label}
            </Menu.Item>))}
          <Menu.Item
            className="github"
            href="https://github.com/sarkistlt/graphql-auto-generating-cms"
            target="_blink"
          >
            <Button
              inverted
              content="GitHub"
              icon="github"
            />
          </Menu.Item>
        </Menu>
        <Dropdown
          as={Grid.Column}
          text="NAVIGATION MENU"
          floating
          labeled
          button
          className="icon mobile-nav"
          only="tablet mobile"
        >
          <Dropdown.Menu>
            {items.map((item, idx) =>
              (<Dropdown.Item
                key={idx}
                text={item.label}
                onClick={e => handleMenuClick(e, { name: item.label })}
              />))}
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    );
  }
}

export default SideMenu;
