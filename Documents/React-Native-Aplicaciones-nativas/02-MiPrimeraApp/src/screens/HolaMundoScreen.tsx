import React from 'react';
import {View, Text} from 'react-native';

const HolaMundoScreen = () => {
    return (
        <View style={{
          flex:1,
          backgroundColor: '#000',
          justifyContent: 'center',
        }} >
          <Text style={{color: '#fff', fontSize: 45, textAlign: 'center'}} >Hola Mundo</Text>
        </View>
      );
};


export default HolaMundoScreen;
