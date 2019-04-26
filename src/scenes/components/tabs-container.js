import React from 'react';
import styled from 'styled-components';

import Tab from './tab';

const TabsWrapper = styled.ul`
	width: 100%;
	height: 50px;

	margin: 0;
	padding: 0;
	list-style-type: none;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const getTabsList = tabs => {
	if (!tabs.length) {
		return <div />;
	}

	return tabs.map(tab => <Tab name={tab.name} selected={tab.selected} key={tab.id} />);
};

const TabsContainer = props => {
	const tabsList = getTabsList(props.tabs);

	return <TabsWrapper>{tabsList}</TabsWrapper>;
};

export default TabsContainer;
