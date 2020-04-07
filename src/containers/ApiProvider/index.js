import React from 'react'

export default function ApiProvider({children}) {

    const BASE_URL = ''

    return children.map( (child, index) => {
        return React.cloneElement(child, {
            api : {}
        })
    })
}
