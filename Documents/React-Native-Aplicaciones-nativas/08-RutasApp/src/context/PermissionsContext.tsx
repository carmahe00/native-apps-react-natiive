/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, FC, useEffect, useState } from 'react';
import { AppState, Platform } from 'react-native';
import { request, PERMISSIONS, PermissionStatus, check, openSettings } from 'react-native-permissions';

export interface PermissionsState {
    locateStatus: PermissionStatus
}

export const permissionInitState: PermissionsState = {
    locateStatus: 'unavailable',
};

type PermissionContextProps = {
    permissions: PermissionsState
    askLocationPermission: () => void
    checkLocationPermission: () => void
}

export const PermissionsContext = createContext({} as PermissionContextProps);

const PermissionsContextScreen: FC = ({ children }) => {
    const [permissions, setPermissions] = useState(permissionInitState);
    useEffect(() => {
        const supscription = AppState.addEventListener('change', state => {
            if (state !== 'active') {
                return;
            }
            checkLocationPermission();
        });
        return () => {
            supscription.remove();
        };
    }, []);
    const askLocationPermission = async () => {
        let permission: PermissionStatus;
        if (Platform.OS === 'ios') {
            permission = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permission = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        if (permission === 'blocked') {
            openSettings();
        }
        setPermissions({
            ...permissions,
            locateStatus: permission,
        });
    };
    const checkLocationPermission = async () => {
        let permission: PermissionStatus;
        if (Platform.OS === 'ios') {
            permission = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permission = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }
        setPermissions({
            ...permissions,
            locateStatus: permission,
        });
    };
    return (
        <PermissionsContext.Provider value={{
            permissions,
            checkLocationPermission,
            askLocationPermission,
        }} >
            {children}
        </PermissionsContext.Provider>
    );
};

export default PermissionsContextScreen;
