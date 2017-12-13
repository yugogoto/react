//Version1.5 Criação de Classes, Inicialização e renderizar
import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ListStuff extends Component {
    componentWillMount() {
        console.log('ListStuff.componentWillMount()');
    };
    render() {
        return(
            <View>
                <Text>Stuff List</Text>
            </View>
        );
    };
};

export default ListStuff;
