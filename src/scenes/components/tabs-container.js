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

const getTabsList = (tabs, cb) => {
	if (!tabs.length) {
		return <div />;
	}

	return tabs.map(tab => <Tab name={tab.name} selected={tab.selected} id={tab.id} callback={cb} key={tab.id} />);
};

const TabsContainer = props => {
	const { handleTabClick, tabs } = props;
	const tabsList = getTabsList(tabs, handleTabClick);

	return <TabsWrapper>{tabsList}</TabsWrapper>;
};

export default TabsContainer;
