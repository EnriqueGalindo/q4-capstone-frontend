import styled from 'styled-components';

export const SearchContainer = styled.div`
    position: relative;
`

export const SearchBar = styled.div`
    position: absolute;
    top: 0;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    min-height: 50px;
    width: 638px;
    padding: 4px 4px 0 25px;
    transition: all ease-in-out .3s;
    z-index: 100;
    background: white;

    &:hover {
        box-shadow: 3px 3px 5px rgba(0,0,0,.2);
    }

    & > i {
        height: 34px;
        line-height: 34px;
        color: blue;
    }
`;

export const SearchInput = styled.input`
    line-height: 34px;
    height: 34px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    outline: none;
    width: 90%;
    margin-right: 15px;
    margin-top: 2px;
`;

export const ResultsContainer = styled.div`
    width: 90%;
`

export const Result = styled.div`
    font-size: 20px;
    text-align: left;
    padding: 10px 4px 10px 15px;
    cursor: pointer;

    &:hover {
        background: #ddd;
    }
`