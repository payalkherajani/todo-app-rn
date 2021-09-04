import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item, deleteItem }) {
    return (
        <ComponentContainer>
            <ListContainer>
                <View>
                    <TextItem>{item.value}</TextItem>
                </View>
                <View>
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

const TextTask = styled.Text`
  color: goldenrod;
  font-size: 15px;
  margin-right: 20px;
  border-radius: 10px;
  width: 40px;
`;
