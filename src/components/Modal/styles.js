import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${props => props.bgColor};
`;

export const Content = styled.div`
    position: absolute;
    background: ${props => props.bgColor};
    width: ${props => props.width};
    height: ${props => props.height};
    color: ${props => props.color};
    top: 50%;
    left: 50%;
    margin-left: calc(-${props => props.width}/2);
    margin-top: calc(-${props => props.height}/2);
`;