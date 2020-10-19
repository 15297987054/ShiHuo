const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');

const path = require('path')
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        "@api": path.resolve(__dirname, './src/api'),
        '@actions': path.resolve(__dirname, './src/actions'),
        '@common': path.resolve(__dirname, './src/common'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@store': path.resolve(__dirname, './src/store'),
        '@router': path.resolve(__dirname, './src/router'),
        '@api':path.resolve(__dirname,'./src/api'),
        '@mockData':path.resolve(__dirname,'./src/mockData')

    })
);