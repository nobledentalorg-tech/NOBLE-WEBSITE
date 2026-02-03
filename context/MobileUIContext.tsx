'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MobileUIContextType {
    isStickyFooterVisible: boolean;
    setStickyFooterVisible: (visible: boolean) => void;
}

const MobileUIContext = createContext<MobileUIContextType | undefined>(undefined);

export function MobileUIProvider({ children }: { children: ReactNode }) {
    const [isStickyFooterVisible, setStickyFooterVisible] = useState(false);

    return (
        <MobileUIContext.Provider value={{ isStickyFooterVisible, setStickyFooterVisible }}>
            {children}
        </MobileUIContext.Provider>
    );
}

export function useMobileUI() {
    const context = useContext(MobileUIContext);
    if (!context) {
        throw new Error('useMobileUI must be used within a MobileUIProvider');
    }
    return context;
}
