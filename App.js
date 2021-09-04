import React, { useState } from 'react';
import { StatusBar, View, FlatList } from 'react-native';
import AddButton from './components/AddButton'
import ImageComponent from './components/ImageComponent';
import TodoItem from './components/TodoItem';
import styled from 'styled-components';

const App = () => {
  const [data, setData] = useState([])

  const onSubmitHandler = (val) => {
    setData([...data, { key: Math.random().toString(), value: val }])
  }

  console.log(data)

  return (
    <ComponentContainer>
      <View>
        <StatusBar backgroundColor="yellow" barStyle="light-content" />
      </View>

      <View>
        <View>
          <AddButton onSubmit={onSubmitHandler} />
        </View>
        <FlatList
          data={data.reverse()}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => (
            <TodoItem item={item} />
          )}
        />

      </View>
      {/* <ImageComponent /> */}

    </ComponentContainer>
  );
}

const ComponentContainer = styled.View`
  background-color: orange;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default App
