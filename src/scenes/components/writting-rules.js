import React from 'react';
import styled from 'styled-components';

import Title from './title';
import WrittingRulesList from './writting-rules-list';

const RulesContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const RulesWrapper = styled.div`
	width: 100%;
	height: 100%;

	overflow: auto;
`;

const RuleContainer = styled.div`
	width: 100%;
`;

const getRulesElement = ({ rules }) => {
	let element = [];

	rules.forEach(rule => {
		element.push(
			<RuleContainer key={rule.id}>
				<Title name={rule.name} />
				<WrittingRulesList name="hiragana" rules={rule.name.hiragana} />
				<WrittingRulesList name="katakan" rules={rule.name.katakan} />
			</RuleContainer>,
		);
	});

	return <RulesWrapper>{element}</RulesWrapper>;
};

const WrittingRules = props => {
	const rules = getRulesElement(props);

	return <RulesContainer>{rules}</RulesContainer>;
};

export default WrittingRules;