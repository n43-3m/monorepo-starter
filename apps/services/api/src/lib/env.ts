import { EnvParser } from '@repo/envparser'
import z from 'zod'

const ENVSchema = z.object({
	PORT: z.coerce
		.number()
		.min(1, 'port must be greater than 0')
		.max(65535, 'port must be less than 65535')
		.default(3000),
	DEPLOYMENT: z.enum(['dev', 'prod']).default('dev'),
	DATABASE_URL: z.string().min(1, 'database url is required'),
})

const env = EnvParser(ENVSchema)

export default env
