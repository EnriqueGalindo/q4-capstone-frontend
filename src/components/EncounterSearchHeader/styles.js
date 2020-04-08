import styled from 'styled-components';

export const Header = styled.header`
    min-width: 1030px;
    padding: 25px 0 5px 0;
    border-bottom: 1px solid #9aa1a1;
    z-index: 2;
`

export const SearchForm = styled.form`
    display: flex;
`

export const LogoContainer = styled.div`
    padding: 4px 28px 0 30px;
`

export const SearchContainer = styled.div`
    display: flex;
    border: 1px solid #dfe1e5;
    border-radius: 24px;
    height: 50px;
    width: 638px;
    padding: 4px 4px 0 25px;
    transition: all ease-in-out .3s;

    &:hover {
        box-shadow: 3px 3px 5px rgba(0,0,0,.2);
    }

    & > i {
        height: 34px;
        line-height: 34px;
        color: blue;
    }
`

export const SearchInput = styled.input`
    line-height: 34px;
    height: 34px;
    background-color: transparent;
    border: none;
    font-size: 20px;
    outline: none;
    width: 95%;
`

export const FilterSortToolbar = styled.div`
    width: 638px;
    margin-left: 178px;
    padding-top: 10px;
    padding-bottom: 15px;
    color: #151E3F;
`