import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colors: ImageColors
    prevColors: ImageColors
    setMainColors: (color: ImageColors) => void
    setPrevMainColors: (color: ImageColors) => void
}

export const GradiantContext = createContext<ContextProps>({} as ContextProps);

const GradiantProvider: React.FC = ({ children }) => {
    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });
    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });
    const setMainColors = (Colors: ImageColors) =>{
        setColors(Colors);
    };
    const setPrevMainColors = (Colors: ImageColors) =>{
        setPrevColors(Colors);
    };
    return (
        <GradiantContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }} >
            {children}
        </GradiantContext.Provider>
    );
};

export default GradiantProvider;
