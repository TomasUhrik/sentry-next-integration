const SentryWebpackPlugin = require('@sentry/webpack-plugin');

module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config

        // Example using webpack option
        config.plugins.push(
            new webpack.IgnorePlugin(/\/__tests__\//),
            new SentryWebpackPlugin({
                include: '.',
                ignoreFile: '.sentrycliignore',
                ignore: ['node_modules', 'webpack.config.js'],
                configFile: 'sentry.properties'
            })
        );
        return config
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config
    },
}