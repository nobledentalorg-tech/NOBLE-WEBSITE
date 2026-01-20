
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Noble Dental Care | Nallagandla & Hyderabad Appointment',
    description: 'Book your appointment online. Emergency dental slots available. Located opposite Citizens Hospital, Nallagandla.'
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
