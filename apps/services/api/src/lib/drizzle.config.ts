import dotenv from 'dotenv'
import { defineConfig } from 'drizzle-kit'

dotenv.config({ path: './../.env' })

if (!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL is not defined in .env file')
}

export default defineConfig({
	out: './src/db/migrations/',
	schema: './src/db/models/*',
	dialect: 'postgresql',
	dbCredentials: {
		url: process.env.DATABASE_URL,
	},
})
