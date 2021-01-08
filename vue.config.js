const { execSync } = require('child_process')
const gitVersion = execSync('git rev-parse --short HEAD').toString().trim()

process.env.VUE_APP_GIT_VERSION = gitVersion

module.exports = {
  publicPath: './',
  outputDir: 'dist',
  productionSourceMap: false,
}
