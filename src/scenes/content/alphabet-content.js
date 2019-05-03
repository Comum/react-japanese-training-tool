import React from 'react';
import styled from 'styled-components';

import TitleContainer from '../components/title-container';
import Cell from '../components/cell';
import ListContainer from '../components/list-container';

const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: auto;
`;

const AlphabetContent = () => <MainContainer>
    <TitleContainer>
        <Cell>Romaji</Cell>
        <Cell>Hiragana</Cell>
        <Cell>Katakana</Cell>
    </TitleContainer>
    <ListContainer>
        items go here
    </ListContainer>
</MainContainer>

export default AlphabetContent;