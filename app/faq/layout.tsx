
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dental FAQ Knowledge Vault | Noble Dental Care',
    description: 'Evidence-based dental answers anchored to WHO and ADA protocols. Multi-language support for Telugu, Hindi, Tamil, and more.',
    alternates: {
        canonical: 'https://www.nobledentalnallagandla.in/faq',
        languages: {
            'en': 'https://www.nobledentalnallagandla.in/faq?lang=en',
            'te': 'https://www.nobledentalnallagandla.in/faq?lang=te',
            'hi': 'https://www.nobledentalnallagandla.in/faq?lang=hi',
            'ta': 'https://www.nobledentalnallagandla.in/faq?lang=ta',
            'kn': 'https://www.nobledentalnallagandla.in/faq?lang=kn',
            'ml': 'https://www.nobledentalnallagandla.in/faq?lang=ml',
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
