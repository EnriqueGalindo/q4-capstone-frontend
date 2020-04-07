import React from 'react'

import EncounterListItem from '../../components/EncounterListItem'

// We want to filter by author, and sort by date time. 
// If we have time try and implement search based on title
// Check your mtgproxymaker project for autocomplete search bar
export default function EncounterList() {
    return (
        <div>
            <EncounterListItem
                imgSrc='https://pm1.narvii.com/7009/3377f2989098b329a94348649465d5a6ac68534dr1-1000-647v2_uhq.jpg'
                title='EncounterTitle'
                created_on="April 7th, 12:03pm"
                created_by='Enrique Galindo'
                creatures={{
                    goblin: 8,
                    Bearded_Devil: 1,
                    Blood_hawk: 2
                }}
                onEdit={() => console.log('edit encounter')}
                onRun={() => console.log('run encounter')}
                onDelete={() => console.log('delete encounter')}
            />
        </div>
    )
}
