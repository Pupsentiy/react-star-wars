const { alias } = require('react-app-rewire-alias')

module.exports = function override(config, env) {
    alias({
        "@containers": 'src/containers',
        "@components": 'src/components',
        "@constants": 'src/constants',
        "@hoc-helpers": 'src/hoc-helpers',
        "@srvices": 'src/srvices',
        "@utils": 'src/utils',
        "@styles": 'src/styles',

    })(config);

    return config;
}