/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import LoadingScreen from '../pages/LoadingScreen';
import Fab from './Fab';

interface Props {
    marker?: Marker[]
}

export const Maps = ({ }: Props) => {
    const [showPolyline, setShowPolyline] = useState(true);
    const { hasLocation, initialPosition, getCurrentLocation, followUser, userLocation, stopFollowLocation, routeLine } = useLocation();
    const mapViewRef = useRef<MapView | null>(null);
    const following = useRef(true);
    const centerPosition = async () => {
        const { latitude, longitude } = await getCurrentLocation();
        following.current = true;
        mapViewRef.current?.animateCamera({ center: { longitude, latitude } });
    };
    useEffect(() => {
        followUser();
        return () => {
            stopFollowLocation();
        };
    }, []);
    useEffect(() => {
        if (!following.current) {
            return;
        }
        const { latitude, longitude } = userLocation;
        mapViewRef.current?.animateCamera({ center: { latitude, longitude } });
    }, [userLocation]);
    if (!hasLocation) {
        return <LoadingScreen />;
    }
    return (
        <>
            <MapView
                ref={mapViewRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation
                onTouchStart={() => { following.current = false; }}
            >
                {

                    showPolyline && <Polyline
                        coordinates={routeLine}
                        strokeColor="#000"
                        strokeWidth={3}
                    />
                }
            </MapView>
            <Fab onPress={centerPosition} iconName="compass-outline" />
            <Fab onPress={() => setShowPolyline(!showPolyline)} iconName="brush-outline" style={styles.bottom} />
        </>

    );
};

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    bottom: {
        bottom: 80,
        right: 20,
    },
});
