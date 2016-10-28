import React, {PropTypes, Component} from 'react';
import {Segment, Grid, Form, Button, Loader} from 'semantic-ui-react';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.getViewData = ::this.getViewData;
        this.generateInputs = ::this.generateInputs;
    }

    static propTypes = {
        currentRoute: PropTypes.string,
        viewId: PropTypes.string,
        fields: PropTypes.array,
        find: PropTypes.func,
        get: PropTypes.func,
        create: PropTypes.func,
        update: PropTypes.func,
        remove: PropTypes.func
    }

    state = {
        fields: this.props.fields,
        viewId: this.props.viewId,
        currentRoute: this.props.currentRoute,
        view: false
    }

    componentDidMount() {
        this.getViewData();
    }

    componentWillReceiveProps() {
        this.setState({
            fields: this.props.fields,
            viewId: this.props.viewId,
            currentRoute: this.props.currentRoute,
            view: false
        }, () => this.getViewData());
    }

    getViewData() {
        let resolver = 'getCoupons',
            variables = {
                values: {id: this.state.viewId},
                types: {id: 'Int'}
            },
            request = '';

        this.state.fields.forEach(prop => request += `${Object.keys(prop)[0]} `);
        this.props.get('query', request, resolver, variables)
            .then(res => this.setState({view: res}))
            .catch(err => console.log(`error: ${err}`));
    }

    generateInputs(field, idx) {
        let propName = Object.keys(field)[0],
            value = '',
            checked = '';

        if ((this.state.view.data.getCoupons[0][propName] ||
        typeof (this.state.view.data.getCoupons[0][propName]) === 'boolean') &&
        field[propName].inputType !== 'file') {
            value = this.state.view.data.getCoupons[0][propName];
        }
        if (field[propName].inputType === 'checkbox') {
            checked = this.state.view.data.getCoupons[0][propName];
        }

        return (
            <Form.Field
                key={idx}
                label={field[propName].label}
                control={field[propName].inputControl}
                type={field[propName].inputType}
                id={propName}
                defaultValue={value}
                defaultChecked={checked}
                disabled={field[propName].disabled}
                placeholder={propName}/>
        );
    }

    render() {
        const {Column} = Grid;
        const {fields, view} = this.state;
        let {generateInputs} = this;
        let to = (fields.length / 2).toFixed(0);
        let from = fields.length - to;

        console.log(view);
        if (!view) {
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
                    <div className='btn-row'>
                        <Button type='submit' color='black'>save</Button>
                        <Button type='submit' color='black'>remove</Button>
                        <Button type='submit' color='black'>add new</Button>
                    </div>
                    <Grid as={Form}>
                        <Column computer={8} mobile={16}>
                            {fields.slice(0, to).map((field, idx) =>
                                generateInputs(field, idx)
                            )}
                        </Column>
                        <Column computer={8} mobile={16}>
                            {fields.slice(-from).map((field, idx) =>
                                generateInputs(field, idx)
                            )}
                        </Column>
                    </Grid>
                </Segment>
            );
        }
    }
}