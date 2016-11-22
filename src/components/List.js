import React, {PropTypes, Component} from 'react';
import {Segment, Icon, Menu, Table, Button} from 'semantic-ui-react';

export default class List extends Component {
  constructor(props) {
    super(props);
  }
  
  static propTypes = {
    schema: PropTypes.object,
    _routeToView: PropTypes.func,
    query: PropTypes.func,
    data: PropTypes.array,
    remove: PropTypes.func,
    _addNewItem: PropTypes.func,
    _nextPage: PropTypes.func,
    _previewsPage: PropTypes.func,
    offset: PropTypes.number,
    lastPage: PropTypes.bool
  }
  
  state = {
    schema: this.props.schema,
    data: this.props.data,
    offset: this.props.offset,
    lastPage: this.props.lastPage
  }
  
  componentWillReceiveProps() {
    this.setState({
      schema: this.props.schema,
      data: this.props.data,
      offset: this.props.offset,
      lastPage: this.props.lastPage
    });
  }
  
  headerToString(obj, arr) {
    let string = '';
    arr.forEach(prop => obj[prop] ? string += `${obj[prop]} ` : null);
    return string;
  }
  
  render() {
    const {data, schema, offset, lastPage} = this.state;
    let {_routeToView, remove, _addNewItem, _nextPage, _previewsPage} = this.props,
      header = schema.listHeader,
      {headerToString} = this,
      idType = '';
    
    schema.fields.find(obj => {
      if (data[0] && Object.keys(obj)[0] === Object.keys(data[0])[0]) {
        idType = obj[Object.keys(obj)[0]].fieldType;
      }
    });
    return (
      <Segment color='black' className='View'>
          <Table celled className='List'>
              <Table.Header>
                  <Table.Row>
                      <Table.HeaderCell>#/ID</Table.HeaderCell>
                      <Table.HeaderCell>TITLE</Table.HeaderCell>
                      <Table.HeaderCell>ACTION</Table.HeaderCell>
                  </Table.Row>
              </Table.Header>
              <Table.Body>
                {data.map((obj, idx) =>
                  <Table.Row key={idx}>
                      <Table.Cell>{headerToString(obj, header.id)}</Table.Cell>
                      <Table.Cell>{headerToString(obj, header.title)}</Table.Cell>
                      <Table.Cell>
                          <Button type='submit'
                                  color='black'
                                  className='action-btn'
                                  id={obj._id ? `_id:${obj._id}:${idType}` : `id:${obj.id}:${idType}`}
                                  onClick={_routeToView}>
                              view
                          </Button>
                          <Button type='submit'
                                  color='black'
                                  className='action-btn'
                                  id={obj._id ? `_id:${obj._id}:${idType}` : `id:${obj.id}:${idType}`}
                                  onClick={!schema.resolvers.remove ? null : remove}
                                  disabled={!schema.resolvers.remove}>
                              remove
                          </Button>
                      </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
              <Table.Footer>
                  <Table.Row>
                      <Table.HeaderCell colSpan='3'>
                          <Button type='submit'
                                  color='black'
                                  className='add-btn'
                                  onClick={_addNewItem}
                                  disabled={!schema.resolvers.create}>
                              add new
                          </Button>
                          <Menu floated='right' pagination>
                              <Menu.Item as='a' icon onClick={_previewsPage}>
                                  <Icon name='left chevron' disabled={!offset}/>
                              </Menu.Item>
                              <Menu.Item as='a' icon onClick={_nextPage}>
                                  <Icon name='right chevron' disabled={lastPage}/>
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