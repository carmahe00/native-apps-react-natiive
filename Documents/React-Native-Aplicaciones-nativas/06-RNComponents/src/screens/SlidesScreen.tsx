
import React, { useContext, useRef, useState } from 'react';
import { ImageSourcePropType, SafeAreaView, StyleSheet, useWindowDimensions, LogBox, View, Image, Text, TouchableOpacity, Animated } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import useAnimation from '../hooks/useAnimation';
import { RootStackParamList } from '../routes/Navigator';
import { ThemeContext } from '../context/theme/themeContext';

type FlatListItemNavigationProp = StackNavigationProp<RootStackParamList, 'Slides'>;

LogBox.ignoreLogs([
    "exported from 'deprecated-react-native-prop-types'.",
]);


interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png'),
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png'),
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png'),
    },
];

const SlidesScreen = () => {
    const isVisible = useRef(false);
    const { width } = useWindowDimensions();
    const [activeSlide, setActiveSlide] = useState(0);
    const { theme: { colors } } = useContext(ThemeContext);
    const navigation = useNavigation<FlatListItemNavigationProp>();

    const { fadeIn, opacity } = useAnimation();
    const renderItem = ({ item }: { item: Slide }) => {
        return (
            <View style={styles.itemContainer} >
                <Image
                    source={item.img}
                    style={styles.image}
                />
                <Text style={[styles.title, { color: colors.text }]} >{item.title}</Text>
                <Text style={styles.subTitle} >{item.desc}</Text>
            </View>
        );
    };
    return (
        <SafeAreaView
            style={styles.container}
        >
            <Carousel
                /* ref={carousel} */
                data={items}
                renderItem={renderItem}
                sliderWidth={width}
                itemWidth={width}
                layout="default"
                onSnapToItem={index => {
                    setActiveSlide(index);
                    if (index === items.length - 1) {
                        isVisible.current = true;
                        fadeIn();
                    }
                }}
            />
            <View style={styles.paginatorContainer} >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeSlide}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: colors.primary,
                    }}
                    inactiveDotOpacity={0.2}
                    inactiveDotScale={0.6}
                />
                {

                    isVisible.current &&
                    <Animated.View style={{ opacity }} >
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                backgroundColor: colors.primary,
                                width: 110,
                                height: 50,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            activeOpacity={0.7}
                            onPress={() => {
                                navigation.navigate('Home');
                            }}
                        >
                            <Text style={{ fontSize: 20, color: 'white' }} >Enter</Text>
                            <Ionicons
                                name="chevron-forward-outline"
                                color="white"
                                size={30}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
    itemContainer: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
    },
    image: {
        width: 350,
        height: 400,
        resizeMode: 'center',
    },
    title: {
        fontSize: 30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: '#5856D6',
    },
    subTitle: {
        fontSize: 14,

    },
    paginatorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        alignItems: 'center',
    },
});

export default SlidesScreen;
