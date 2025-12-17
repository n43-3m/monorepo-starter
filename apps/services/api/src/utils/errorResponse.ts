import type { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

const errorResponse = ({
	c,
	statusCode = 500,
	message = 'something went wrong',
	errors = [],
}: {
	c: Context
	statusCode?: StatusCode
	message?: string
	errors?: string | string[] | Record<string, unknown>[]
}) => {
	c.status(statusCode)
	return c.json({
		success: false,
		statusCode,
		message,
		errors,
	})
}
export default errorResponse
