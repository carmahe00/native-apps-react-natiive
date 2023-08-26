import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    item: Cast
}

const CastItem = ({ item }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${item.profile_path}`;
    return (
        <View style={styles.container} >
            {
                item.profile_path &&
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            }
            <View style={styles.actorInfor}>
                <Text style={styles.name} >
                    {item.name}
                </Text>
                <Text style={styles.character} >
                    {item.character}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 5,
        borderRadius: 10,
        paddingRight: 5,
    },
    actorInfor: {
        marginLeft: 10,
        paddingBottom: 5,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    character: {
        fontSize: 14,
        opacity: 0.7,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
});

export default CastItem;
