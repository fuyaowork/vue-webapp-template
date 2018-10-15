var path = require('path')
function resolve (dir) {
  // console.log(__dirname)
  // return path.join(__dirname, dir)
  return path.join(__dirname, '..', dir)
}

module.exports = {
    outputDir: process.env.outputDir,
    assetsDir: 'static',
    // devServer: {
    //     proxy: {
    //         '/': {
    //             target: 'http://franchiseepc.ynbyweishang.com',
    //             changeOrigin: true,
    //             ws: false,
    //         },
    //     }
    // },
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('static', resolve('static')) // key,value自行定义，比如.set('@@', resolve('src/components'))
    // }
}