"use client";

import { Partytown } from '@qwik.dev/partytown/react';

export default function GoogleTagManager() {
    return (
        <>
            <Partytown
                debug={false}
                forward={['dataLayer.push']}
                resolveUrl={(url) => {
                    // Suppress deprecation warnings by filtering specifically if needed, 
                    // though Permissions-Policy handles the blocking.
                    if (url.hostname.includes('google-analytics.com') || url.hostname.includes('googletagmanager.com')) {
                        return url;
                    }
                    return url;
                }}
                // Forward additional necessary properties
                mainWindowAccessors={['navigator.userAgent', 'navigator.language']}

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
