import React from 'react'
import { View, Text, Image } from 'react-native';
import styled from "styled-components";


const ImageComponent = () => {
    return (
        <ComponentContainer>
            <ImageC
                source={require("../assets/images/todo.png")}
            />
            <TextC>Want to display image here</TextC>
        </ComponentContainer>
    );
}

const ComponentContainer = styled.View`
    align-items: center;
    justify-content: center;
    height: 650px;
  `;

const ImageC = styled.Image`
    width: 350px;
    height: 200px;
  `;

const TextC = styled.Text`
    color: white;
    margin-top: 30px;
    font-size: 30px;
  `;


export default ImageComponent