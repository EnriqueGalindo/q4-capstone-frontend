import React from 'react';

import {
    Table,
    TableRow,
    TableHeader,
    Cell
} from './styles';

export default function EncounterCreatorTable({encounter}) {
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
                <TableRow>
                    <Cell>
                        Goblin
                    </Cell>
                    <Cell>
                        100
                    </Cell>
                    <Cell>
                        17
                    </Cell>
                    <Cell>
                        8
                    </Cell>
                </TableRow>
            </tbody>
        </Table>
    )
}
