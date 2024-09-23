export const getClientSite = () => {
  switch (process.env.ENVIRONMENT) {
    case "development":
      return "http://localhost:3000/";
    case "production":
      return "";
    default:
      return "http://localhost:3000/";
  }
};

export const getAppEnvironment = () => {
  switch (process.env.ENVIRONMENT) {
    case "development":
      return "development";
    case "vercel":
      return "vercel";
    case "production":
      return "production";
    default:
      return "development";
  }
};

export const CONFIG = {
  CLIENT_SITE: getClientSite(),
  CLIENT_ENV: getAppEnvironment(),
  GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_API_KEY,
};
