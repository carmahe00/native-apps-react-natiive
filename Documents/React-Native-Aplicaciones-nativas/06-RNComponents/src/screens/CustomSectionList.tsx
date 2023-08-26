import React, { useContext } from 'react';
import { View, SectionList, Text } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/theme/themeContext';


interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: 'DC Comics',
        data: ['Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin'],
    },
    {
        casa: 'Marvel Comics',
        data: ['Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman', 'Antman', 'Thor', 'Spiderman', 'Antman'],
    },
    {
        casa: 'Anime',
        data: ['Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama'],
    },
];

const CustomSectionList = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <View style={[styles.globalMargin, { flex: 1 }]} >
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <HeaderTitle title="Section List" />}
                ListFooterComponent={() => (
                    <View style={{ marginBottom: 70 }} ><HeaderTitle title={'Total Casas: ' + casas.length} /></View>
                )}

                stickySectionHeadersEnabled
                renderItem={({ item }) => <Text style={{ color: theme.colors.text }} >{item}</Text>}
                renderSectionHeader={({ section: { casa } }) => (
                    <View style={{ backgroundColor: theme.dark ? '#1a1a1a' : '#dedede' }} ><HeaderTitle title={casa} /></View>
                )}
                renderSectionFooter={({ section: { data } }) => (
                    <View style={{ backgroundColor: theme.dark ? '#1a1a1a' : '#dedede' }} ><HeaderTitle title={'Total: ' + data.length} /></View>
                )}
                SectionSeparatorComponent={ItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default CustomSectionList;
