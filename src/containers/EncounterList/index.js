import React from 'react';

import {
    EncounterGrid
} from './styles';

import EncounterSearchHeader from '../../components/EncounterSearchHeader';
import EncounterListItem from '../../components/EncounterListItem';

export default function EncounterList({api, encounters}) {
    return (
        <>
            <EncounterSearchHeader />
            <EncounterGrid>
                    {
                        encounters.map((encounter, index) => (
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
            </EncounterGrid>
        </>
    )
}
