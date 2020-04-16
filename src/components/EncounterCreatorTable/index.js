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
                {creatures.map((creature, index) => (
                    <TableRow key={`tr-${index}`}>
                        <Cell key={`name-${index}`}>
                            {creature.name}
                        </Cell>
                        <Cell key={`hp-${index}`}>
                            {creature.hp}
                        </Cell>
                        <Cell key={`ac-${index}`}>
                            {creature.ac}
                        </Cell>
                        <Cell key={`quantity-${index}`}>
                            {creature.quantity}
                        </Cell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}
