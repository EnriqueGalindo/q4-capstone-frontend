import React from 'react'

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
} from './styles.js'

export default function EncounterListitem(props) {
    return (
        <FlipCard>
            <FlipCardContainer>
                <FlipCardFront>
                    <ImgContainer>
                        <Image src='https://pm1.narvii.com/7009/3377f2989098b329a94348649465d5a6ac68534dr1-1000-647v2_uhq.jpg'/>
                    </ImgContainer>
                    <Title>
                        <h1>Encounter Title</h1>
                        <p>Created On: April 7th, 12:03pm</p>
                        <p>Created By: Enrique Galindo</p>
                    </Title>
                </FlipCardFront>
                <FlipCardBack>
                    <Container>
                        <h1>Creatures</h1>
                        <CreatureList>
                            <li>Goblins x8</li>
                            <li>Bearded Devil x1</li>
                            <li>Blood Haw x2</li>
                        </CreatureList>
                        <ButtonContainer>
                            <Button>
                                Edit
                            </Button>
                            <Button>
                                Run
                            </Button>
                            <Button>
                                Delete
                            </Button>
                        </ButtonContainer>
                    </Container>
                </FlipCardBack>
            </FlipCardContainer>
        </FlipCard>
    )
}
