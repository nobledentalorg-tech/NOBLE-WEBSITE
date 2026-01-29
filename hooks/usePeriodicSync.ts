import { useEffect } from 'react';

export const usePeriodicSync = () => {
    useEffect(() => {
        const registerPeriodicSync = async () => {
            if ('serviceWorker' in navigator) {
                const registration = await navigator.serviceWorker.ready;
                // Periodic Sync is experimental, so we require a check
                if ('periodicSync' in registration) {
                    try {
                        const periodicSync = (registration as any).periodicSync;
                        // Check if already registered
                        const tags = await periodicSync.getTags();
                        if (!tags.includes('update-clinic-status')) {
                            await periodicSync.register('update-clinic-status', {
                                minInterval: 6 * 60 * 60 * 1000, // 6 hours
                            });
                            console.log('Periodic Sync registered: update-clinic-status');
                        }
                    } catch (error) {
                        console.error('Periodic Sync registration failed:', error);
                    }
                }
            }
        };

        registerPeriodicSync();
    }, []);
};
