import { useEffect, useRef, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Location } from '../interface/appInterfaces';
export const useLocation = () => {
    const [hasLocation, setHasLocation] = useState(false);
    const [routeLine, setRouteLine] = useState<Location[]>([]);
    const [initialPosition, setInitialPosition] = useState<Location>({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const [userLocation, setUserLocation] = useState<Location>({
        latitude: 37.78825,
        longitude: -122.4324,
    });
    const watchId = useRef<number>();
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        getCurrentLocation().then(location => {
            if (!isMounted.current) {
                return;
            }
            setInitialPosition(location);
            setUserLocation(location);
            setRouteLine(routes => [...routes, location]);
            setHasLocation(true);
        });
    }, []);
    /**
     * @returns current location from user
     */
    const getCurrentLocation = (): Promise<Location> => {
        return new Promise((resolve, reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => resolve({ latitude: coords.latitude, longitude: coords.longitude }),
                (err) => reject(err),
                { enableHighAccuracy: true }
            );
        });
    };
    const followUser = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                if (!isMounted.current) {
                    return;
                }
                const location: Location = {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                };
                setUserLocation(location);
                setRouteLine(routes => [...routes, location]);
            },
            console.error,
            { enableHighAccuracy: true, distanceFilter: 10 }
        );
    };
    const stopFollowLocation = () => {
        if (watchId.current) {
            Geolocation.clearWatch(watchId.current);
        }
    };
    return {
        hasLocation,
        initialPosition,
        getCurrentLocation,
        followUser,
        userLocation,
        stopFollowLocation,
        routeLine,
    };
};
