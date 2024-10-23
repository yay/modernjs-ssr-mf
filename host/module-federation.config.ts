import { createModuleFederationConfig } from '@module-federation/modern-js';

// The plugin uses Module Federation 2.0. New features:
// - build plugin automatically generates and loads types for TypeScript projects,
//   with development mode synchronizing types to ensure safety
// - Chrome dev tools plugin
// - mf-manifest.json file protocol simplifies integration with deployment platforms,
//   allowing for better management of version resources and versions

// https://module-federation.io/practice/frameworks/modern/index.html
// https://modernjs.dev/en/guides/topic-detail/module-federation/introduce.html

export default createModuleFederationConfig({
  name: 'consumer',
  remotes: {
    // `remote` is the request scope, mapped to container location
    remote: 'provider@http://localhost:3006/mf-manifest.json',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
