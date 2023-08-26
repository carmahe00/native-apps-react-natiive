import React, { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigator/StackNavigator';
type Page2ScreenProps = StackNavigationProp<RootStackParamList, 'Page2Screen'>;
const Page2Screen = () => {
    const navigation = useNavigation<Page2ScreenProps>();
    useEffect(() => {
        navigation.setOptions({
            title: 'Hola Mundo',
            headerBackTitle: '',
        });
    }, [navigation]);
    return (
        <View style={styles.globalMargin} >
            <Text style={styles.title}>Page2Screen</Text>
            <Button
                title="Ir a la página 3"
                onPress={() => navigation.navigate('Page3Screen')}
            />
        </View>
    );
};

export default Page2Screen;
