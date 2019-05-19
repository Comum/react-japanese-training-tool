import React from 'react';
import styled from 'styled-components';

const Elment = styled.li`
	width: 100%;

	margin-bottom: 10px;
`;

const Rule = props => <Elment>{props.description}</Elment>;

export default Rule;
