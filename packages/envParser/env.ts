import type { z } from "zod";

function EnvParser<T extends z.ZodTypeAny>(envSchema: T): z.infer<T> {
	const result = envSchema.safeParse(process.env);
	if (!result.success) {
		throw new Error(result.error.message);
	}
	return result.data as z.infer<typeof envSchema>;
}

export { EnvParser };
