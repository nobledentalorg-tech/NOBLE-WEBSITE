
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Credentials & Certifications | ISO 9001:2015 | Noble Dental',
    description: 'Verified clinical excellence. NABH protocol, ADA membership, and DCI registered specialists ensuring your safety.'
};

export default function CredentialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
