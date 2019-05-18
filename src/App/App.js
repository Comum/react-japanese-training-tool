import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import './global-styles';
import HomeContainer from '../scenes/home-container';

const MainContainer = styled.div`
	width: 100%;
	height: 100%;
`;

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

const ImageContainer = styled.div`
	display: none;
`;

const App = () => (
	<MainContainer>
		<AppContainer>
			<BrowserRouter>
				<AppContainer>
					<Route path="/" exact component={HomeContainer} />
				</AppContainer>
			</BrowserRouter>
		</AppContainer>
		{/* The next element is to prefetch the background image */}
		<ImageContainer>
			<img src="/assets/background.jpg" alt="background" />
		</ImageContainer>
	</MainContainer>
);

export default App;
