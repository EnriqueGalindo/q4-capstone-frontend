import React from 'react'

import Autocomplete from '../Autocomplete';

import logo from '../../assets/dragonlogopng.png'

import {
    Header,
    LogoContainer,
    SearchForm,
    AddEncounter,
    ButtonContainer
} from './styles.js'

export default function EncounterSearchHeader({encounters, onSelected, addEncounter}) {
    return (      
        <Header>
            <SearchForm>
                <LogoContainer>
                    <img alt='' src={logo} />
                </LogoContainer>
                <Autocomplete 
                    data={encounters}
                    onSelected={onSelected}
                />
                <ButtonContainer>
                    <AddEncounter onClick={addEncounter}>
                        <i className='fas fa-plus' />
                    </AddEncounter>
                </ButtonContainer>
            </SearchForm>
        </Header>
    )
}
