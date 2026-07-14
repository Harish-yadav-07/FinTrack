import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function createTransaction(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized!");

        // Arcjet to add rate limiting
        

        const user = await db.user.findUnique({
            where: { clerkUserId: userId },
        });

        if (!user) {
            throw new Error("User Not Found");
        }

        const account = await db.account.findUnique({
            where:{
                id: data.accountId,
                userId: user.id,
            },
        })
    } catch (error) {

    }
}