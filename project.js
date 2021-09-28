const isProd = process.env.NODE_ENV === 'production'
const packageJSON = require('./package.json')
const publicPath = '/single-spa-parent/'
const outputDir = 'dist'
const assetsDir = 'static'
const staticPath = `${publicPath}${assetsDir}`

const project = {
  title: 'parent',
  name: 'traffic_permit',
  publicPath,
  outputDir,
  assetsDir,
  isProd,
  staticPath,
  prefixPath: isProd ? staticPath : '',
  version: packageJSON.version
}

module.exports = project
