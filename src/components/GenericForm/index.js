import React, { useReducer, useEffect } from 'react'

import {
    Form,
    FormHeader,
    FormControl,
    InputLabel,
    TextInput,
    Button,
    Select,
    Option,
    Input,
    Checkbox,
} from './styles';

/*<div>
            
        </div>
    a field object should hold:
    field and label name,
    type of input,
    value,
    whether its required to submit form,
    test: for text input test whether input is valid,
    if type is seleect options for drop down
*/
const fields = []

const reducer = ({fields}, {type, payload}) => {
    switch (type) {
        case 'init_state':
            return { fields: payload }

        case 'update':
            return {
                fields: [
                    ...fields.slice(0, payload.index),
                    payload,
                    ...fields.slice(payload.index + 1, fields.length)
                ]
            }

        default:
            console.log('reducer', type, payload)
            return {fields}
    }
}

export default function GenericForm(props) {
    const [state, dispatch] = useReducer(reducer, fields)

    // This just takes the index of the field and adds that to the fields state value so we can find it to update efficiently
    useEffect(() => {
        dispatch({
            type: 'init_state',
            payload: props.fields.map((field, index) => {
                return {
                    index,
                    ...field
                }
            })
        })
    }, [props.fields])

    const onChangeTest = (e, field) => {
        let {value} = e.target;
        if (!field.test || field.test(value)) {
            dispatch({
                type: 'update',
                payload: {
                    ...field,
                    value
                }
            })
        }
    }

    const createTextInput = field => {
        return <TextInput 
            key={`txt-${field.index}`}
            color={props.color || 'black'}
            type={`${field.type}`}
            value={field.value}
            onChange={e => onChangeTest(e, field)}
        />
    }

    const createSelectInput = field => {
        let { options } = field

        return (
            <Select value={state.fields[field.index].value}>
                {options.map(option => (
                    <Option
                        key={`${field.name}-${option}`}
                        onClick={() => dispatch({
                            type: `update`,
                            payload: {
                                ...field,
                                value: option
                            }
                        })}
                    >
                        {option}
                    </Option>
                ))}
            </Select>
        )
    }

    const validate = () => {
        return state.fields
            .filter( field => field.required && field.value === '')
            .map( field => field.name)
    }

    const submit = e => {
        e.preventDefault();

        let invalid_fields = validate()

        
        if (invalid_fields.length === 0) {
            if (props.submitAction)
                props.submitAction(state.fields.reduce((prev, cur) => {
                    prev[cur.name.toLowerCase()] = cur.value
                    return prev
                }, {}));
        } else
            alert(`Fields: ${invalid_fields} required`)
    }

    const createInput = field => {
        if (field.type !== 'select')
            return createTextInput(field)
        else {
            return createSelectInput(field)
        }
    }

    return (
        <Form>
            <FormHeader color={props.color}>
                <h1>{props.header}</h1>
            </FormHeader>

            {state.fields ? state.fields.map(field => (
                <FormControl 
                    key={`ctrl-${field.index}`}
                    color={props.color || 'black'}
                >
                    <InputLabel
                        key={`lbl-${field.index}`}
                        htmlFor={field.name}
                    >
                        {field.name}
                    </InputLabel>

                    {createInput(field)}
                </FormControl>
            )): null}

            <FormControl>
                <Button onClick={submit}>
                    {props.submitText}
                </Button>
            </FormControl>
        </Form>
    )
}
