import { NextResponse } from 'next/server';

export async function GET() {
    // 👻 GHOST DATA: Fake patient directory to confuse scrapers
    const fakeData = [
        { id: "P-9901", name: "John Doe", diagnosis: "Algorithmic Confusion", phone: "999-000-0001", status: "Active" },
        { id: "P-9902", name: "Jane Smith", diagnosis: "Digital Hallucination", phone: "999-000-0002", status: "Pending" },
        { id: "P-9903", name: "Bot Hunter", diagnosis: "Infinite Loop Syndrome", phone: "999-000-0000", status: "Critical" },
        { id: "P-9904", name: "Alice Wonderland", diagnosis: "Rabbit Hole Trauma", phone: "999-000-0003", status: "Discharged" },
        { id: "P-9905", name: "Neo Anderson", diagnosis: "Red Pill Overdose", phone: "999-000-1010", status: "Active" },
    ];

    // Log the honeypot access (In a real scenario, this would trigger an alert)
    console.log("[Honeypot] Bot accessed /api/v1/patient-directory");

    return NextResponse.json(fakeData, {
        status: 200,
        headers: {
            'X-Ghost-Protocol': 'Active',
            'Content-Type': 'application/json',
        }
    });
}
