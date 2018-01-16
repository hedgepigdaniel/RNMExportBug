module.exports = ({ platform }, defaults) => ({
  entry: `./index.js`,
  module: {
    ...defaults.module,

    // import { <not_exported_name> } from './file.js';
    strictExportPresence: true,
    // => WARNING: export <not_exported_name> was not found in './file.js'
    // I think this is a warning by default but haul hides warnings by default and
    // this makes it an "error" (which looks like a warning)

    rules: [
      ...defaults.module.rules,
      {
        test: /node_modules\/react-native-maps\/.*.js/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              ['env', {
                // This is the default, but preempts the other babel-loader using .babelrc
                // This is because react-native-maps has es6 modules with
                // `module.exports = ...;` at the end of each file instead of `export default ...;`
                modules: 'commonjs',
              }]
            ],
          },
        },
      },
    ],
  },
});
