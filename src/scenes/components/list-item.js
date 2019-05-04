import React from 'react';
import styled from 'styled-components';

const Element = styled.li`
    width: 100%;

    padding: 10px 0;
    display: flex;

    &:hover {
        background-color: #DCDCDC;
    }
`;

const ListItem = props => <Element>{props.children}</Element>;

export default ListItem;