import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
	width: 100%;
	height: 100%;
`;

const MainContainer = props => <Element>{props.children}</Element>;

export default MainContainer;
