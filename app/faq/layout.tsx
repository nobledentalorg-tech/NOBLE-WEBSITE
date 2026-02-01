
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dental FAQ Knowledge Vault | Noble Dental Care',
    description: 'Evidence-based dental answers anchored to WHO and ADA protocols. Multi-language support for Telugu, Hindi, Tamil, and more.',
    alternates: {
        canonical: 'https://nobledentalnallagandla.in/faq',
        languages: {
            'en': 'https://nobledentalnallagandla.in/faq?lang=en',
            'te': 'https://nobledentalnallagandla.in/faq?lang=te',
            'hi': 'https://nobledentalnallagandla.in/faq?lang=hi',
            'ta': 'https://nobledentalnallagandla.in/faq?lang=ta',
            'kn': 'https://nobledentalnallagandla.in/faq?lang=kn',
            'ml': 'https://nobledentalnallagandla.in/faq?lang=ml',
        },
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
