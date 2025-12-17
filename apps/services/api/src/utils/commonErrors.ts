import type { Context } from 'hono'
import { HTTPException } from 'hono/http-exception'
import errorResponse from '@/utils/errorResponse.js'

export default async function handleCommonErrors(c: Context, error: unknown): Promise<Response | false> {
	// process the error and send the response if matched common errors

	if (error instanceof HTTPException) {
		return errorResponse({
			c,
			statusCode: error.status,
			message: error.message,
		})
	}

	return false
}
