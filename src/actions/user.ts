import { db } from "@/db/client"
import { eq } from "drizzle-orm"
import { users, purchasedProjects, projects } from "@/db/schema"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticateUser = async () => {
    try {
        const user = await currentUser()
        if (!user) {
            return { status: 403 }
        }

        // Find user by clerkId
        const userExistsArr = await db
            .select()
            .from(users)
            .where(eq(users.clerkId, user.id))
        const userExists = userExistsArr[0]

        if (userExists) {
            // Get purchased project ids for this user
            const purchased = await db
                .select({ id: projects.id })
                .from(purchasedProjects)
                .innerJoin(
                    projects,
                    eq(purchasedProjects.projectId, projects.id),
                )
                .where(eq(purchasedProjects.userId, userExists.id))
            return {
                status: 200,
                user: {
                    ...userExists,
                    purchasedProjects: purchased,
                },
            }
        }

        // Create new user
        const newUserArr = await db
            .insert(users)
            .values({
                clerkId: user.id,
                email: user.emailAddresses[0].emailAddress,
                name: user.firstName + " " + user.lastName,
                profileImage: user.imageUrl,
            })
            .returning()
        const newUser = newUserArr[0]
        if (newUser) {
            return { status: 201, user: newUser }
        }
        return { status: 404 }
    } catch (error) {
        console.error("Error fetching user:", error)
        return { status: 500, error: "Internal Server Error" }
    }
}
