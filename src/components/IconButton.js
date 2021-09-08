import React from 'react'
import styled from 'styled-components/native'
import {TouchableOpacity, View} from "react-native"
import PropTypes from 'prop-types'
import {icons} from "../icons";

const Icon = styled.Image`
  width: 30px;
  height: 30px;
  margin: 10px;
  tint-color: ${({theme, completed}) => completed ? theme.done : theme.text};
`

const IconButton = ({icon, onPress, id, completed}) => {
    const _onPress = () => {
        onPress(id);
    }

    return (
        <TouchableOpacity onPress={_onPress}>
            <View>
                <Icon source={icon} completed={completed}/>
            </View>
        </TouchableOpacity>
    )
}

IconButton.propTypes = {
    icon: PropTypes.oneOf(Object.values(icons)).isRequired,
    id: PropTypes.string,
    onPress: PropTypes.func,
    completed: PropTypes.bool
}

export default IconButton
