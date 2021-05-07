// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

module.exports = {
  '../react-components/dist/dist-esm/components/SendBox.js': [
    '@azure/communication-chat',
    '@azure/communication-calling',
    '@azure/communication-common'
  ],
  '../acs-chat-declarative/dist/dist-esm/index.js': ['react-components', '@fluentui', 'react'],
  '../acs-calling-declarative/dist/dist-esm/index.js': ['react-components', '@fluentui', 'react'],
  '../acs-chat-selector/dist/dist-esm/index.js': [],
  '../acs-calling-selector/dist/dist-esm/index.js': ['react-components']
};
