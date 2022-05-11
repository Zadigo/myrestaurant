/** @type {import('vls').VeturConfig} */
module.exports = {
    settings: {
        'vetur.useWorkspaceDependencies': true,
        'vetur.experimental.templateInterpolationService': true
    },
    projects: [
        '.',
        {
            root: './front',
            package: 'package.json',
            globalComponents: [
                './src/**/*.vue',
            ]
        },
        {
            root: 'frontend',
            package: 'package.json',
            globalComponents: [
                './src/**/*.vue'
            ]
        },
        {
            root: './mobile',
            package: './package.json',
            globalComponents: [
                './**/*.vue'
            ]
        }
    ]
}
