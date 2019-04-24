import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import './global-styles';
import HomeContainer from '../scenes/home-container';

const AppContainer = styled.div`
	width: 100%;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-image: url('assets/background.jpg');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

const App = () => (
	<AppContainer>
		<BrowserRouter>
			<AppContainer>
				<Route path="/" exact component={HomeContainer} />
			</AppContainer>
		</BrowserRouter>
	</AppContainer>
);

export default App;
