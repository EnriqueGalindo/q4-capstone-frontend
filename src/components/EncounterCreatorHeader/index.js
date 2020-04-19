import React from 'react';

import { 
    Container,
    Button,
    ButtonContainer
} from './style';

export default function EncounterCreatorHeader({title, onCancel, onSave, onAdd}) {
    return (
        <Container>
            {title}
            <ButtonContainer>
                <Button onClick={onCancel}>
                    <i className="far fa-window-close"></i>
                </Button>
                <Button onClick={onSave}>
                    <i className="far fa-save"></i>
                </Button>
                <Button onClick={onAdd}>
                    <i className="fas fa-plus"></i>
                </Button>
            </ButtonContainer>
        </Container>
    )
}
