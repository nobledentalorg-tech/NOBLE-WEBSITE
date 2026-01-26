import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insurance Claims & 0% EMI Options | Noble Dental Care Nallagandla",
    description: "We provide administrative support for dental insurance claims (Star Health, HDFC, etc.) and offer 0% interest EMI options for implants & aligners.",
    keywords: ["dental insurance hyderabad", "cashless dental treatment", "dental emi options", "bajaj finserv dentist", "corporate dental benefits"],
    openGraph: {
        title: "Insurance Support & Financial Transparency | Noble Dental",
        description: "Administrative support for reimbursement claims and 0% EMI finance options.",
        type: "website",
    }
};

export default function InsuranceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
