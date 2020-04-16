import React, {useEffect, useReducer} from 'react'

import {
    Form,
    FormHeader,
    FormControl,
    InputLabel,
    TextInput,
    Button
} from './styles';

const fields = []
const reducer = ({fields}, {type, payload}) => {
    if (type === 'initial_state')
        return {fields: payload}

    if (type === 'update') {
        return {fields: [
            ...fields.slice(0, payload.index),
            payload,
            ...fields.slice(payload.index + 1, fields.length)
        ]}
    }
}

export default function GenericForm(props) {
    const [state, dispatch] = useReducer(reducer, fields)

    useEffect(() => {
        dispatch({
            type: 'initial_state',
            payload: props.fields.map((field, index) => {
                return {
                    index,
                    ...field
                }
            })
        })
    }, [props.fields])

    const submit = e => {
        e.preventDefault();

        let invalid_fields = validate()
        
        if (invalid_fields.length === 0)
            props.submitAction(state.fields.reduce((prev, cur) => {
                prev[cur.name] = cur.value
                return prev
            }, {}));
        else {
            alert(`Fields: ${invalid_fields} required`)
        }
    }

    const validate = () => {
        return state.fields
            .filter( field => field.required && field.value === '')
            .map( field => field.name)
    }

    const onChange = (e, field) => {
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

    return (
        <Form>
            <FormHeader>
                <h1>{props.header}</h1>
            </FormHeader>

            {state.fields ? state.fields.map(field => (
                <FormControl key={`${field.index}-control`}>
                    <InputLabel 
                        key={`${field.index}-label`}
                        htmlfor={field.name}
                    >
                        {field.name}
                    </InputLabel>
                    <TextInput
                        key={`${field.index}-input`}
                        color={props.color || 'black'}
                        type='text'
                        value={field.value}
                        onChange={e => onChange(e, field)}
                    />
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
