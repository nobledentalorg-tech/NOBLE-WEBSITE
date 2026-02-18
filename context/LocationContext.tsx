'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface LocationContextType {
    isLocal: boolean;
}

const LocationContext = createContext<LocationContextType>({ isLocal: false });

export const LocationProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isLocal, setIsLocal] = useState(false);

    useEffect(() => {
        // Read the user-location cookie set by middleware for local visitors
        const cookies = document.cookie.split(';').map(c => c.trim());
        const locationCookie = cookies.find(c => c.startsWith('user-location='));
        if (locationCookie) {
            const city = locationCookie.split('=')[1];
            const localCities = ['hyderabad', 'serilingampalle', 'nallagandla'];
            setIsLocal(localCities.includes(city));
        }
    }, []);

    return (
        <LocationContext.Provider value={{ isLocal }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);

