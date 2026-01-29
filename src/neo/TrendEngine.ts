import { pseoServices } from '@/data/pseo';

interface TrendSignal {
    term: string;
    volume: number;
    category: number; // 245 = Health
    growth: number; // % growth
}

// 📈 MOCK GOOGLE TRENDS API
// Simulates fetching trends for Telangana (IN-TG)
export async function fetchTelanganaTrends(): Promise<TrendSignal[]> {
    // In production, this would hit google-trends-api
    return [
        { term: "Invisible Braces Cost Hyderabad", volume: 1500, category: 245, growth: 120 },
        { term: "Painless Root Canal Near Me", volume: 2200, category: 245, growth: 45 },
        { term: "Dental Implant Warranty", volume: 800, category: 245, growth: 15 },
        { term: "Zirconia Crown Price", volume: 1100, category: 245, growth: 60 },
        { term: "Laser Gum Surgery", volume: 300, category: 245, growth: 200 } // Niche winner
    ];
}

// 🚪 RELEVANCE GATE
// Checks if the trend matches our service list (SEO Polarity Guard)
export function checkTrendRelevance(trendTerm: string): string | null {
    const services = [
        'Root Canal', 'Implant', 'Braces', 'Invisalign', 'Crown',
        'Whitening', 'Extraction', 'Kid', 'Child', 'Pediatric', 'Emergency'
    ];

    // Find if any service keyword is in the trend term
    const match = services.find(s => trendTerm.toLowerCase().includes(s.toLowerCase()));

    // Normalize to our internal slugs if possible, or just return the match
    if (match) {
        // Simple mapping example
        if (match === 'Root Canal') return 'root-canal';
        if (match === 'Implant') return 'dental-implants';
        if (match === 'Braces' || match === 'Invisalign') return 'orthodontics'; // Assuming we have this
        return 'general';
    }

    return null; // Discard trend
}

// 💉 TREND INJECTOR
// Generates the "Update Block" to append to the page
export function generateTrendInjection(trend: TrendSignal): string {
    const year = new Date().getFullYear();

    return `
    <div class="mt-16 p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
        <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
            <span class="text-blue-600">📈 ${year} Hyderabad Trend Report:</span> ${trend.term}
        </h3>
        <p class="text-slate-600 dark:text-slate-400 mb-4">
            We are seeing a <strong>${trend.growth}% surge</strong> in inquiries for "${trend.term}" in the Tellapur/Gachibowli area this month.
        </p>
        <div class="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm">
            <h4 class="font-bold text-sm uppercase text-slate-500 mb-2">Dr. Dhivakaran's Clinical Note:</h4>
            <p class="text-sm">
                "While interest in this is growing, patient safety remains our priority. At Noble Dental, we use FDA-approved materials that meet international standards, ensuring that this trend is treated with medical rigor, not just cosmetic speed."
            </p>
        </div>
    </div>
    `;
}
