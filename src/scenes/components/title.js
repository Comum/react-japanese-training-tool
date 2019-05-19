import React from 'react';
import styled from 'styled-components';

const Title = props => {
	const fontWeight = props.bold ? 'bold' : 'initial';
	const Element = styled.div`
		width: 100%;
		height: 40px;

		font-size: 18px;
		font-weight: ${fontWeight};

		display: flex;
		align-items: center;
	`;

	return <Element>{props.name}</Element>;
};

export default Title;
