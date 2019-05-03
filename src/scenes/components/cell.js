import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Cell = props => <Element>{props.children}</Element>;

export default Cell;