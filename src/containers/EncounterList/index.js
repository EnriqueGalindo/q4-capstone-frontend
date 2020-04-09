import React, {useState} from 'react';

import { EncounterGrid } from './styles';

import EncounterSearchHeader from '../../components/EncounterSearchHeader';
import EncounterListItem from '../../components/EncounterListItem';

export default function EncounterList({api, encounters}) {

    const selectedEncounters = selected => {
        if (Object.keys(selected).length !== 0) {
            return (
                <EncounterListItem
                    imgSrc={selected.src}
                    title={selected.title}
                    created_on={selected.created_on}
                    created_by={selected.created_by}
                    creatures={selected.creatures}
                    onEdit={() => console.log('edit encounter')}
                    onRun={() => console.log('run encounter')}
                    onDelete={() => console.log('delete encounter')}
                />
            )
        } else
            return encounters.map((encounter, index) => (
                <EncounterListItem
                    key={index}
                    imgSrc={encounter.src}
                    title={encounter.title}
                    created_on={encounter.created_on}
                    created_by={encounter.created_by}
                    creatures={encounter.creatures}
                    onEdit={() => console.log('edit Encounter')}
                    onRun={() => console.log('run encounter')}
                    onDelete={() => console.log('delete encounter')}
                />
            ))
    }

    const addEncounter = e => {
        console.log('Add Encounter')
        e.preventDefault()
    }

    const [selected, setSelected] = useState({})

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
        </>
    )
}
