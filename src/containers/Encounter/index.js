import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';

import {
    Grid,
} from './styles';

import Header from '../../components/EncounterCreatorHeader';
import GenericForm from '../../components/GenericForm';

const statusEffects = [
    'None',
    'Blinded',
    'Charmed',
    'Deafened',
    'Fatigued',
    'Frightened',
    'Grappled',
    'Incapacitated',
    'Invisible',
    'Paralyzed',
    'Petrified',
    'Poisoned',
    'Prone',
    'Restrained',
    'Stunned'
]

const testForNumber = input => (input === '' || /^\d+$/.test(input))

export default function Encounter({api, match}) {
    const history = useHistory();
    const [encounter, setEncounter] = useState({})

    useEffect(() => {
        if (match.params.id) {
            api.getEncounter(match.params.id, data => {
                if (data.error)
                    history.push('/notfound')
                else
                    setEncounter(data)
            })
        } else {
            history.push('/notfound')
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Header 
                title={encounter.title}
                onCancel={() => console.log('cancel')}
            />
            <hr/>

            <Grid>
            {
                encounter.creatures ? encounter.creatures.map(creature => (
                    <GenericForm 
                        key={creature.id}
                        header={creature.name}
                        submitText='save'
                        submitAction={data => api.updateCreature(creature.id, data)}
                        color='black'
                        fields={[
                            {
                                name: 'Name',
                                type: 'text',
                                value: creature.name,
                                required: true
                            },
                            {
                                name: 'HP',
                                type: 'text',
                                value: creature.hp,
                                required: true,
                                test: testForNumber
                            },
                            {
                                name: 'AC',
                                type: 'text',
                                value: creature.ac,
                                required: true,
                                test: testForNumber
                            },
                            {
                                name: 'Status',
                                type: 'select',
                                value: creature.status,
                                options: statusEffects
                            },
                            {
                                name: 'Secondary_status',
                                type: 'select',
                                value: creature.secondary_status,
                                options: statusEffects
                            },
                            {
                                name: 'Tertiary_status',
                                type: 'select',
                                value: creature.tertiary_status,
                                options: statusEffects
                            },
                            {
                                name: 'Conscious',
                                type: 'checkbox',
                                value: true
                            }
                            
                        ]}
                    />
                )) : null
            }
            </Grid>
        </div>
    )
}
