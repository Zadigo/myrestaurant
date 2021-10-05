/** @type {import('vls').VeturConfig} */
module.exports = {
    settings: {
        'vetur.useWorkspaceDependencies': true,
        'vetur.experimental.templateInterpolationService': true
    },
    projects: [
        // '.',
        {
            root: './front',
            package: './package.json',
            globalComponents: [
                './src/components/**/*.vue',
                './src/views/**/*.vue',
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
