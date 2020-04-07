import React from 'react'

export default function ApiProvider({children}) {

    const BASE_URL = 'localhost:800/api'

    const grabEncounters = (author) => {
        fetch(`${BASE_URL}/encounters/${author}`)
        .then(res => res.json())
        .then(result => console.log(result))
    }

    return (
        React.Children.map(children, child => 
            React.cloneElement(child, {
                api: {
                    grabEncounters
                }
            })
        )
    )
}
