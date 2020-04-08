import React from 'react'

import {
    Header,
    LogoContainer,
    SearchContainer,
    SearchForm,
    SearchInput,
    FilterSortToolbar,
} from './styles.js'

export default function EncounterSearchHeader() {
    return (
        <Header>
            <SearchForm>
                <LogoContainer>
                    <img alt='' src='https://www.google.com/logos/doodles/2020/thank-you-doctors-nurses-and-medical-workers-6753651837108754.3-s.png' />
                </LogoContainer>
                <SearchContainer>
                    <SearchInput type='text' />
                    <i className='fas fa-search'/>
                </SearchContainer>
            </SearchForm>
            <FilterSortToolbar>
                Sort Options go here
            </FilterSortToolbar>
        </Header>
    )
}
