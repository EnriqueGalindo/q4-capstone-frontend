import styled from 'styled-components';

export const FlipCardContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 1em 1em 2em rgba(0,0,0,.2);
`

export const FlipCard = styled.div`
    background: transparent;
    width: 100%;
    height: 50vh;
    perspective: 1000px;

    &:hover ${FlipCardContainer} {
        transform: rotateY(180deg);
    }
`;

export const FlipCardFront = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;

`

export const ImgContainer = styled.div`
    width: 100%;
    height: inherit;
`;

export const Image = styled.img`
    width: inherit;
    height: inherit;
    object-fit: cover;
`;

export const Title = styled.div`
    position: absolute;
    width: 100%;
    height: 30%;
    padding-top: 15px;
    bottom: 0;
    background: rgba(3, 1, 41, .6);
    color: #F1F3DB;

    & > * {
        padding: 5px 0;
    }
`;

export const FlipCardBack = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: #151E3F;
    color: #F1F3DB;
    transform: rotateY(180deg);
`

export const CreatureList = styled.ul`
    list-style: none;

    & > li {
        padding: 5px 0;
        font-size: 20px;
    }
`;

export const Container = styled.div`
    position: relative;
    height: 100%;
    & > h1 {
        padding: 15px 0;
    }
`;

export const ButtonContainer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
`

export const Button = styled.button`
    width: 25%;
    margin: 10px 0;
    background: none;
    color: #F1F3DB;
    font-size: 20px;
    padding: 5px 0;
    border: 1px solid #F1F3DB;
    border-radius: 10px;
    transition: all ease-in-out .3s;

    &:hover {
        background: #F1F3DB;
        color: #151E3F;
    }
`