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
            data: this.props.data
        });
    }

    generateInputs(field, idx) {
        let fieldName = Object.keys(field)[0],
            fieldType = field[fieldName].toLowerCase();
        return (
            <Form.Field
                key={idx}
                label={fieldName}
                control='input'
                type={'text'}
                placeholder={fieldName}/>
        );
    }

    render() {
        const {Column} = Grid;
        const {fields, currentRoute, viewId} = this.state;
        let {generateInputs} = this;

        return (
            <Segment color='black' className='View'>
                <div className='btn-row'>
                    <Button type='submit' color='black'>save</Button>
                    <Button type='submit' color='black'>remove</Button>
                    <Button type='submit' color='black'>add new</Button>
                </div>
                <Grid as={Form}>
                    <Column computer={8} mobile={16}>
                        {fields.slice(0, fields.length / 2).map((field, idx) =>
                            generateInputs(field, idx)
                        )}
                    </Column>
                    <Column computer={8} mobile={16}>
                        {fields.slice(-fields.length / 2 - 1).map((field, idx) =>
                            generateInputs(field, idx)
                        )}
                    </Column>
                </Grid>
            </Segment>
        );
    }
}