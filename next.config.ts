// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/home',
				permanent: true, // or false for a temporary redirect
			},
		];
	},
};

module.exports = nextConfig;
