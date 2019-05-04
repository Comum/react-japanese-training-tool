import React from 'react';
import styled from 'styled-components';

import TitleContainer from '../components/title-container';
import Cell from '../components/cell';
import ListContainer from '../components/list-container';
import ListItem from '../components/list-item';

const MainContainer = styled.div`
    width: 100%;
    height: 100%;

    overflow-y: auto;
`;

class AlphabetContent extends React.Component {
    state = {
        characters: [
            { id: 1, romaji: "a", hiragana: "あ", katakana: "ア" }
        ]
    }

    getItems = () => {
        if (!this.state.characters.length) {
            return (<div />);
        }

        return this.state.characters.map(char => (
            <ListItem key={char.id}>
                <Cell>{char.romaji}</Cell>
                <Cell>{char.hiragana}</Cell>
                <Cell>{char.katakana}</Cell>
            </ListItem>
        ));
    }

    render() {
        const items = this.getItems();

        return (
            <MainContainer>
                <TitleContainer>
                    <Cell>Romaji</Cell>
                    <Cell>Hiragana</Cell>
                    <Cell>Katakana</Cell>
                </TitleContainer>
                <ListContainer>
                    {items}
                </ListContainer>
            </MainContainer>
        )
    }
}

export default AlphabetContent;