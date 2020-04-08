import React from 'react';

import {
    EncounterGrid
} from './styles';

import { testData } from './testData';

import EncounterSearchHeader from '../../components/EncounterSearchHeader';
import EncounterListItem from '../../components/EncounterListItem';

// We want to filter by author, and sort by date time. 
// If we have time try and implement search based on title
// Check your mtgproxymaker project for autocomplete search bar
export default function EncounterList() {
    return (
        <>
            <EncounterSearchHeader />
            <EncounterGrid>
                    {
                        testData.map((encounter, index) => (
                            <EncounterListItem
                                key={index}
                                imgSrc={encounter.src}
                                title={encounter.title}
                                created_on={encounter.created_on}
                                created_by={encounter.created_by}
                                creatures={encounter.creatures}
                                onEdit={() => console.log('edit Encounter')}
                                onDelete={() => console.log('delete encounter')}
                            />
                        ))
                    }
            </EncounterGrid>
        </>
    )
}
