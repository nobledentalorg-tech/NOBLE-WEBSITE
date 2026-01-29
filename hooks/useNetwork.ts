import { useState, useEffect } from 'react';

interface NetworkInformation extends EventTarget {
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    saveData?: boolean;
    addEventListener(type: 'change', listener: (this: NetworkInformation, ev: Event) => any): void;
    removeEventListener(type: 'change', listener: (this: NetworkInformation, ev: Event) => any): void;
}

interface NavigatorWithConnection extends Navigator {
    connection?: NetworkInformation;
}

export const useNetwork = () => {
    const [network, setNetwork] = useState<{ isSlow: boolean; saveData: boolean; supported: boolean }>({
        isSlow: false,
        saveData: false,
        supported: false
    });

    useEffect(() => {
        const nav = navigator as NavigatorWithConnection;

        if (!nav.connection) {
            setNetwork(prev => ({ ...prev, supported: false }));
            return;
        }

        const connection = nav.connection;

        const updateNetwork = () => {
            const isSlow = connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g'; // || connection.effectiveType === '3g' (Optional aggressive mode)
            const saveData = connection.saveData || false;

            setNetwork({
                isSlow,
                saveData,
                supported: true
            });
        };

        updateNetwork();
        connection.addEventListener('change', updateNetwork);

        return () => {
            connection.removeEventListener('change', updateNetwork);
        };
    }, []);

    return network;
};
