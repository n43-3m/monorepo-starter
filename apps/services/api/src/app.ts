import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import env from '@/lib/env.js'
import handleCommonErrors from '@/utils/commonErrors.js'
import errorResponse from '@/utils/errorResponse.js'

const app = new Hono()

///////////////////
// global middlewares
///////////////////
app.use(cors())
app.use(logger())

///////////////////
/// routes
///////////////////
app.get('/', (c) => {
	return c.text('Hello Hono!')
})

///////////////////
// not found handler
///////////////////
app.notFound((c) => {
	return errorResponse({ c, statusCode: 404, message: 'not found' })
})

///////////////////
// error handler
///////////////////
app.onError(async (err, c) => {
	if (env.DEPLOYMENT !== 'prod') {
		console.error('ERROR ', err)
	}
	const handled = await handleCommonErrors(c, err)
	if (handled) {
		return handled
	}
	return errorResponse({ c, message: 'internal server error' })
})

export default app
