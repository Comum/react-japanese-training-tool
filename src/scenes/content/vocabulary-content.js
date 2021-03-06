import React from 'react';
import axios from 'axios';

import MainContainer from '../components/main-container';
import SearchElement from '../components/search-element';
import TitleContainer from '../components/title-container';
import Cell from '../components/cell';
import ListContainer from '../components/list-container';
import ListItem from '../components/list-item';
import ListItemHidden from '../components/list-item-hidden';

const path = 'http://localhost:3001/words';

class VocabularyContent extends React.Component {
	state = {
		words: [],
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
			this.setState({ words: response.data, isLoading: true });
		} catch (err) {
			if (axios.isCancel(err)) {
				console.log('Error: ', err.message);
			} else {
				this.setState({ isLoading: false });
			}
		}
	};

	handleKeyPress = e => {
		const searchWord = e.target.value;
		let newWordsValues;

		if (searchWord.length) {
			newWordsValues = this.state.words.map(word => {
				let visibility = false;

				word.romaji.forEach(wordWay => {
					if (wordWay.includes(searchWord)) {
						visibility = true;
					}
				});

				return {
					...word,
					visibility,
				};
			});
		} else {
			newWordsValues = this.state.words.map(word => {
				return {
					...word,
					visibility: true,
				};
			});
		}

		this.setState({ words: newWordsValues });
	};

	getItems = () => {
		if (!this.state.words.length) {
			return <div />;
		}

		return this.state.words.map(word => {
			if (word.visibility === false) {
				return <ListItemHidden key={word.id} />;
			}

			return (
				<ListItem key={word.id}>
					<Cell>{word.writing}</Cell>
					<Cell>{word.meaning}</Cell>
				</ListItem>
			);
		});
	};
	render() {
		const items = this.getItems();

		return (
			<MainContainer>
				<SearchElement handleKeyPress={this.handleKeyPress} />
				<TitleContainer>
					<Cell>Word</Cell>
					<Cell>Meaning</Cell>
				</TitleContainer>
				<ListContainer>{items}</ListContainer>
			</MainContainer>
		);
	}
}

export default VocabularyContent;
