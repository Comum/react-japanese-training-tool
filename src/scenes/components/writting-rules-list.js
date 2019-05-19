import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%;

	margin-bottom: 10px;
`;

const WrittingRulesList = props => {
	console.log(props);

	return <Container>{props.name}</Container>;
};

export default WrittingRulesList;
