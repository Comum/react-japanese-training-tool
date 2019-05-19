import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
	width: 100%;
	height: 40px;

	font-size: 18px;
	font-weight: bold;

	display: flex;
	align-items: center;
`;

const Title = props => <Element>{props.name}</Element>;

export default Title;
