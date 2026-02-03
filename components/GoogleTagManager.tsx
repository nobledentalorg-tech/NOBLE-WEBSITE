"use client";

import { Partytown } from '@qwik.dev/partytown/react';

export default function GoogleTagManager() {
    return (
        <>
            <Partytown
                debug={false}
                forward={['dataLayer.push']}
                resolveUrl={(url) => {
                    // Suppress and handle Privacy Sandbox features if needed, 
                    // but primarily ensuring we don't block necessary attribution if permitted.
                    if (url.hostname.includes('google-analytics.com') || url.hostname.includes('googletagmanager.com')) {
                        return url;
                    }
                    return url;
                }}
            />
            {/* eslint-disable-next-line @next/next/next-script-for-ga */}
            <script
                type="text/partytown"
                title="Google Tag Manager"
                dangerouslySetInnerHTML={{
                    __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N7LJVS7T');
          `,
                }}
            />
        </>
    );
}
