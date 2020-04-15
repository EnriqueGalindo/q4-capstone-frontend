import React, { useState } from 'react';

import Modal from '../../components/Modal';
import Table from '../../components/EncounterCreatorTable';
import Header from '../../components/EncounterCreatorHeader';
import CreatureForm from '../../components/CreatureCreationForm';

export default function EncounterCreator() {
    const [hide, setHide] = useState(true);
    const [creatures, setCreatures] = useState([])

    const hideModal = e => {
        setHide(true)
    }

    const onSave = e => {}

    const onCancel = e => {}

    const onAdd = e => {
        setHide(false)
    }

    const addCreature = creature => {
        setHide(true)
        setCreatures([...creatures, creature])
    }

    return (
        <div>
            <Header 
                title={'Title of Encounter'}
                onSave={onSave}
                onCancel={onCancel}
                onAdd={onAdd}
            />
            <Table creatures={creatures}/>
            <Modal
                containerColor={'rgba(0, 0, 0, .6)'}
                opacity={'.9'}
                bgColor={'#151E3F'}
                width={'30vw'}
                height={'50vh'}
                color={'white'}
                onContainerClick={hideModal}
                onContentClick={e => e.stopPropagation()}
                hidden={hide}
            >
                <CreatureForm 
                    color={'white'}
                    onCreate={addCreature}
                />
            </Modal>
        </div>
    )
}
