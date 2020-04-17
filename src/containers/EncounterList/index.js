import React, {useState} from 'react';

import { EncounterGrid } from './styles';

import { useHistory } from 'react-router-dom';

import Modal from '../../components/Modal';
import GenericForm from '../../components/GenericForm';
import EncounterSearchHeader from '../../components/EncounterSearchHeader';
import EncounterListItem from '../../components/EncounterListItem';

export default function EncounterList({encounters, api}) {

    const history = useHistory();
    const [selected, setSelected] = useState({});
    const [hide, setHide] = useState(true);

    const reduceCreatures = creatures => {
        return creatures.reduce((prev, cur) => {
            if (!prev.hasOwnProperty(cur.name))
                prev[cur.name] = 1
            else
                prev[cur.name] += 1
            
            return prev;
        }, {})
    }

    const selectedEncounters = selected => {
        if (Object.keys(selected).length !== 0) {
            return (
                <EncounterListItem
                    id={selected.id}
                    imgSrc={selected.src}
                    title={selected.title}
                    created_on={selected.created_on}
                    created_by={selected.created_by}
                    creatures={reduceCreatures(selected.creatures)}
                    onEdit={() => history.push(`/create/${selected.id}`)}
                    onRun={() => console.log('run encounter')}
                    onDelete={() => console.log('delete encounter')}
                />
            )
        } else
            return encounters.map((encounter) => (
                <EncounterListItem
                    id={encounter.id}
                    key={encounter.id}
                    imgSrc={encounter.src}
                    title={encounter.title}
                    created_on={encounter.created_on}
                    created_by={encounter.created_by}
                    creatures={reduceCreatures(encounter.creatures)}
                    onEdit={() => history.push(`/create/${encounter.id}`)}
                    onRun={() => console.log('run encounter')}
                    onDelete={() => console.log('delete encounter')}
                />
            ))
    }

    const createEncounter = data => {
        history.push(`/create?title=${data.title}`)
        setHide(true)
    }

    const addEncounter = e => {
        setHide(false)
        e.preventDefault()
    }

    return (
        <>
            <EncounterSearchHeader 
                encounters={encounters}
                onSelected={encounter => setSelected(encounter)}
                addEncounter={addEncounter}
            />

            <EncounterGrid>
                { selectedEncounters(selected) }
            </EncounterGrid>

            <Modal
                bgColor={'#151E3F'}
                height={'25vh'}
                color={'white'}
                onContainerClick={() => setHide(true)}
                onContentClick={e => e.stopPropagation()}
                hidden={hide}
            >
                <GenericForm 
                    header={'Enter a title'}
                    color='white'
                    submitText='Create'
                    submitAction={createEncounter}
                    fields={[
                        {
                            name: 'Title',
                            value: '',
                            required: true
                        }
                    ]}
                />
            </Modal>
        </>
    )
}
