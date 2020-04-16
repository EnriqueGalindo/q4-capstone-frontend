import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const FormHeader = styled.header`
    margin: 15px 0;
`;

export const FormControl = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding: 25px 30px;
    margin: 5px 0;
    color: ${props => props.color}
`;

export const InputLabel = styled.label`
    font-size: 25px;
`;

export const TextInput = styled.input`
    border: none;
    font-size: 25px;
    background: transparent;
    color: ${props => props.color};
    border-bottom: 1px solid ${props => props.color};
`;

export const Button = styled.button`
    width: 100%;
    padding: 15px 0;
    background: transparent;
    border: 1px solid white;
    color: white;

    &:hover {
        background: white;
        color: black;
    }
`;