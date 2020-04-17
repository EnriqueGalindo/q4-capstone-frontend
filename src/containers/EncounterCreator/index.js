import React, { useState, useEffect } from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import Modal from '../../components/Modal';
import Table from '../../components/EncounterCreatorTable';
import Header from '../../components/EncounterCreatorHeader';
import Form from '../../components/GenericForm';

export default function EncounterCreator({api, match}) {
    const history = useHistory();
    const location = useLocation();
    const [hide, setHide] = useState(true);
    const [creatures, setCreatures] = useState([]);
    const [title, setTitle] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const testForNumber = input => (input === '' || /^\d+$/.test(input))

    const hideModal = e => {
        setHide(true)
    }

    const onSave = e => {
        if (!isEdit)
            api.createEncounter({
                title,
                creatures
            }, () => {
                history.push('/')
            })
        else {
            api.updateEncounter({
                id: match.params.id,
                title,
                creatures
            }, () => {
                history.push('/')
            })
        }
    }

    const onCancel = e => {
        history.push('/')
    }

    const onAdd = e => {
        setHide(false)
    }

    const addCreature = creature => {
        setHide(true)
        setCreatures([...creatures, creature])
    }

    const hydrateForm = data => {
        setTitle(data.title);
        setCreatures(data.creatures.reduce((prev, cur) => {
            let creatureIndex = prev.findIndex(creature => creature.name === cur.name)

            if (creatureIndex === -1)
                prev.push({
                    ...cur,
                    id: [cur.id],
                    quantity: 1
                })
            else {
                let ids = prev[creatureIndex].id;
                ids.push(cur.id)
                prev[creatureIndex] = {
                    ...prev[creatureIndex],
                    id: ids,
                    quantity: prev[creatureIndex].quantity + 1
                }
            }
            return prev;
        }, []))
    }

    useEffect(() => {
        if (match.params.id) {
            // This is an edit and needs to make a fetch request
            // to grab the current encounter to fill in the form details
            api.getEncounter(match.params.id, hydrateForm)
            setIsEdit(true)
        } else {
            // We are creating a new encounter
            // grab title from url query string
            const search = location.search
            const params = new URLSearchParams(search)
            setTitle(params.get('title'))
            setIsEdit(false)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Header 
                title={title}
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
