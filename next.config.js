module.exports = {
  reactStrictMode: true
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  assetPrefix: isProd ? 'manucoutinho.github.io/' : ''
}
