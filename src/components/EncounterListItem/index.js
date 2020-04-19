import React from 'react';
import {
    FlipCard,
    ImgContainer,
    Image,
    Title,
    FlipCardContainer,
    FlipCardFront,
    FlipCardBack,
    CreatureList,
    Container,
    ButtonContainer,
    Button
} from './styles.js';

export default function EncounterListitem(props) {
    const formatDate = date => {
        let dateObj = new Date(date);
        return dateObj.toDateString()
    }
    return (
        <FlipCard>
            <FlipCardContainer>
                <FlipCardFront>
                    <ImgContainer>
                        <Image src={props.imgSrc}/>
                    </ImgContainer>
                    <Title>
                        <h1>{props.title}</h1>
                        <p>Created On: {formatDate(props.created_on)}</p>
                        <p>Created By: {props.created_by}</p>
                    </Title>
                </FlipCardFront>
                <FlipCardBack>
                    <Container>
                        <h1>Creatures</h1>
                        <CreatureList>
                            {
                                Object.keys(props.creatures).map((creature, index) => {
                                    let name = creature.split('_').join(" ")
                                    return <li key={index}>{name} x{props.creatures[creature]}</li>
                                })
                            }
                        </CreatureList>
                        <ButtonContainer>
                            <Button onClick={props.onEdit}>
                                Edit
                            </Button>
                            <Button onClick={props.onRun}>
                                Run
                            </Button>
                            <Button onClick={props.onDelete}>
                                Delete
                            </Button>
                        </ButtonContainer>
                    </Container>
                </FlipCardBack>
            </FlipCardContainer>
        </FlipCard>
    )
}
