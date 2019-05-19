import React from 'react';
import styled from 'styled-components';

import Title from './title';
import Rule from './rule';

const Container = styled.div`
	width: 100%;
	height: 100%;
`;

const RulesWrapper = styled.ul`
	width: 100%;
	height: 100%;

	margin: 0;
	padding: 0;

	list-style-type: none;
`;

const getRulesList = rules => {
	if (!rules.length) {
		return <div />;
	}

	return rules.map(rule => <Rule description={rule.description} />);
};

const WrittingRulesList = props => {
	const rules = getRulesList(props.rules);

	return (
		<Container>
			<Title name={props.name} />
			<RulesWrapper>{rules}</RulesWrapper>
		</Container>
	);
};

export default WrittingRulesList;
