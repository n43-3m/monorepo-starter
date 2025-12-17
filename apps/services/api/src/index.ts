import app from '@/app.js'
import env from './lib/env.js'

export default {
	fetch: app.fetch,
	port: env.PORT || 3000,
}
