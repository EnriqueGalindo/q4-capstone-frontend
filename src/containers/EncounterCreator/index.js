import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import Modal from '../../components/Modal';
import Table from '../../components/EncounterCreatorTable';
import Header from '../../components/EncounterCreatorHeader';
import Form from '../../components/GenericForm';

const testForNumber = input => (input === '' || /^\d+$/.test(input))

export default function EncounterCreator() {
    const history = useHistory()
    const [hide, setHide] = useState(true);
    const [creatures, setCreatures] = useState([])

    const hideModal = e => {
        setHide(true)
    }

    const onSave = e => {}

    const onCancel = e => {
        history.push('/')
    }

    const onAdd = e => {
        setHide(false)
    }

    const addCreature = creature => {
        setHide(true)
        console.log(creature    )
        setCreatures([...creatures, creature])
    }

    return (
        <div>
            <Header 
                title={'Title of Encounter'}
                onSave={onSave}
                onCancel={onCancel}
                onAdd={onAdd}
            />
            <Table creatures={creatures}/>
            <Modal
                bgColor={'#151E3F'}
                width={'30vw'}
                height={'50vh'}
                color={'white'}
                onContainerClick={hideModal}
                onContentClick={e => e.stopPropagation()}
                hidden={hide}
            >
                <Form 
                    header={'Create a creature'}
                    color='white'
                    submitText='Create'
                    submitAction={addCreature}
                    fields={[
                        {
                            name: 'Name',
                            value: '',
                            required: true
                        },
                        {
                            name: 'HP',
                            value: '',
                            required: true,
                            test: testForNumber
                        },
                        {
                            name: 'AC',
                            value: '',
                            required: true,
                            test: testForNumber
                        },
                        {
                            name: 'Quantity',
                            value: '',
                            required: true,
                            test: testForNumber
                        }
                    ]}
                />
            </Modal>
        </div>
    )
}
