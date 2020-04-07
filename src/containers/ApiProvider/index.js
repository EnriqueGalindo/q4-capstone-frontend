import React from 'react'

export default function ApiProvider({children}) {

    const BASE_URL = 'localhost:800/api'

    return children.map( (child, index) => {
        return React.cloneElement(child, {
            api : {}
        })
    })
}
