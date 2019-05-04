import React from 'react';
import styled from 'styled-components';

const Element = styled.li`
    display: none;
`;

const ListItemHidden = props => <Element>{props.children}</Element>;

export default ListItemHidden;