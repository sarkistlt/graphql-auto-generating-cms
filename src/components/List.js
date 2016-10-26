import React, {PropTypes, Component} from 'react';
import {Segment, Icon, Menu, Table, Button} from 'semantic-ui-react';

export default class List extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        currentRoute: PropTypes.string,
        fields: PropTypes.array,
        routeToView: PropTypes.func
    }

    state = {
        fields: this.props.fields,
        currentRoute: this.props.currentRoute
    }

    componentWillReceiveProps() {
        this.setState({
            data: this.props.data
        });
    }

    render() {
        const {fields, currentRoute} = this.state;
        let {routeToView} = this.props;

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
                        <Table.Row>
                            <Table.Cell>First</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>
                                <Button type='submit'
                                        color='black'
                                        className='action-btn'
                                        id="id"
                                        onClick={routeToView}>
                                    edit
                                </Button>
                                <Button type='submit' color='black' className='action-btn'>remove</Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>
                                <Button type='submit'
                                        color='black'
                                        className='action-btn'
                                        id="id"
                                        onClick={routeToView}>
                                    edit
                                </Button>
                                <Button type='submit' color='black' className='action-btn'>remove</Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>Cell</Table.Cell>
                            <Table.Cell>
                                <Button type='submit'
                                        color='black'
                                        className='action-btn'
                                        id="id"
                                        onClick={routeToView}>
                                    edit
                                </Button>
                                <Button type='submit' color='black' className='action-btn'>remove</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                <Button type='submit' color='black' className='add-btn'>add new</Button>
                                <Menu floated='right' pagination>
                                    <Menu.Item as='a' icon>
                                        <Icon name='left chevron' />
                                    </Menu.Item>
                                    <Menu.Item as='a' icon>
                                        <Icon name='right chevron' />
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