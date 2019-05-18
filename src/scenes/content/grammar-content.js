import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const path = 'http://localhost:3001/grammar';

const MainContent = styled.div`
	width: 100%;
	height: 100%;
`;

class GrammarContent extends React.Component {
	state = {
		grammar: {},
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
			this.setState({ grammar: response.data, isLoading: true });
		} catch (err) {
			if (axios.isCancel(err)) {
				console.log('Error: ', err.message);
			} else {
				this.setState({ isLoading: false });
			}
		}
	};

	getContent = grammar => {
		if (!Object.keys(grammar).length) {
			return <div />;
		}

		return <div>content</div>;
	};

	render() {
		console.log(this.state);
		const { grammar } = this.state;
		const content = this.getContent(grammar);

		return <MainContent>{content}</MainContent>;
	}
}

export default GrammarContent;
