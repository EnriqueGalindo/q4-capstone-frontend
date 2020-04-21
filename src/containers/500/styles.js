import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    color: white;
    padding-top: 150px;
    background-image: url(${props => props.bgimage});
    background-color: black;
    background-repeat: no-repeat;
    background-position: center; 
`;