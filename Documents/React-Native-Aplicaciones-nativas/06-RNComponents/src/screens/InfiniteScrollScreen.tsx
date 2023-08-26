import React, { useContext, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/theme/themeContext';

const InfiniteScrollScreen = () => {
    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);
    const { theme: { colors } } = useContext(ThemeContext);
    const loadMore = () => {
        let newArray: number[] = [];
        numbers.forEach((__number, index) => {
            newArray[index] = numbers.length + index;
        });
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    };
    const renderItem = ({ item }: { item: number }) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
        );
    };
    return (
        <View >
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={renderItem}
                ListHeaderComponent={
                    <View style={styles.containerLayout} >
                        <HeaderTitle
                            title="Infinite Scroll"
                        />
                    </View>
                }
                onEndReached={loadMore}
                onEndReachedThreshold={0.2}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer} >
                        <ActivityIndicator size="large" color={colors.primary} />
                    </View>
                )}
            />
        </View >
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
    },
    footerContainer: {
        height: 150,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLayout: {
        marginHorizontal: 20,
    },
});

export default InfiniteScrollScreen;
