module.exports = ({ platform }, defaults) => ({
  entry: `./index.js`,
  module: {
    ...defaults.module,

    // import { <not_exported_name> } from './file.js';
    strictExportPresence: true,
    // => WARNING: export <not_exported_name> was not found in './file.js'
    // I think this is a warning by default but haul hides warnings by default and
    // this makes it an "error" (which looks like a warning)
  },
});
