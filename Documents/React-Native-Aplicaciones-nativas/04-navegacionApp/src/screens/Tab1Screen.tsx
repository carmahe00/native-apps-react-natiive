import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';
import { AuthContext } from '../context/AuthContext';

const Tab1Screen = () => {
    const { top } = useSafeAreaInsets();
    const { changeFavoriteIcon } = useContext(AuthContext);
    return (
        <View style={[styles.globalMargin, { marginTop: top }]} >
            <Text style={styles.title} >Iconos</Text>
            <Text>
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="airplane-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="alarm-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="arrow-down-circle-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="arrow-forward-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="battery-charging-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="battery-full-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="arrow-up-outline" />
                <TouchableIcon changeFavoriteIcon={changeFavoriteIcon} iconName="thumbs-up-outline" />
            </Text>
        </View>
    );
};

export default Tab1Screen;
