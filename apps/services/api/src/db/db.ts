import { SQL } from 'bun'
import { drizzle } from 'drizzle-orm/bun-sql'
import { DefaultLogger } from 'drizzle-orm/logger'
import env from '@/lib/env.js'

export async function checkDb() {
	try {
		const client = new SQL(env.DATABASE_URL)
		await client.connect()
		await client.end()
	} catch (err) {
		console.log('failed to connect to the database.', err)
		process.exit(0)
	}
}

class MyLogger extends DefaultLogger {
	logQuery(query: string, params: unknown[]): void {
		console.log({ query, params })
	}
}
const client = new SQL(env.DATABASE_URL)

const db = drizzle({
	client,
	casing: 'snake_case',
	logger: env.DEPLOYMENT === 'dev' ? new MyLogger() : false,
})

export default db
