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
                            {creature.Name}
                        </Cell>
                        <Cell>
                            {creature.HP}
                        </Cell>
                        <Cell>
                            {creature.AC}
                        </Cell>
                        <Cell>
                            {creature.Quantity}
                        </Cell>
                    </TableRow>
                ))}
            </tbody>
        </Table>
    )
}
