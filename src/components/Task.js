import React from 'react'
import styled from "styled-components/native";
import PropTypes from 'prop-types'
import IconButton from "./IconButton";
import { icons } from "../icons";

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0;
`
const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({theme}) => theme.text}
`

const Task = ({item, deleteTask}) => {
    return (
        <Container>
            <IconButton icon={icons.uncheck}/>
            <Contents>{item.text}</Contents>
            <IconButton icon={icons.edit}/>
            <IconButton icon={icons.delete} id={item.id} onPress={deleteTask}/>
        </Container>
    )
}

Task.propTypes = {
    item: PropTypes.object.isRequired,
    deleteTask: PropTypes.func.isRequired

}

export default Task
