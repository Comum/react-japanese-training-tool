import React from 'react';
import styled from 'styled-components';

import MainModal from './components/main-modal';

class HomeContainer extends React.Component {
	state = {
		tabs: [
			{ id: 1, name: 'Intro', selected: true },
			{ id: 2, name: 'Hiragana', selected: false },
			{ id: 3, name: 'Katakana', selected: false },
			{ id: 4, name: 'Alphabet practice', selected: false },
			{ id: 4, name: 'Rules', selected: false },
		],
	};

	render() {
		return (
			<MainModal>
				<div>Home container</div>
			</MainModal>
		);
	}
}

export default HomeContainer;
