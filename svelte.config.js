import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: { handleHttpError: 'ignore' },
		paths: {
	 		base: process.env.NODE_ENV === "production" ? "/pelenaDesign" : "",
		},
	}
};

export default config;