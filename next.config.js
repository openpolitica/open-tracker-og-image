module.exports = {
  webpack(config, { isServer }) {
    if (isServer) {
      require('./scripts/optimize-svg');
      config.externals = {
        bufferutil: 'bufferutil',
        'utf-8-validate': 'utf-8-validate',
      };
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  env: {
    api:
      process.env.NEXT_PUBLIC_ENVIRONMENT === 'production'
        ? 'https://api.congreso.openpolitica.com/api/'
        : 'https://api.dev.congreso.openpolitica.com/api/',
  },
};
