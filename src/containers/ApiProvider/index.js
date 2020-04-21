import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import imageList from './images';

export default function ApiProvider({children}) {

    const history = useHistory()

    const BASE_URL = 'http://127.0.0.1:8000/api'

    const [encounters, setEncounters] = useState([])

    const getEncounter = (id, callback) => {
        try {
            fetch(`${BASE_URL}/encounters/${id}`)
            .then(res => {
                if (res.status === 404)
                    history.push('/404?what=Encounter')
                else if (res.status === 500)
                    history.push('/505')

                return res.json()
            })
            .then(callback)
        } catch (e) {
            console.log('error', e)
        }
    }

    const getAllEncounters = () => {
        try {
            fetch(`${BASE_URL}/encounters`)
            .then(res => res.json())
            .then(e => {
                setEncounters(e.map((encounter, index) => {
                    return {
                        src: imageList[index % imageList.length],
                        ...encounter
                    }
                }))
            })
        } catch (e) {
            console.log(e)
        }
    }

    const createEncounter = ({title, creatures}, callback=null) => {
        try {
            fetch(`${BASE_URL}/encounters/`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    creatures
                })
            })
            .then(res => res.json())
            .then(encounter => {
                setEncounters([
                    ...encounters,
                    {
                        src: imageList[encounters.length % imageList.length],
                        ...encounter
                    }
                ])
            })
            .then(callback)
        } catch (e) {
            console.log(e)
        }
    }

    const updateEncounter = ({id, title, creatures}, callback=null) => {
        try {
            fetch(`${BASE_URL}/encounters/${id}/`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    title,
                    creatures
                })
            })
            .then(res => {
                if (res.status === 404)
                    history.push('/404?what=Encounter')
                else if (res.status === 500)
                    history.push('/505')
                    
                return res.json()
            })
            .then(encounter => {
                let encounterIndex = encounters.findIndex(e => e.id === encounter.id);

                setEncounters([
                    ...encounters.slice(0, encounterIndex),
                    {
                        src: encounters[encounterIndex].src,
                        ...encounter
                    },
                    ...encounters.slice(encounterIndex + 1, encounters.length),
                ])
            })
            .then(callback)
        } catch (e) {
            console.log(e)
        }
    }

    const deleteEncounter = (id) => {
        try {
            fetch(`${BASE_URL}/encounters/${id}`, {
                method: 'DELETE',
            })
            .then(res => {
                if (res.status === 404)
                    history.push('/404?what=Encounter')
                else if (res.status === 500)
                    history.push('/505')
                    
                return res.json()
            })
            .then(({deleted}) => {
                // not using double equals here is intentional
                // deleted is a string and encounter.id is an int
                // this forces type coercion automatically
                // eslint-disable-next-line
                setEncounters(encounters.filter(encounter => encounter.id != deleted))
            })
        } catch (e) {
            console.log(e)
        }
    }

    const updateCreature = (id, creature, callback=null) => {
        console.log(id)
        try {
            fetch(`${BASE_URL}/creatures/${id}/`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(creature)
            })
            .then(res => {
                if (res.status === 404)
                    history.push('/404?what=Creature')
                else if (res.status === 500)
                    history.push('/505')
                    
                return res.json()
            })
            .then(console.log)
        } catch (e) {
            console.log('error', e)
        }
    }

    useEffect(() => {
        getAllEncounters()
    }, [])

    return (
        React.Children.map(children, child => 
            React.cloneElement(child, {
                encounters,
                imageList,
                api: {
                    getEncounter,
                    getAllEncounters,
                    createEncounter,
                    updateEncounter,
                    deleteEncounter,
                    updateCreature
                }
            })
        )
    )
}
