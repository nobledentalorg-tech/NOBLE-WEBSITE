declare module '@builder.io/partytown/react' {
    import React from 'react';
    export interface PartytownProps {
        key?: string | number;
        lib?: string;
        debug?: boolean;
        forward?: string[];
        url?: string;
    }
    export declare const Partytown: React.FC<PartytownProps>;
}
