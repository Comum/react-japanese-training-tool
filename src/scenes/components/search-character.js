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
    width: calc(100% - 75px);
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SearchCharacter = props => (
    <Element>
        <Label>Search:</Label>
        <InputContainer>
            <input type="text" onChange={props.handleKeyPress} />
        </InputContainer>
    </Element>
);

export default SearchCharacter;