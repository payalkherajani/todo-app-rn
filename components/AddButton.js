import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import styled from "styled-components";


const AddButton = (props) => {

  const [value, setValue] = useState('')

  const onChangeTextFunction = (text) => {
    setValue(text)
  }

  const onPressHandler = () => {
    if (value.trim() === '') {
      alert('Required Field')
    }
    else {
      props.onSubmit(value)
      setValue('')
    }

  }

  return (
    <ComponentContainer>

      <InputContainer>
        <Input placeholder="Add Task" onChangeText={onChangeTextFunction} value={value} />
      </InputContainer>

      <SubmitButton
        onPress={onPressHandler}
      >
        <AntDesign name="plus" size={24} color="pink" />
      </SubmitButton>


    </ComponentContainer>
  )
}


const ComponentContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  margin-top: 50px;
  padding: 40px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  border-radius: 10px;
`;

const Input = styled.TextInput`
  font-size: 20px;
  background-color: white;
  width: 300px;
  margin-right: 20px;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  margin-bottom: 20px;
  border-radius: 50px;
`;

export default AddButton