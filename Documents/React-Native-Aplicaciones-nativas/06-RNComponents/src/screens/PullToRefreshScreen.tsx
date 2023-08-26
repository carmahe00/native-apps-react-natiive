import React, { useContext, useState } from 'react';
import { View, ScrollView, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/theme/themeContext';

const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
};

export default function PullToRefreshScreen() {
    const [data, setData] = useState<string>();
    const { theme: { colors } } = useContext(ThemeContext);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(5000).then(() => {
            setRefreshing(false);
            setData('Hola mundo');
        });
    }, []);
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        progressViewOffset={30}
                        progressBackgroundColor={colors.primary}
                        colors={['blue', 'red', 'orange']}
                        tintColor="white"
                        title="Cargando...."
                    />
                }
            >
                <View style={styles.globalMargin} >
                    <HeaderTitle title="Pull To Refresh" />
                    {
                        data && <HeaderTitle title={data} />
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
