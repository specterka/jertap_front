const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  async redirects() {
    return [
      {
        source: "/api/auth/signin",
        destination: "/login",
        permanent: false,
      },
    ];
  },
  env: {
    HOST_API: process.env.HOST_API,
    SECRET_KEY: process.env.SECRET_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    GOOGLE_ANALYTICS_MEASUREMENT_ID:
      process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    PROJECT_ENV: process.env.PROJECT_ENV,
  },
  serverRuntimeConfig: {
    HOST_API: process.env.HOST_API,
    SECRET_KEY: process.env.SECRET_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    GOOGLE_ANALYTICS_MEASUREMENT_ID:
      process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    PROJECT_ENV: process.env.PROJECT_ENV,
  },
  publicRuntimeConfig: {
    HOST_API: process.env.HOST_API,
    SECRET_KEY: process.env.SECRET_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
    GOOGLE_ANALYTICS_MEASUREMENT_ID:
      process.env.GOOGLE_ANALYTICS_MEASUREMENT_ID,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY,
    PROJECT_ENV: process.env.PROJECT_ENV,
  },
};

module.exports = nextConfig;
