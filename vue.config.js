'use strict'
const path = require('path')
const getExternals = require('./externals')
const project = require('./project')
const { publicPath, outputDir, assetsDir, prefixPath } = project

const AutoDllPlugin = require('autodll-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, dir)
}

process.env.VUE_APP_PROJECT = JSON.stringify(project)
process.env.VUE_APP_PREFIX_PATH = prefixPath

module.exports = {
  publicPath,
  outputDir,
  assetsDir,
  transpileDependencies: ['ant-design-vue'],
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/single-spa-child1': {
        target: 'http://localhost:30001',
        origin: true
      },
      '/single-spa-child2': {
        target: 'http://localhost:30002',
        origin: true
      }
    }
  },
  configureWebpack: (config) => {
    const plugins = []
    if (project.isProd) {
      // 配置删除 console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // config.externals = getExternals()
      plugins.push(
        new AutoDllPlugin({
          inject: true,
          filename: '[name].dll.js',
          path: `./${assetsDir}`,
          entry: getExternals(true),
          plugins: [
            new CompressionPlugin({
              test: /\.js$|\.html$|.\css/,
              threshold: 10240,
              deleteOriginalAssets: false
            })
          ]
        }),
        // gzip压缩
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过4k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        }),
        // 获取git提交记录
        new GitRevisionPlugin()
      )
    }
    return {
      plugins
    }
  },
  chainWebpack: config => {
    // 设置目录别名
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('styles', resolve('src/styles'))

    // preload —— 用来指定页面加载后很快会被用到的资源, 提高首屏加载速度
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial'
      }
    ])
    // prefetch —— 用来告诉浏览器在页面加载完成后，利用空闲时间提前获取用户未来可能会访问的内容
    config.plugins.delete('prefetch')

    // HtmlWebpackPlugin插件
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'parent'
        return args
      })

    // 调整内联文件的大小限制为10kb
    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))

    // 去除元素和元素之间的空格，减少文件体积
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    // 配置成功后，调试窗口中源码位置的webpack://根目录下会多出一个src文件夹，里面就有所有的源码了
    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  }
}
