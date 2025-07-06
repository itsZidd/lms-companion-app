# LMS Companion App

A Learning Management System application built with [Next.js](https://nextjs.org).
## Screenshots
<div align="center">
  <img src="https://github.com/user-attachments/assets/6d6c46e2-f883-495a-9433-d6b5137dd536" alt="Landing Page" width="500">
  <p><em>Landing Page</em></p>
</div>

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) v1.2.17
- [Node.js](https://nodejs.org/) v22.16.0
- Database (configured via environment variables)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Fill in your environment variables in the `.env` file.

4. Run the development server:

   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Features

- Modern Next.js 14+ with App Router
- TypeScript support
- Drizzle ORM for database management
- Optimized fonts with `next/font`
- Component-based architecture

## Project Structure

```
src/
├── app/             # Next.js app directory (routes, layouts, pages)
├── components/      # Reusable UI components
├── db/              # Database schema and logic
├── lib/             # Utility libraries and configurations
└── ...
public/              # Static assets (images, icons, etc.)
drizzle.config.ts    # Drizzle ORM configuration
.env                 # Environment variables (not tracked in git)
```

## Available Scripts

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `bun dev`             | Start the development server         |
| `bun run build`       | Build the application for production |
| `bun start`           | Start the production server          |
| `bun run lint`        | Run ESLint for code linting          |
| `bun run db:generate` | Generate database migrations         |
| `bun run db:migrate`  | Run database migrations              |

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DATABASE_URL=

# Authorization (clerk)
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY= # removed
# CLERK_SECRET_KEY= # removed
```

## Database

This project uses [Drizzle ORM](https://orm.drizzle.team/) for database management. The database schema and configuration can be found in the `src/db/` directory.

<!-- ## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

### Other Platforms

This application can be deployed on any platform that supports Node.js applications, such as:

- Railway
- Render
- DigitalOcean App Platform
- AWS
- Google Cloud Platform -->

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Drizzle ORM Documentation](https://orm.drizzle.team/) - Learn about Drizzle ORM
- [Bun Documentation](https://bun.sh/docs) - Learn about Bun runtime and package manager

<!-- ## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request -->

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/itsZidd/lms-companion-app/issues) on GitHub.

# Clerk mention removed for migration to new auth provider
# TODO: Add documentation for your new auth provider here
