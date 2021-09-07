import React from "react";
import styled from "styled-components/native";
import {Dimensions, useWindowDimensions} from "react-native";

const StyledInput = styled.TextInput.attrs(({theme}) => ({
    placeholderTextColor: theme.main,
}))`
  width: ${({width}) => width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 25px;
  background-color: ${({theme}) => theme.itemBackground};
  color: ${({theme}) => theme.text};
`

const Input = ({placeholder}) => {
    // const width = Dimensions.get('window').width;
    const width = useWindowDimensions().width;
    return <StyledInput width={width}
                        placeholder={placeholder}
                        maxLength={50}
                        autoCapitalize='none'
                        autoCorrect={false}
                        returnKeyType='done'
    />
}

export default Input
