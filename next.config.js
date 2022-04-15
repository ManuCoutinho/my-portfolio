/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

const isProd = process.env.NODE_ENV === 'production'
const ghPage = {
  assetPrefix: isProd ? 'manucoutinho.github.io/' : ''
}

;(module.exports = nextConfig), ghPage
