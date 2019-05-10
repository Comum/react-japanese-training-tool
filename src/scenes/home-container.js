import React from 'react';
import styled from 'styled-components';

import MainModal from './components/main-modal';
import TabsContainer from './components/tabs-container';
import IntroContent from './content/intro-content';
import DefaultContent from './content/default-content';
import AlphabetContent from './content/alphabet-content';
import VocabularyContent from './content/vocabulary-content';

const ContentContainer = styled.section`
	width: 100%;
	height: calc(100% - 50px);
`;
class HomeContainer extends React.Component {
	state = {
		tabs: [
			{ id: 1, name: 'Intro', selected: true, contentName: 'intro' },
			{ id: 2, name: 'Alphabets', selected: false, contentName: 'alphabet' },
			{ id: 3, name: 'Vocabulary', selected: false, contentName: 'vocabulary' },
			{ id: 4, name: 'Rules', selected: false, contentName: 'rules' },
			{ id: 5, name: 'Alphabet practice', selected: false, contentName: 'practice' },
		],
		content: 'intro',
	};

	handleTabClick = id => {
		let newTabsState = [];
		let newContentState = this.state.content;

		this.state.tabs.forEach(state => {
			let newSelectedState = false;

			if (state.id === id) {
				newSelectedState = true;
				newContentState = state.contentName;
			}

			newTabsState.push({
				...state,
				selected: newSelectedState,
			});
		});

		this.setState({ ...this.state, tabs: newTabsState, content: newContentState });
	};

	getContentToShow(content) {
		switch (content) {
			case 'intro':
				return <IntroContent />;
			case 'alphabet':
				return <AlphabetContent />;
			case 'vocabulary':
				return <VocabularyContent />;
			default:
				return <DefaultContent />;
		}
	}

	render = () => {
		const { content } = this.state;
		const contentElement = this.getContentToShow(content);

		return (
			<MainModal>
				<TabsContainer tabs={this.state.tabs} handleTabClick={this.handleTabClick} />
				<ContentContainer>{contentElement}</ContentContainer>
			</MainModal>
		);
	};
}

export default HomeContainer;
