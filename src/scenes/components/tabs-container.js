import React from 'react';

const getTabsList = tabs => {
	if (!tabs.length) {
		return <div />;
	}

	return tabs.map(tab => <li key={tab.id}>{tab.name}</li>);
};

const TabsContainer = props => {
	const tabsList = getTabsList(props.tabs);

	return <ul>{tabsList}</ul>;
};

export default TabsContainer;
