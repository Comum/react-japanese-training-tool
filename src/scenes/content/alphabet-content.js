import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import TitleContainer from '../components/title-container';
import Cell from '../components/cell';
import ListContainer from '../components/list-container';
import ListItem from '../components/list-item';

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
`;

const path = 'http://localhost:3001/characters';

class AlphabetContent extends React.Component {
    state = {
        characters: []
    }
    signal = axios.CancelToken.source()

    componentDidMount() {
        this.loadJsonData(path);
    }
    
    loadJsonData = async (path) => {
        try {
            this.setState({ isLoading: true });
            const response = await axios.get(path, {
                cancelToken: this.signal.token,
            });
            this.setState({ characters: response.data, isLoading: true });
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log('Error: ', err.message);
            } else {
                this.setState({ isLoading: false });
            }
        }
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