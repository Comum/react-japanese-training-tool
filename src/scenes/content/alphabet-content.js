import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: auto;
`;

const TitleContainer = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
`;

const Cell = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const AlphabetContent = () => <MainContainer>
    <TitleContainer>
        <Cell>Romaji</Cell>
        <Cell>Hiragana</Cell>
        <Cell>Katakana</Cell>
    </TitleContainer>
</MainContainer>

export default AlphabetContent;