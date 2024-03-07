const path = require('path');

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config, { configType }) => {
    // Find the rule for JavaScript/JSX files
    const babelRule = config.module.rules.find(rule =>
      rule && rule.test && (rule.test.toString().includes('.js') || rule.test.toString().includes('.jsx'))
    );

    // Add babel-loader to the rule if found
    if (babelRule) {
      babelRule.use.push({
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-react']
        }
      });
    }

    return config;
  }
};
