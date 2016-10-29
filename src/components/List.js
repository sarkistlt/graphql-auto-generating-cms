import React, {PropTypes, Component} from 'react';
import {Segment, Icon, Menu, Table, Button} from 'semantic-ui-react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        schema: PropTypes.object,
        _routeToView: PropTypes.func,
        setState: PropTypes.func,
        query: PropTypes.func,
        data: PropTypes.array,
        remove: PropTypes.func,
        _routeToAdd: PropTypes.func
    }

    state = {
        schema: this.props.schema,
        data: this.props.data
    }

    componentWillReceiveProps() {
        this.setState({
            schema: this.props.schema,
            data: this.props.data
        });
    }

    headerToString(obj, arr) {
        let string = '';
        arr.forEach(prop => obj[prop] ? string += `${obj[prop]} ` : null);
        return string;
    }

    render() {
        const {data, schema} = this.state;
        let {_routeToView, remove, _routeToAdd} = this.props,
            header = schema.listHeader,
            {headerToString} = this;

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
                                            id={obj._id ? obj._id : obj.id}
                                            onClick={_routeToView}>
                                        view
                                    </Button>
                                    <Button type='submit'
                                            color='black'
                                            className='action-btn'
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
                                        onClick={_routeToAdd}
                                        disabled={!schema.resolvers.create}>
                                    add new
                                </Button>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='left chevron'/>
                                    </Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='right chevron'/>
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