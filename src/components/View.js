import React, {PropTypes, Component} from 'react';
import {Segment, Grid, Form, Button} from 'semantic-ui-react';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.generateInputs = ::this.generateInputs;
    }

    static propTypes = {
        currentRoute: PropTypes.string,
        viewId: PropTypes.string,
        fields: PropTypes.array
    }

    state = {
        fields: this.props.fields,
        viewId: this.props.viewId,
        currentRoute: this.props.currentRoute
    }

    componentWillReceiveProps() {
        this.setState({
            fields: this.props.fields,
            viewId: this.props.viewId,
            currentRoute: this.props.currentRoute
        });
    }

    generateInputs(field, idx) {
        let propName = Object.keys(field)[0];
        return (
            <Form.Field
                key={idx}
                label={field[propName].label}
                control={field[propName].inputControl}
                type={field[propName].inputType}
                id={propName}
                disabled={field[propName].disabled}
                placeholder={propName}/>
        );
    }

    render() {
        const {Column} = Grid;
        const {fields, currentRoute, viewId} = this.state;
        let {generateInputs} = this;
        let to = (fields.length / 2).toFixed(0);
        let from = fields.length - to;

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