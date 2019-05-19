import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
	width: calc(100% - 15px);
	height: 40px;

	padding-left: 15px;

	font-size: 18px;
	font-weight: bold;

	display: flex;
	align-items: center;
`;

const Title = props => <Element>{props.name}</Element>;

export default Title;
