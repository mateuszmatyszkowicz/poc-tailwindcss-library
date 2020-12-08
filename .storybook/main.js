module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // IT SOLVES ISSUE WITH NOT IMPORTED SVG IN STORYBOOK
    // https://duncanleung.com/import-svg-storybook-webpack-loader/
    //
    const assetRule = config.module.rules.find(({ test }) => test.test('.svg'))
    const assetLoader = {
      loader: assetRule.loader,
      options: assetRule.options || assetRule.query
    }

    config.module.rules.unshift({
      test: /\.svg$/,
      use: ['@svgr/webpack', assetLoader]
    })
    //
    ////////////////////////////////////////////////////////////////////

    return config
  }
}
