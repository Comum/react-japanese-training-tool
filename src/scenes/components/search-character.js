import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
	width: 100%;
	height: 50px;

	display: flex;
`;

const Label = styled.div`
	width: 75px;
	height: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const InputContainer = styled.div`
	height: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	flex-grow: 1;
`;

const FilterButtonContainer = styled.div`
	height: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	flex-grow: 3;
`;

const FilterLabel = styled.div`
	height: 100%;

	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const FilterCheckoutContainer = styled.div`
	height: 100%;

	padding-left: 10px;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	flex-grow: 1;
`;

const SearchCharacter = props => (
	<Element>
		<Label>Search:</Label>
		<InputContainer>
			<input type="text" onChange={props.handleKeyPress} />
		</InputContainer>
		{props.showFilterButton && (
			<FilterButtonContainer>
				<FilterLabel>Search full chars</FilterLabel>
				<FilterCheckoutContainer>
					<input type="checkbox" onChange={props.handleCheckboxClick} />
				</FilterCheckoutContainer>
			</FilterButtonContainer>
		)}
	</Element>
);

export default SearchCharacter;
