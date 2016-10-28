import React, {PropTypes, Component} from 'react';
import {Segment, Icon, Menu, Table, Button, Loader} from 'semantic-ui-react';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.getList = ::this.getList;
    }

    static propTypes = {
        currentRoute: PropTypes.string,
        fields: PropTypes.array,
        _routeToView: PropTypes.func,
        find: PropTypes.func,
        get: PropTypes.func,
        create: PropTypes.func,
        update: PropTypes.func,
        remove: PropTypes.func
    }

    state = {
        fields: this.props.fields,
        currentRoute: this.props.currentRoute,
        list: false
    }

    componentDidMount() {
        this.getList();
    }

    componentWillReceiveProps() {
        this.setState({
            fields: this.props.fields,
            currentRoute: this.props.currentRoute,
            list: false
        }, () => this.getList());
    }

    getList() {
        let resolver = 'getCoupons',
            /*variables = {
             values: {id: 4},
             types: {id: 'Int'}
             },*/
            request = 'id description ';

        this.props.find('query', request, resolver)
            .then(res => this.setState({list: res}))
            .catch(err => console.log(`error: ${err}`));
    }

    render() {
        const {list, fields, currentRoute} = this.state;
        let {_routeToView} = this.props;

        if (!list) {
            return (
                <Segment className='loading-block'>
                    <div className='ui active dimmer'>
                        <Loader content='Loading'/>
                    </div>
                </Segment>
            );
        } else {
            return (
                <Segment color='black' className='View'>
                    <Table celled className='List'>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>ID</Table.HeaderCell>
                                <Table.HeaderCell>TITLE</Table.HeaderCell>
                                <Table.HeaderCell>ACTION</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {list.data.getCoupons.map(obj =>
                                <Table.Row key={obj.id}>
                                    <Table.Cell>{obj.id}</Table.Cell>
                                    <Table.Cell>{obj.description}</Table.Cell>
                                    <Table.Cell>
                                        <Button type='submit'
                                                color='black'
                                                className='action-btn'
                                                id={obj.id}
                                                onClick={_routeToView}>
                                            edit
                                        </Button>
                                        <Button type='submit' color='black' className='action-btn'>remove</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell colSpan='3'>
                                    <Button type='submit'
                                            color='black'
                                            className='add-btn'>add new</Button>
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
}