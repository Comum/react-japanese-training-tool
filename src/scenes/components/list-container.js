import React from 'react';
import styled from 'styled-components';

const Element = styled.ul`
    width: 100%;
    height: calc(100% - 50px);

    margin: 0;
    padding: 0;

    overflow-y: auto;

    list-style-type: none;
`;

const ListContainer = props => <Element>{props.children}</Element>;

export default ListContainer;