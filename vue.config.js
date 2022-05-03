module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/lyq.github.io/'//这里写展示页面的仓库名称
    : '/',
    outputDir: "dist", // 输出文件目录
    assetsDir: "static"//静态资源文件名称
}