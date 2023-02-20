const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@UI': 'src/components/UI',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@hooks': 'src/hooks',
        '@routes': 'src/routes',
        '@services': 'src/services',
        '@styles': 'src/styles',
        '@utils': 'src/utils',
        '@static': 'src/static',
        '@store': 'src/store',
    })(config)

    return config;
}