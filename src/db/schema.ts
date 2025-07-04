import {
    pgTable,
    uuid,
    varchar,
    text,
    boolean,
    timestamp,
} from "drizzle-orm/pg-core"

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(), // gen_random_uuid()
    clerkId: varchar("clerkId", { length: 255 }).unique(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", { length: 255 }).unique(),
    profileImage: text("profileImage"),
    subscription: boolean("subscription").default(false),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" })
        .defaultNow()
        .$onUpdate(() => new Date()),
    lemonSqueezyApiKey: text("lemonSqueezyApiKey"),
    storeId: text("storeId"),
    webhookSecret: text("webhookSecret"),
})

export const projects = pgTable("projects", {
    id: varchar("id", { length: 36 }).primaryKey(), // cuid() or uuid
    title: text("title"),
    createdAt: timestamp("createdAt", { mode: "date" }).defaultNow(),
    updatedAt: timestamp("updatedAt", { mode: "date" })
        .defaultNow()
        .$onUpdate(() => new Date()),
    slides: text("slides"), // Store JSON as string, handle parse/stringify in app
    userId: uuid("userId").references(() => users.id),
    outlines: text("outlines"), // Store string[] as JSON string
    isDeleted: boolean("isDeleted").default(false),
    isSellable: boolean("isSellable").default(false),
    varientId: text("varientId"),
    thumbnail: text("thumbnail"),
    themeName: varchar("themeName", { length: 32 }).default("light"),
})

export const purchasedProjects = pgTable("purchased_projects", {
    userId: uuid("user_id").references(() => users.id),
    projectId: varchar("project_id", { length: 36 }).references(
        () => projects.id,
    ),
})
