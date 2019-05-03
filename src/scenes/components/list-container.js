import React from 'react';
import styled from 'styled-components';

const Element = styled.ul`
    width: 100%;

    margin: 0;
    padding: 0;

    list-style-type: none;
`;

const ListContainer = props => <Element>{props.children}</Element>;

export default ListContainer;