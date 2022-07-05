/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `https://api.cinema.kriukov.space/:path*`,
				// destination: `http://localhost:4200/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `https://api.cinema.kriukov.space/uploads/:path*`,
				// destination: `http://localhost:4200/api/:path*`,
			},
		]
	},
}

module.exports = nextConfig
