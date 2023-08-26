import React, { createContext, FC, useEffect, useReducer } from 'react';
import { Appearance } from 'react-native';
import { AppState } from 'react-native';
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ThemeConextProps {
    theme: ThemeState
    setDarkTheme: () => void
    setLightTheme: () => void
}

export const ThemeContext = createContext({} as ThemeConextProps);

export const ThemeProvider: FC = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme);
    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
    };
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
    };
    useEffect(() => {
        AppState.addEventListener('change', status => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme();
            }
        });
    }, []);
    /* useEffect(() => {
        (coloSchema === 'light') ?
            setLightTheme() :
            setDarkTheme();
    }, [coloSchema]); */
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }} >
            {children}
        </ThemeContext.Provider>
    );
};
