import React from 'react';

import {
    Table,
    TableRow,
    TableHeader,
    Cell
} from './styles';

export default function EncounterCreatorTable({creatures}) {
    return (
        <Table>
            <thead>
                <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>HP</TableHeader>
                    <TableHeader>AC</TableHeader>
                    <TableHeader>Quantity</TableHeader>
                </TableRow>
            </thead>
            
            <tbody>
                {creatures.map(creature => (
                    <TableRow>
                        <Cell>
                            {creature.name}
                        </Cell>
                        <Cell>
                            {creature.hp}
                        </Cell>
                        <Cell>
                            {creature.ac}
                        </Cell>
                        <Cell>
                            {creature.quantity}
                        </Cell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}
