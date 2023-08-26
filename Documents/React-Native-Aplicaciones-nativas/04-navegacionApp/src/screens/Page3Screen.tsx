import React from 'react';
import {View, Text, Button} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
interface Props extends StackScreenProps<any, any>{}

const Page3Screen = ({ navigation }:Props) => {
    return (
        <View>
            <Text style={styles.title}>Page3Screen</Text>
            <Button
                title="Regresar"
                onPress={() => navigation.pop()}
            />
            <Button
                title="Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
};

export default Page3Screen;
