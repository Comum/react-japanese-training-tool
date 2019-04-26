import React from 'react';

import MainModal from './components/main-modal';
import TabsContainer from './components/tabs-container';

class HomeContainer extends React.Component {
	state = {
		tabs: [
			{ id: 1, name: 'Intro', selected: true },
			{ id: 2, name: 'Hiragana', selected: false },
			{ id: 3, name: 'Katakana', selected: false },
			{ id: 4, name: 'Alphabet practice', selected: false },
			{ id: 5, name: 'Rules', selected: false },
		],
	};

	handleTabClick = id => {
		let newTabsState = [];

		this.state.tabs.forEach(state => {
			let newSelectedState = false;

			if (state.id === id) {
				newSelectedState = true;
			}

			newTabsState.push({
				id: state.id,
				name: state.name,
				selected: newSelectedState,
			});
		});

		this.setState({ ...this.state, tabs: newTabsState });
	};

	render() {
		return (
			<MainModal>
				<TabsContainer tabs={this.state.tabs} handleTabClick={this.handleTabClick} />
			</MainModal>
		);
	}
}

export default HomeContainer;
