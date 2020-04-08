import React, { useState, useEffect } from 'react'
import { testData } from './testData';

export default function ApiProvider({children}) {

    const BASE_URL = 'localhost:800/api'

    const [encounters, setEncounters] = useState([])

    const grabEncounters = (author) => {
        fetch(`${BASE_URL}/encounters/${author}`)
        .then(res => res.json())
        .then(result => console.log(result))
    }

    useEffect(() => {
        setEncounters(testData)
    }, [])

    return (
        React.Children.map(children, child => 
            React.cloneElement(child, {
                encounters,
                api: {
                    grabEncounters
                }
            })
        )
    )
}
