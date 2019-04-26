import React from 'react';
import styled from 'styled-components';

const ContentContainer = styled.div`
	width: 700px;
	height: 850px;

	background-color: white;
	border: 1px solid black;
`;

const MainModal = props => <ContentContainer>{props.children}</ContentContainer>;

export default MainModal;
