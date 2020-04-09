import React from 'react'

import Autocomplete from '../Autocomplete';

import {
    Header,
    LogoContainer,
    SearchForm,
} from './styles.js'

export default function EncounterSearchHeader({encounters, onSelected}) {
    return (
        <Header>
            <SearchForm>
                <LogoContainer>
                    <img alt='' src='https://www.google.com/logos/doodles/2020/thank-you-doctors-nurses-and-medical-workers-6753651837108754.3-s.png' />
                </LogoContainer>
                <Autocomplete 
                    encounters={encounters}
                    onSelected={onSelected}
                />
            </SearchForm>
        </Header>
    )
}
