import React from 'react';
import EmptyRow from './EmptyRow';

const Gameboard = () => {
    const rows = new Array(6);

    return (
        <div className="gameboard">
            <EmptyRow />
            <EmptyRow />
            <EmptyRow />
            <EmptyRow />
            <EmptyRow />
            <EmptyRow />
        </div>
    );
};

export default Gameboard;