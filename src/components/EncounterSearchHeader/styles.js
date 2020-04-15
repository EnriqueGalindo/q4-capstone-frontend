import styled from 'styled-components';

export const Header = styled.header`
    min-width: 1030px;
    padding: 25px 0 15px 0;
    border-bottom: 1px solid #9aa1a1;
`;

export const SearchForm = styled.form`
    display: flex;
`;

export const LogoContainer = styled.div`
    padding: 4px 28px 0 30px;

    & > img {
        width: 100px;
        height: 80px;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: right;
    padding-right: 20px;
    width: 100%;
`

export const AddEncounter = styled.button`
    background-color: #151E3F;
    border: none;
    height: 50px;
    width: 50px;
    color: white;
    font-size: 30px;
    cursor: pointer;
`;