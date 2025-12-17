import { zValidator as zv } from '@hono/zod-validator'
import type { ValidationTargets } from 'hono'
import type z from 'zod'
import errorResponse from './errorResponse.js'

export const inputValidator = <T extends z.ZodType, Target extends keyof ValidationTargets>(
	target: Target,
	schema: T
) =>
	zv(target, schema, (result, c) => {
		if (!result.success) {
			const validationErrors = result.error.issues.map((issue) => ({
				path: issue.path,
				message: issue.message,
			}))
			return errorResponse({
				c,
				statusCode: 400,
				message: 'Validation failed',
				errors: validationErrors,
			})
		}
	})
