import React, { useState, useEffect } from 'react'
import { testData } from './testData';

export default function ApiProvider({children}) {

    const BASE_URL = 'http://127.0.0.1:8000/api'

    const [encounters, setEncounters] = useState([])

    const getEncounter = (id, callback) => {
        try{
            fetch(`${BASE_URL}/encounters/${id}`)
            .then(res => res.json())
            .then(callback)
        }catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setEncounters(testData)
    }, [])

    return (
        React.Children.map(children, child => 
            React.cloneElement(child, {
                encounters,
                api: {
                    getEncounter
                }
            })
        )
    )
}
