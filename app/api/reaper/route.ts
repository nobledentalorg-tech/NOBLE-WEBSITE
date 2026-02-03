import { NextRequest, NextResponse } from 'next/server';
import { runContentReaper, generateReaperCSV } from '@/neo/ContentReaper';

export async function GET(req: NextRequest) {
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

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
