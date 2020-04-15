import React, { useState } from 'react'

import {
    Container,
    Content,
} from './styles';

export default function Modal(props) {

    return props.hidden ? null : (
        <Container 
            bgColor={props.containerColor || 'rgba(0, 0, 0, .6)'}
            onClick={props.onContainerClick || null}
        >
            <Content
                bgColor={props.bgColor || 'white'}
                color={props.color || 'black'}
                width={props.width || '30vw'}
                height={props.height || '50vh'}
                onClick={props.onContentClick || null}
            >
                {props.children}
            </Content>
        </Container>
    )
}
