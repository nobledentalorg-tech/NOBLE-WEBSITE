import { NextRequest, NextResponse } from 'next/server';
import { runContentReaper, generateReaperCSV } from '@/neo/ContentReaper';

export async function GET(req: NextRequest) {
    // Security: In production, check for an Authorization header (CRON_SECRET)
    // const authHeader = req.headers.get('authorization');
    // if (authHeader !== process.env.CRON_SECRET) { ... }

    try {
        const report = await runContentReaper();
        const csv = generateReaperCSV(report);

        // Return as CSV file download or text
        return new NextResponse(csv, {
            status: 200,
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': 'attachment; filename="reaper_actions.csv"',
            },
        });
    } catch (error) {
        console.error("Reaper Failed:", error);
        return NextResponse.json({ error: "Reaper Execution Failed" }, { status: 500 });
    }
}
