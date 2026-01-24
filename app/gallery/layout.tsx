
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Clinical Gallery | Before & After Dental Archives | Noble Dental',
    description: 'View our real patient transformation cases. Full mouth rehabilitation, zirconia crowns, and dental implant outcomes in Hyderabad.'
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
