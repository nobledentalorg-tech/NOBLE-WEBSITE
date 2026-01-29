import { useState, useEffect } from 'react';

interface BatteryManager extends EventTarget {
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    level: number;
    addEventListener(type: 'chargingchange' | 'levelchange', listener: (this: BatteryManager, ev: Event) => any): void;
    removeEventListener(type: 'chargingchange' | 'levelchange', listener: (this: BatteryManager, ev: Event) => any): void;
}

interface NavigatorWithBattery extends Navigator {
    getBattery?: () => Promise<BatteryManager>;
}

export const useBattery = () => {
    const [battery, setBattery] = useState<{ level: number; charging: boolean; supported: boolean }>({
        level: 1,
        charging: true, // Assume best case initially to prevent flashing
        supported: false
    });

    useEffect(() => {
        const nav = navigator as NavigatorWithBattery;

        if (!nav.getBattery) {
            setBattery(prev => ({ ...prev, supported: false }));
            return;
        }

        let batteryManager: BatteryManager | null = null;

        const updateBattery = () => {
            if (batteryManager) {
                setBattery({
                    level: batteryManager.level,
                    charging: batteryManager.charging,
                    supported: true
                });
            }
        };

        nav.getBattery().then((manager) => {
            batteryManager = manager;
            updateBattery();

            manager.addEventListener('chargingchange', updateBattery);
            manager.addEventListener('levelchange', updateBattery);
        });

        return () => {
            if (batteryManager) {
                batteryManager.removeEventListener('chargingchange', updateBattery);
                batteryManager.removeEventListener('levelchange', updateBattery);
            }
        };
    }, []);

    return battery;
};
