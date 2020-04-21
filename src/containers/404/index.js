import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import {
    Container
} from './styles';

import confusion from '../../assets/confusion.png';

export default function NotFound() {

    const location = useLocation();
    const [what, setWhat] = useState(null)

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        setWhat(params.get('what'))
        // eslint-disable-next-line
    }, [])

    return (
        <Container>
            <div>
                <header>
                    <h1>{what} not found</h1>
                </header>
                <div>
                    <img alt='' src={confusion} />
                </div>
                <div>
                    <Link to="/">
                        Go back to Encounters
                    </Link>
                </div>
            </div>
        </Container>
    )
}
