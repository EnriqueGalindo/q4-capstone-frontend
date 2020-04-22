import React from 'react'
import { Link } from 'react-router-dom';

import Meme500 from '../../assets/500error.jpg';

import {
    Container
} from './styles';

export default function index() {
    return (
        <Container bgimage={Meme500}>
            <header>
                <Link to="/" style={{color: 'white'}}>
                    <h1>Go back to Encounters</h1>
                </Link>
            </header>
        </Container>
    )
}
