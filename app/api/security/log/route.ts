import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Dedicated Prisma Instance for specific logging to avoid pool exhaustion
const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { event_type, ip_address, user_agent, path, metadata } = body;

        // Basic Validation
        if (!event_type) {
            return NextResponse.json({ error: "Missing event_type" }, { status: 400 });
        }

        // Fire-and-Forget DB Write
        const log = await prisma.security_logs.create({
            data: {
                event_type,
                ip_address: ip_address || 'unknown',
                user_agent: user_agent || 'unknown',
                path: path || '/',
                metadata: metadata || {}
            }
        });

        return NextResponse.json({ success: true, id: log.id });
    } catch (error) {
        console.error("[(Failed) Security Log]", error);
        return NextResponse.json({ error: "Logging Failed" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
