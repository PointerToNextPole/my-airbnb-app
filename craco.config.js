const path = require('path')
const CracoLessPlugin = require('craco-less')

const pathResolve = pathStr => path.resolve(__dirname, pathStr)

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      "@": pathResolve('src'),
      "cpn": pathResolve('src/components'),
      "utils": pathResolve('src/utils'),
    }
  },
}