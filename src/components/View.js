import React, {PropTypes, Component} from 'react';
import {Segment, Grid, Form, Button} from 'semantic-ui-react';

export default class View extends Component {
    constructor(props) {
        super(props);
        this.generateInputs = ::this.generateInputs;
    }

    static propTypes = {
        schema: PropTypes.object,
        query: PropTypes.func,
        data: PropTypes.object,
        fields: PropTypes.array,
        update: PropTypes.func,
        remove: PropTypes.func,
        _routeToAdd: PropTypes.func,
        currentItemId: PropTypes.string
    }

    state = {
        schema: this.props.schema,
        fields: this.props.fields,
        data: this.props.data,
        currentItemId: this.props.currentItemId
    }

    componentWillReceiveProps() {
        this.setState({
            schema: this.props.schema,
            fields: this.props.schema.fields,
            data: this.props.data,
            currentItemId: this.props.currentItemId
        });
    }

    getDateValue(arg) {
        let date = new Date(arg),
            y = date.getFullYear(),
            m = (date.getMonth() + 1).toString().length === 2 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`,
            d = date.getDate().toString().length === 2 ? date.getDate() : `0${date.getDate()}`;
        return `${y}-${m}-${d}`;
    }

    generateInputs(field, idx) {
        let propName = Object.keys(field)[0],
            value = '',
            checked = '',
            dateInput = false;

        if ((this.state.data[propName] ||
            typeof (this.state.data[propName]) === 'boolean') &&
            field[propName].inputType !== 'file') {
            value = this.state.data[propName];
        }
        if (field[propName].inputType === 'checkbox') {
            checked = this.state.data[propName];
        }

        if (propName === 'createdAt' ||
            propName === 'updatedAt' ||
            propName === 'deletedAt' ||
            field[propName].inputType === 'date') {
            dateInput = 'date';
            value = this.getDateValue(value);
        }

        return (
            <Form.Field
                key={idx}
                label={field[propName].label}
                control={field[propName].inputControl}
                type={dateInput || field[propName].inputType}
                id={propName}
                defaultValue={value}
                defaultChecked={checked}
                disabled={propName === '_id' || propName === 'id' ? true : field[propName].disabled}
                placeholder={propName}/>
        );
    }

    render() {
        const {Column} = Grid;
        const {fields, schema, currentItemId} = this.state;
        let {update, remove, _routeToAdd} = this.props,
            {generateInputs} = this,
            to = (fields.length / 2).toFixed(0),
            from = fields.length - to;

        return (
            <Segment color='black' className='View'>
                <div className='btn-row'>
                    <Button type='submit' color='black'
                            onClick={_routeToAdd}
                            disabled={!schema.resolvers.create}>
                        add new
                    </Button>
                    <Button type='submit' color='black'
                            onClick={!schema.resolvers.update ? null : update}
                            disabled={!schema.resolvers.update}>
                        save
                    </Button>
                    <Button type='submit' color='black'
                            id={currentItemId}
                            onClick={!schema.resolvers.remove ? null : remove}
                            disabled={!schema.resolvers.remove}>
                        remove
                    </Button>
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