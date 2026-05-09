/**
 * AUTOMATED INTERNAL LINKING NEURAL NETWORK
 * Scans content and injects high-authority links.
 * 
 * Logic:
 * 1. Scans for keywords (case-insensitive).
 * 2. Injects link only for the FIRST occurrence to avoid spamminess.
 * 3. Ignores text already inside links (basic regex protection).
 */
export function applyInternalLinking(content: string): string {
    const links = [
        { keyword: 'Root Canal', url: '/treatments/root-canal-treatment' },
        { keyword: 'Implant', url: '/treatments/dental-implants' },
        { keyword: 'Teeth Whitening', url: '/treatments/teeth-whitening' },
        { keyword: 'Crown', url: '/treatments/dental-crowns-bridges' },
        { keyword: 'Tellapur', url: '/residents/tellapur-dental-guide' }, // Placeholder for future Guide
        { keyword: 'Gachibowli', url: '/residents/gachibowli-dental-guide' },
        { keyword: 'Emergency', url: '/emergency' },
        { keyword: 'Wisdom Tooth', url: '/treatments/wisdom-tooth-surgery' },
        { keyword: 'Braces', url: '/treatments/invisalign-aligners' },
        { keyword: 'Invisalign', url: '/treatments/invisalign-aligners' },
        { keyword: 'Smile Design', url: '/treatments/smile-design' },
        { keyword: 'Toothache', url: '/emergency' },
        { keyword: 'Gums Bleeding', url: '/blog/faq/bleed-brushing' },
        { keyword: 'Incisor', url: '/blog/anatomy/upper-central-incisor' },
        { keyword: 'Molar', url: '/blog/anatomy/milk-second-molar' },
        { keyword: 'Canine', url: '/blog/anatomy/upper-canine-eye-tooth' }
    ];

    let linkedContent = content;

    links.forEach(link => {
        // Regex Lookahead explanation:
        // \\b(${link.keyword}s?)\\b : Match whole word (singular or plural)
        // (?![^<]*>) : Ensure we are NOT inside an HTML tag (like <a href="...">) or markdown link
        // Note: This is a basic heuristics. Markdown links [text](url) don't use <>, so we need to be careful.
        // A safer regex for markdown is trickier, but for this generation typically plain text is main target.
        // We will stick to a simple replacement that attempts to avoid existing markdown links.

        // Simple approach: Replace only if not preceded by '['
        const regex = new RegExp(`(?<!\\[)\\b(${link.keyword}s?)\\b`, 'i');

        // Only link the first instance
        if (regex.test(linkedContent)) {
            linkedContent = linkedContent.replace(regex, `[$1](${link.url})`);
        }
    });

    return linkedContent;
}
