'use client';

import { useEffect } from 'react';

export default function RegisterSW() {
    useEffect(() => {
        if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/sw.js', { scope: '/' }).then(
                    function (registration) {
                        console.log('Service Worker registration successful with scope: ', registration.scope);

                        // Periodic Sync Registration (Safe Check)
                        // @ts-ignore
                        if ('periodicSync' in registration) {
                            try {
                                // @ts-ignore
                                registration.periodicSync.register('update-clinic-status', {
                                    minInterval: 24 * 60 * 60 * 1000 // 1 Day
                                });
                            } catch (e) {
                                console.log('Periodic Sync could not be registered:', e);
                            }
                        }
                    },
                    function (err) {
                        console.log('Service Worker registration failed: ', err);
                    }
                );
            });
        }
    }, []);

    return null;
}
