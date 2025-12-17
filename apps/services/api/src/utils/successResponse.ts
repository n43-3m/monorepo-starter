import type { Context } from 'hono'
import type { StatusCode } from 'hono/utils/http-status'

const successResponse = <T>({ c, statusCode = 200, data }: { c: Context; statusCode?: StatusCode; data: T }) => {
	c.status(statusCode)
	return c.json({
		success: true,
		statusCode,
		data,
	})
}
export default successResponse
