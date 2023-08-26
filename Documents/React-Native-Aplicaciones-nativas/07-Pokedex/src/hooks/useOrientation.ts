import { useEffect, useRef, useState } from 'react';
import { Dimensions } from 'react-native';

export function useOrientation() {
    const isMounted = useRef(true);
    const [orientation, setOrientation] = useState('PORTRAIT');

    useEffect(() => {
        if (!isMounted) { return; }
        Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setOrientation('PORTRAIT');
            } else {
                setOrientation('LANDSCAPE');

            }
        });
        return () => {
            isMounted.current = false;
        };
    }, []);

    return orientation;
}
