const businessPath = (sublink) => `/business/${sublink}`;

const ROOT = "/";

export const PATH_AUTH = {
  root: ROOT,
  login: "/login",
  register: "/register",
  verify: "/verify",
  forgotPassword: "/forgotPassword",
};

export const PATH_BUSINESS = {
  login: businessPath("login"),
  register: businessPath("register"),

  business: {
    root: businessPath("list"),
    add: businessPath("add"),
    claim: businessPath("claim"),
  },

  dashboard: (businessId) => businessPath(`${businessId}/dashboard`),
  listings: (businessId) => businessPath(`${businessId}/dashboard/listings`),
  events: {
    root: (businessId) => businessPath(`${businessId}/dashboard/events`),
  },
  collaborations: (businessId) =>
    businessPath(`${businessId}/dashboard/collaborations`),
  qapage: {
    root: (businessId) => businessPath(`${businessId}/dashboard/qapage`),
    clientQueries: (businessId) =>
      businessPath(`${businessId}/dashboard/qapage/client-queries`),
  },
  reviews: {
    root: (businessId) => businessPath(`${businessId}/dashboard/reviews`),
    view: (businessId, reviewId) =>
      businessPath(`${businessId}/dashboard/reviews/${reviewId}`),
  },
  settings: {
    root: (businessId) => businessPath(`${businessId}/dashboard/settings`),
    profile: (businessId) =>
      businessPath(`${businessId}/dashboard/settings/profile`),
    businessProfile: (businessId) =>
      businessPath(`${businessId}/dashboard/settings/business-profile`),
  },
  promotions: {
    root: (businessId) => businessPath(`${businessId}/dashboard/promotions`),
  },
  advertisement: {
    root: (businessId) => businessPath(`${businessId}/dashboard/advertisement`),
  },
};

export const PATH_PAGE = {
  page404: "/404",
  termsAndConditions: "/terms-conditions",
};

export const PATH_DASHBOARD = {
  root: ROOT,
};

export const PATH_VISITOR = {
  businesses: "/businesses",
  businessDetail: (businessId) => `/businesses/${businessId}`,
  businessMenu: (businessId) => `/businesses/${businessId}/menu`,
  advertise: "/advertise",
  businessListing: "/visitor-business",
  termsAndConditions: "/terms-of-service",
  privacyAndPolicy: "/privacy-policy",
  contactUs: "/contact-us",
};
export const PATH_SOCIAL = {
  socialUser: "/social-user",
  socialFeatures: "/social-features",
  socialFeaturesUser:"/social-features-user"
};
