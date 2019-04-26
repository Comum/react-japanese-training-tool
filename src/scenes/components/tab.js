import React from 'react';
import styled from 'styled-components';

const Tab = props => {
	const { name, selected } = props;
	let backgroundColor = '#C8C8C8';
	let backgroundColorHover = '#DCDCDC';

	if (selected) {
		backgroundColor = '#FFFFFF';
		backgroundColorHover = '#FFFFFF';
	}

	const TabWrapper = styled.li`
		height: 100%;
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: 0;

		display: flex;
		justify-content: center;
		align-items: center;

		user-select: none;
		cursor: pointer;

		background-color: ${backgroundColor};

		&:hover {
			background-color: ${backgroundColorHover};
		}
	`;

	return <TabWrapper>{name}</TabWrapper>;
};

export default Tab;
