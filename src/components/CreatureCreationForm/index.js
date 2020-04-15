import React, { useState } from 'react'

import {
    Form,
    FormControl,
    InputLabel,
    TextInput,
    FormHeader,
    Button
} from './style'

export default function EncounterCreatorForm(props) {
    const [name, setName] = useState('');
    const [hp, setHP] = useState('');
    const [ac, setAC] = useState('')
    const [quant, setQuant] = useState('')

    const testForNumber = input => (input === '' || /^\d+$/.test(input))

    const validateAndSubmit = e => {
        e.preventDefault()
        if (!(name || hp || ac || quant)) {
            alert('All fields are required')
            return;
        }

        if (props.onCreate)
            props.onCreate({
                name,   
                hp,
                ac,
                quantity: quant
            })
        
        setName('')
        setHP('')
        setAC('')
        setQuant('')
    }

    return (
        <Form>
            <FormHeader>
                <h1>Create a creature</h1>
            </FormHeader>
            <FormControl
                color={props.color || 'white'}
            >
                <InputLabel>Name:</InputLabel>
                <TextInput 
                    color={props.color || 'white'}
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </FormControl>

            <FormControl
                color={props.color || 'white'}
            >
                <InputLabel>HP:</InputLabel>
                <TextInput 
                    color={props.color || 'white'}
                    type='text'
                    value={hp}
                    onChange={e => testForNumber(e.target.value) ? setHP(e.target.value) : null}
                />
            </FormControl>

            <FormControl
                color={props.color || 'white'}
            >
                <InputLabel>AP:</InputLabel>
                <TextInput 
                    color={props.color || 'white'}
                    type='text'
                    value={ac}
                    onChange={e => testForNumber(e.target.value) ? setAC(e.target.value) : null}
                />
            </FormControl>

            <FormControl
                color={props.color || 'white'}
            >
                <InputLabel>Quantity:</InputLabel>
                <TextInput 
                    color={props.color || 'white'}
                    type="text" 
                    value={quant}
                    onChange={e => testForNumber(e.target.value) ? setQuant(e.target.value) : null}
                />
            </FormControl>

            <FormControl>
                <Button onClick={validateAndSubmit}>Create</Button>
            </FormControl>
        </Form>
    )
}
