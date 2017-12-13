// Version1.1 Criando e Usando um Component
// import React from 'react';
// import {Text, AppRegistry} from 'react-native';
//
// const Title = () => {
//   return(
//     <Text> Hello World in Title component </Text>
//   )
// }
//
// export default Title;

//Version1.2 Criando Estilos para o Text
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Title = () => {
//   const {styleTitleView, styleTitleText} = styleTitle;
//   return(
//     <View style={styleTitleView}>
//       <Text style={styleTitleText}> Hello World in Title Component </Text>
//     </View>
//   )
// }
//
// const styleTitle = {
//   styleTitleView: {
//       backgroundColor: '#E7E7E7',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 60,
//       paddingTop: 15,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.4,
//       elevation: 2,
//       position: 'relative'
//   },
//   styleTitleText: {
//       fontSize: 22,
//       fontWeight: 'bold'
//   }
// };
//
// export default Title;

//Version1.3 Pegando parametro da chamada Title
// import React from 'react';
// import {View, Text} from 'react-native';
//
// const Title = (props) => {
//   const {styleTitleView, styleTitleText} = styleTitle;
//   return(
//     <View style={styleTitleView}>
//       <Text style={styleTitleText}> {props.TextValue} </Text>
//     </View>
//   )
// }
//
// const styleTitle = {
//   styleTitleView: {
//       backgroundColor: '#E7E7E7',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: 60,
//       paddingTop: 15,
//       shadowColor: '#000',
//       shadowOffset: { width: 0, height: 2 },
//       shadowOpacity: 0.4,
//       elevation: 2,
//       position: 'relative'
//   },
//   styleTitleText: {
//       fontSize: 22,
//       fontWeight: 'bold'
//   }
// };
//
// export default Title;

//Version1.4 Console.Log e Debug
import React from 'react';
import {View, Text} from 'react-native';

const Title = (props) => {
  console.log('properties = ',props);
  const {styleTitleView, styleTitleText} = styleTitle;
  return(
    <View style={styleTitleView}>
      <Text style={styleTitleText}> {props.TextValue} </Text>
    </View>
  )
}

const styleTitle = {
  styleTitleView: {
      backgroundColor: '#E7E7E7',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      elevation: 2,
      position: 'relative'
  },
  styleTitleText: {
      fontSize: 22,
      fontWeight: 'bold'
  }
};

export default Title;
