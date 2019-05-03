import React from 'react';
import styled from 'styled-components';

import MainModal from './components/main-modal';
import TabsContainer from './components/tabs-container';
import IntroContent from './content/intro-content';
import DefaultContent from './content/default-content';

const ContentContainer = styled.section`
	width: 100%;
	height: calc(100% - 50px);
`;
class HomeContainer extends React.Component {
	state = {
		tabs: [
			{ id: 1, name: 'Intro', selected: true, contentName: 'intro' },
			{ id: 2, name: 'Alphabets', selected: false, contentName: 'alphabet' },
			{ id: 4, name: 'Alphabet practice', selected: false, contentName: 'practice' },
			{ id: 5, name: 'Vocabulary', selected: false, contentName: 'vocabulary' },
			{ id: 6, name: 'Rules', selected: false, contentName: 'rules' },
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
