import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from '../theme/appTheme';
import FlatListItem from '../components/FlatListItem';
import { DATA } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';

const HomeScreen = () => {
    return (
        <View style={[styles.container, styles.globalMargin]} >
            <FlatList
                data={DATA}
                ListHeaderComponent={HeaderTitle}
                keyExtractor={item => item.name}
                renderItem={({ item }) => <FlatListItem menuItem={item} />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    );
};

export default HomeScreen;
