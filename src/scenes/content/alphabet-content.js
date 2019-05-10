import React from 'react';
import axios from 'axios';

import MainContainer from '../components/main-container';
import TitleContainer from '../components/title-container';
import Cell from '../components/cell';
import ListContainer from '../components/list-container';
import ListItem from '../components/list-item';
import ListItemHidden from '../components/list-item-hidden';
import SearchCharacter from '../components/search-character';

const path = 'http://localhost:3001/characters';

class AlphabetContent extends React.Component {
	state = {
		characters: [],
		filterAll: true,
	};
	signal = axios.CancelToken.source();

	componentDidMount() {
		this.loadJsonData(path);
	}

	loadJsonData = async path => {
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
	};

	getItems = () => {
		if (!this.state.characters.length) {
			return <div />;
		}

		return this.state.characters.map(char => {
			if (char.visibility === false) {
				return <ListItemHidden key={char.id} />;
			}

			return (
				<ListItem key={char.id}>
					<Cell>{char.romaji}</Cell>
					<Cell>{char.hiragana}</Cell>
					<Cell>{char.katakana}</Cell>
				</ListItem>
			);
		});
	};

	handleKeyPress = e => {
		const searchValue = e.target.value;
		const searchValues = searchValue.split('');
		let newCharactersValues;

		if (!searchValues.length) {
			newCharactersValues = this.state.characters.map(char => {
				return {
					...char,
					visibility: true,
				};
			});
		} else if (this.state.filterAll) {
			newCharactersValues = this.state.characters.map(char => {
				let visibility = false;

				searchValues.forEach(value => {
					if (char.romaji.includes(value)) {
						visibility = true;
					}

					if (char.hiragana === value) {
						visibility = true;
					}

					if (char.katakana === value) {
						visibility = true;
					}
				});

				return {
					...char,
					visibility,
				};
			});
		} else if (!this.state.filterAll) {
			newCharactersValues = this.state.characters.map(char => {
				let visibility = false;

				if (char.romaji.includes(searchValue)) {
					visibility = true;
				}

				if (char.hiragana === searchValue) {
					visibility = true;
				}

				if (char.katakana === searchValue) {
					visibility = true;
				}

				return {
					...char,
					visibility,
				};
			});
		}

		this.setState({ characters: newCharactersValues });
	};

	handleCheckboxClick = () => {
		this.setState({ filterAll: !this.state.filterAll });
	};

	render() {
		const items = this.getItems();

		return (
			<MainContainer>
				<SearchCharacter
					handleKeyPress={this.handleKeyPress}
					showFilterButton={true}
					handleCheckboxClick={this.handleCheckboxClick}
				/>
				<TitleContainer>
					<Cell>Romaji</Cell>
					<Cell>Hiragana</Cell>
					<Cell>Katakana</Cell>
				</TitleContainer>
				<ListContainer>{items}</ListContainer>
			</MainContainer>
		);
	}
}

export default AlphabetContent;
