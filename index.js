//Version1.0 Mostrar Hello World
// import React from 'react';
// import {AppRegistry, Text} from 'react-native';

// const App = () => {
//   return (
//     <Text>Hello World</Text>
//   );
// };
// AppRegistry.registerComponent('lista', () => App);

//Version1.1 Criando e Usando um Component
// import React from 'react';
// import {AppRegistry, Text} from 'react-native';
// import Title from './src/components/title';
//
// const App = () => {
//   return (
//     <Title />
//   );
// };
//
// AppRegistry.registerComponent('lista', () => App);

// Version1.3 Pegando parametro da chamada Title
// import React from 'react';
// import {AppRegistry, Text} from 'react-native';
// import Title from './src/components/title';
//
// const App = () => {
//   return (
//     <Title TextValue={"Hello World"} />
//   );
// };
//
// AppRegistry.registerComponent('lista', () => App);

//Version1.5 Criação de Classes, Inicialização e renderizar
import React               from 'react';
import {AppRegistry, View} from 'react-native';
import Title               from './src/components/title';
import ListStuff           from './src/components/list-stuff';

const App = () => {
  return (
    <View>
      <Title TextValue={"Hello World"} />
      <ListStuff />
    </View>
  );
};

AppRegistry.registerComponent('lista', () => App);
