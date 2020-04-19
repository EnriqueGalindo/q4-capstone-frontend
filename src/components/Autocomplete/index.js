import React, {useState, useEffect} from 'react'
import { 
    SearchInput,
    SearchBar,
    ResultsContainer,
    SearchContainer,
    Result
} from './styles'

export default function Autocomplete({data, onSelected}) {
    const [value, setvalue] = useState('');
    const [results, setResults] = useState([]);
    const [focused, setFocused] = useState(false)

    useEffect(() => {
        if (value && focused)
            setResults(data.filter(encounter => {
                return encounter.title.toLowerCase()
                    .indexOf(value.toLowerCase()) > -1
            }))
        else
            setResults([])
    }, [value, data, focused])

    useEffect(() => {
        let titles = data.map(encounter => encounter.title)
        if (titles.indexOf(value) === -1)
            onSelected({})
    // eslint-disable-next-line
    }, [value])

    const onSelect = encounter => {
        setvalue(encounter.title)
        onSelected(encounter)
    }

    return (
        <SearchContainer
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
        >
            <SearchBar>
                <SearchInput 
                    value={value || ''}
                    onChange={e => setvalue(e.target.value)}
                />
                <i className='fas fa-search' />
                <ResultsContainer>
                    {results.map( (encounter, i) => (
                        <Result key={i} onMouseDown={() => onSelect(encounter)}>
                            {encounter.title}
                        </Result>
                    ))}
                </ResultsContainer>
            </SearchBar>
        </SearchContainer>
    )
}
