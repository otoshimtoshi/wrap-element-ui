var path = require('path')
var fs = require('fs')
var nodeExternals = require('webpack-node-externals')

var utilsList = fs.readdirSync(
  path.resolve(__dirname, '../node_modules/element-ui/src/utils'),
)
var mixinsList = fs.readdirSync(
  path.resolve(__dirname, '../node_modules/element-ui/src/mixins'),
)
var transitionList = fs.readdirSync(
  path.resolve(__dirname, '../node_modules/element-ui/src/transitions'),
)
var externals = {}

externals['element-ui/src/locale'] = 'element-ui/lib/locale'
utilsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`element-ui/src/utils/${file}`] = `element-ui/lib/utils/${file}`
})
mixinsList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[`element-ui/src/mixins/${file}`] = `element-ui/lib/mixins/${file}`
})
transitionList.forEach(function(file) {
  file = path.basename(file, '.js')
  externals[
    `element-ui/src/transitions/${file}`
  ] = `element-ui/lib/transitions/${file}`
})

externals = [
  Object.assign(
    {
      vue: 'vue',
    },
    externals,
  ),
  nodeExternals(),
]

exports.externals = externals

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue',
}
