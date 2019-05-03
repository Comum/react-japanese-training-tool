import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
`;

const TitleContainer = props => <Element>{props.children}</Element>;

export default TitleContainer;