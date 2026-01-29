'use client';

import React, { createContext, useContext } from 'react';

interface LocationContextType {
    isLocal: boolean;
}

const LocationContext = createContext<LocationContextType>({ isLocal: false });

export const LocationProvider = ({
    children,
    isLocal
}: {
    children: React.ReactNode;
    isLocal: boolean;
}) => {
    return (
        <LocationContext.Provider value={{ isLocal }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => useContext(LocationContext);
