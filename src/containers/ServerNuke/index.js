import React, { useEffect } from 'react'

export default function ServerNuke({api}) {

    useEffect(() => {
        api.get500Error()
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            You should be redirected soon, just sit tight
        </div>
    )
}
