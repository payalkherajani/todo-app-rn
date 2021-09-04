import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function TodoItem({ item, deleteItem, editItem }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newValue, setNewValue] = useState(item.value)

    const onChangeTextFunction = (text) => {
        setNewValue(text)
    }

    const updateValue = () => {
        editItem(item.key, newValue)
        setNewValue('')
        setIsEditing(false)
    }

    return (
        <ComponentContainer>
            <ListContainer>
                <View>
                    {isEditing === false ? (<TextItem>{item.value}</TextItem>) : (
                        <View>
                            <Input onChangeText={onChangeTextFunction} value={newValue} />
                            <FontAwesome name="check" size={24} color="green" onPress={updateValue} />
                        </View>
                    )}
                </View>
                <View>
                    {isEditing === false ? (<Entypo name="edit" size={24} color="blue" onPress={() => setIsEditing(true)} />) : (null)}
                    <MaterialIcons name="delete" size={24} color="red" onPress={() => deleteItem(item.key)} />
                </View>
            </ListContainer>
        </ComponentContainer>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  margin-top: 10px;
  margin-right: 20px;
  align-self: center;
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
