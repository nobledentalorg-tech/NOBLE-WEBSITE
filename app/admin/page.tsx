import { PrismaClient } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { auth } from '@/src/auth';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

// Server Action to Verify/Delete
async function updateMemory(formData: FormData) {
    'use server';
    
    // Security check for the Action too
    const session = await auth();
    if ((session?.user as any)?.role !== 'admin') throw new Error("Unauthorized");

    const id = formData.get('id') as string;
    const action = formData.get('action') as string;
    const newAnswer = formData.get('answer') as string;

    if (action === 'delete') {
        await prisma.neoMemory.delete({ where: { id } });
    } else if (action === 'verify') {
        await prisma.neoMemory.update({
            where: { id },
            data: { isVerified: true, answer: newAnswer }
        });
    }
    revalidatePath('/admin');
}

interface NeoMemory {
    id: string;
    query: string;
    answer: string;
    isVerified: boolean;
    useCount: number;
}

export default async function AdminPage() {
    const session = await auth();

    // ⛔ SECURITY: Only allow Admins
    if (!session || (session.user as any)?.role !== 'admin') {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-900 p-8">
                <div className="max-w-md text-center">
                    <h1 className="text-4xl font-black mb-4">RESTRICTED</h1>
                    <p className="text-slate-500 mb-6 italic">Current: {session?.user?.email || 'Not Signed In'}</p>
                    <p className="text-slate-500 mb-8 font-medium">This dashboard is limited to Dr. Dhivakaran. If you are the owner, ensure your role is set to 'admin' in the database.</p>
                    
                    <div className="flex flex-col gap-3">
                        <a href="/" className="px-6 py-2 bg-blue-600 text-white rounded-full font-bold">Return Home</a>
                        <form action={async () => { 'use server'; await signOut(); }}>
                            <button className="text-xs text-slate-400 underline uppercase font-bold">Sign Out</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    // Fetch all memories, newest first
    const memories = await prisma.neoMemory.findMany({
        orderBy: { createdAt: 'desc' }
    }) as NeoMemory[];

    return (
        <div className="min-h-screen bg-slate-50 p-8 text-slate-900">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-2">Neo AI Brain Manager</h1>
                <p className="text-slate-500 mb-8">Review and verify what your AI is learning.</p>

                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-100 text-slate-500 text-xs uppercase tracking-wider">
                                <th className="p-4 border-b">Status</th>
                                <th className="p-4 border-b">User Query</th>
                                <th className="p-4 border-b w-1/2">AI Answer (Editable)</th>
                                <th className="p-4 border-b">Stats</th>
                                <th className="p-4 border-b">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {memories.map((mem) => (
                                <tr key={mem.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4">
                                        {mem.isVerified ? (
                                            <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">Verified</span>
                                        ) : (
                                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-bold">Pending</span>
                                        )}
                                    </td>
                                    <td className="p-4 font-medium text-sm">{mem.query}</td>

                                    {/* EDIT FORM */}
                                    <td className="p-4" colSpan={3}>
                                        <form action={updateMemory} className="flex gap-4 items-start w-full">
                                            <input type="hidden" name="id" value={mem.id} />

                                            <textarea
                                                name="answer"
                                                defaultValue={mem.answer}
                                                className="flex-1 p-2 text-sm border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none min-h-[80px]"
                                            />

                                            <div className="flex flex-col gap-2 min-w-[100px]">
                                                <div className="text-xs text-slate-400 text-center mb-1">Used: {mem.useCount}x</div>

                                                <button
                                                    name="action"
                                                    value="verify"
                                                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-bold transition-colors"
                                                >
                                                    {mem.isVerified ? 'Update' : 'Approve'}
                                                </button>

                                                <button
                                                    name="action"
                                                    value="delete"
                                                    className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded text-xs font-bold transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {memories.length === 0 && (
                        <div className="p-12 text-center text-slate-400">No memories recorded yet. Start chatting with Neo!</div>
                    )}
                </div>
            </div>
        </div>
    );
}
