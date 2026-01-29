import { pseoServices } from '@/data/pseo';

// INTERFACES
export interface PageStats {
    url: string;
    clicks: number;
    impressions: number;
    position: number;
    externalBacklinks: number;
    lastUpdated: string;
    type?: 'seasonal' | 'standard' | 'authority';
    contentSnippet?: string; // Used to detect <cite>
}

export interface ReaperAction {
    url: string;
    action: 'KEEP' | 'REDIRECT' | 'UPDATE_TITLE';
    reason: string;
    destination?: string;
}

// 1. MOCK GOOGLE SEARCH CONSOLE API 🤖
// Simulating data for 120 days
export async function fetchPageStats(): Promise<PageStats[]> {
    return [
        {
            url: "/treatments/root-canal-treatment",
            clicks: 150,
            impressions: 5000,
            position: 3.2,
            externalBacklinks: 12,
            lastUpdated: "2025-12-01",
            type: 'authority',
            contentSnippet: "As cited in <cite>Carranza's Periodontology</cite>..."
        },
        {
            url: "/blog/monsoon-gum-care",
            clicks: 0,
            impressions: 40,
            position: 12,
            externalBacklinks: 1,
            lastUpdated: "2025-07-15",
            type: 'seasonal' // 🛡️ IMMUNE
        },
        {
            url: "/blog/tellapur-emergency-tips",
            clicks: 0,
            impressions: 8, // 💀 ZOMBIE (< 10)
            position: 45,
            externalBacklinks: 0,
            lastUpdated: "2024-01-01",
            type: 'standard'
        },
        {
            url: "/dentist-in-tellapur",
            clicks: 50,
            impressions: 1200,
            position: 5,
            externalBacklinks: 5,
            lastUpdated: "2025-10-01",
            type: 'authority' // 🛡️ PARENT HUB
        },
        {
            url: "/treatments/laser-gum-surgery",
            clicks: 0,
            impressions: 650, // ⚠️ HIGH IMPRESSION RESCUE
            position: 18,
            externalBacklinks: 2,
            lastUpdated: "2025-09-20",
            type: 'standard'
        }
    ];
}

// 2. IMMUNITY RULES ENGINE 🛡️
function isImmune(page: PageStats): { immune: boolean; reason?: string } {
    // Rule 1: Scholar (Has Citation)
    if (page.contentSnippet?.includes('<cite>') || page.contentSnippet?.includes('doi.org')) {
        return { immune: true, reason: 'Scholar Content (<cite> detected)' };
    }

    // Rule 2: Parental Hub (Depth check / Key Pages)
    // Heuristic: Toplevel pages or known hubs
    if (page.url.split('/').length < 3 || page.type === 'authority') {
        return { immune: true, reason: 'Parent Authority Hub' };
    }

    // Rule 3: Backlink Shield
    if (page.externalBacklinks > 0) {
        return { immune: true, reason: `External Backlinks Detected (${page.externalBacklinks})` };
    }

    // Rule 4: Seasonal Whitelist
    if (page.type === 'seasonal') {
        return { immune: true, reason: 'Seasonal Whitelist Details' };
    }

    return { immune: false };
}

// 3. SAFE 301 MAPPING LOGIC 🗺️
function determineRedirectTarget(url: string): string {
    // Hierarchy Check: /blog/tellapur-emergency-tips -> /dentist-in/tellapur
    if (url.includes('tellapur')) return '/dentist-in/tellapur';
    if (url.includes('gachibowli')) return '/dentist-in/gachibowli';
    if (url.includes('root-canal')) return '/treatments/root-canal-treatment';

    // Default safe fallback
    return '/';
}

// 4. THE REAPER EXECUTION 💀
export async function runContentReaper(): Promise<ReaperAction[]> {
    const allPages = await fetchPageStats();
    const subReport: ReaperAction[] = [];

    for (const page of allPages) {
        // Step A: Check Immunity
        const immunity = isImmune(page);
        if (immunity.immune) {
            subReport.push({
                url: page.url,
                action: 'KEEP',
                reason: `Immune: ${immunity.reason}`
            });
            continue;
        }

        // Step B: High Impression Rescue (Bad Title?)
        if (page.clicks === 0 && page.impressions > 500) {
            subReport.push({
                url: page.url,
                action: 'UPDATE_TITLE',
                reason: `High Impressions (${page.impressions}) but 0 Clicks`
            });
            continue;
        }

        // Step C: The Reaper Threshold (120 Days Data)
        // Rule: < 10 Impressions AND < 1 Click
        if (page.impressions < 10 && page.clicks < 1) {
            const safeTarget = determineRedirectTarget(page.url);
            subReport.push({
                url: page.url,
                action: 'REDIRECT',
                destination: safeTarget,
                reason: 'Zombie Page (< 10 Imp, 0 Clicks)'
            });
        } else {
            // Keep if it's mediocre but not dead
            subReport.push({
                url: page.url,
                action: 'KEEP',
                reason: 'Mediocre Performance (Above Threshold)'
            });
        }
    }

    return subReport;
}

// 5. CSV GENERATOR
export function generateReaperCSV(actions: ReaperAction[]): string {
    const header = "URL,Action,Reason,Destination (301)\n";
    const rows = actions.map(a =>
        `${a.url},${a.action},"${a.reason}",${a.destination || ''}`
    ).join('\n');
    return header + rows;
}
