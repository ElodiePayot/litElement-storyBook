const path = require('path');
module.exports = {
  "stories": [
    "../stories/*.stories.mdx",
    "../stories/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss"
  ],
}

webpackFinal: async config => {
  config.module.rules.push(
    {
      test: /\.css|\.s(c|a)ss$/,
      use: [{
        loader: 'lit-scss-loader',
        options: {
          minify: true, // defaults to false
        },
      }, 
      'extract-loader', 'css-loader', 'sass-loader',
      ],
    }
  );
}