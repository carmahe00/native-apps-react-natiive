import React from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';

interface Props {
    iconName: string
    changeFavoriteIcon: (iconName: string) => void,
}

const TouchableIcon = ({ iconName, changeFavoriteIcon }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => changeFavoriteIcon(iconName)}
        >
            <Ionicons name={iconName} color={colors.primary} size={70} />
        </TouchableOpacity>
    );
};

export default TouchableIcon;
