import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.section`
	width: calc(100% - 20px);
	height: calc(100% - 40px);

	padding: 20px 10px;
`;

const Paragraph = styled.div`
	width: 100%;
	margin-bottom: 15px;
`;

const IntroContent = () => (
	<ContentContainer>
		<Paragraph>Welcome to the japanese training tool.</Paragraph>
		<Paragraph>
			With this tool you can check the japanese alphabets (hiragana and katakana), practice with them, check some
			japanese rules and vocabulary.
		</Paragraph>
	</ContentContainer>
);

export default IntroContent;
