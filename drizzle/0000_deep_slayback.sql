CREATE TABLE "projects" (
	"id" varchar(36) PRIMARY KEY NOT NULL,
	"title" text,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"slides" text,
	"userId" uuid,
	"outlines" text,
	"isDeleted" boolean DEFAULT false,
	"isSellable" boolean DEFAULT false,
	"varientId" text,
	"thumbnail" text,
	"themeName" varchar(32) DEFAULT 'light'
);
--> statement-breakpoint
CREATE TABLE "purchased_projects" (
	"user_id" uuid,
	"project_id" varchar(36)
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"clerkId" varchar(255),
	"name" varchar(255),
	"email" varchar(255),
	"profileImage" text,
	"subscription" boolean DEFAULT false,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"lemonSqueezyApiKey" text,
	"storeId" text,
	"webhookSecret" text,
	CONSTRAINT "users_clerkId_unique" UNIQUE("clerkId"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "purchased_projects" ADD CONSTRAINT "purchased_projects_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "purchased_projects" ADD CONSTRAINT "purchased_projects_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE no action ON UPDATE no action;