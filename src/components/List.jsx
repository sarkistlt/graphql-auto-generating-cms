import React, { Component } from 'react';
import { Button, Icon, Menu, Segment, Table } from 'semantic-ui-react';

// const propTypes = {
//   schema: PropTypes.object,
//   routeToView: PropTypes.func,
//   data: PropTypes.array,
//   remove: PropTypes.func,
//   addNewItem: PropTypes.func,
//   nextPage: PropTypes.func,
//   previewsPage: PropTypes.func,
//   offset: PropTypes.number,
//   lastPage: PropTypes.bool,
// };

class List extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      schema: this.props.schema,
      data: this.props.data,
      offset: this.props.offset,
      lastPage: this.props.lastPage,
    };
  }

  componentWillReceiveProps() {
    this.setState({
      schema: this.props.schema,
      data: this.props.data,
      offset: this.props.offset,
      lastPage: this.props.lastPage,
    });
  }

  headerToString(obj, arr) {
    let string = '';
    arr.forEach((prop, idx) => {
      if (arr.length === '1') {
        string += `${obj[prop]}`;
      } else if (idx === arr.length - 1 && obj[prop]) {
        string += `${obj[prop]}`;
      } else if (obj[prop]) {
        string += `${obj[prop]} | `;
      }
    });
    return string;
  }

  render() {
    const { data, schema, offset, lastPage } = this.state;
    const { routeToView, remove, addNewItem, nextPage, previewsPage } = this.props;
    const header = schema.listHeader;
    const { headerToString } = this;
    let idType = '';
    schema.fields.forEach((obj) => {
      if (data[0] && Object.keys(obj)[0] === Object.keys(data[0])[0]) {
        idType = obj[Object.keys(obj)[0]].fieldType;
      }
    });
    return (
      <Segment color="black" className="View">
        <Table celled className="List">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>#/ID</Table.HeaderCell>
              <Table.HeaderCell>TITLE</Table.HeaderCell>
              <Table.HeaderCell>ACTION</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map(obj =>
              (<Table.Row key={obj._id || obj.id}>
                <Table.Cell>{headerToString(obj, header.id)}</Table.Cell>
                <Table.Cell>{headerToString(obj, header.title)}</Table.Cell>
                <Table.Cell>
                  <Button
                    type="submit"
                    color="black"
                    className="action-btn"
                    id={obj._id ? `_id:${obj._id}:${idType}` : `id:${obj.id}:${idType}`}
                    onClick={routeToView}
                  >
                    view
                  </Button>
                  <Button
                    type="submit"
                    color="black"
                    className="action-btn"
                    id={obj._id ? `_id:${obj._id}:${idType}` : `id:${obj.id}:${idType}`}
                    onClick={!schema.resolvers.remove ? null : remove}
                    disabled={!schema.resolvers.remove || !schema.resolvers.remove.allowed}
                  >
                    remove
                  </Button>
                </Table.Cell>
              </Table.Row>),
            )}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Button
                  type="submit"
                  color="black"
                  className="add-btn"
                  onClick={addNewItem}
                  disabled={!schema.resolvers.create || !schema.resolvers.create.allowed}
                >
                  add new
                </Button>
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon onClick={previewsPage}>
                    <Icon name="left chevron" disabled={!offset} />
                  </Menu.Item>
                  <Menu.Item as="a" icon onClick={nextPage}>
                    <Icon name="right chevron" disabled={lastPage} />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Segment>
    );
  }
}

export default List;
