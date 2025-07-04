import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        elements: {
          // This targets the main text in Clerk forms
          formFieldInput: "text-slate-400 dark:text-slate-500",
          // This targets labels and other text
          formFieldLabel: "text-slate-400 dark:text-slate-500",
          // You can add more Clerk element keys as needed
        },
      }}
    />
  );
}
