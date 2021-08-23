module.exports = {
  target: "serverless",
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: "raw-loader",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: {
                  removeViewBox: false,
                },
              },
            },
          },
        ],
      }
    );

    return config;
  },
};
