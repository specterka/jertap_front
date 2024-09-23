import i18n from "@/locales/i18n";

export const TOAST_ALERTS = {
  LOGIN_SUCCESS: i18n.t("constants.keywords.alerts.auth.login.success"),

  PASSWORD_CHANGE_SUCCESS: i18n.t(
    "constants.keywords.alerts.auth.password.change"
  ),
  PASSWORD_RESET_SUCCESS: i18n.t(
    "constants.keywords.alerts.auth.password.reset"
  ),

  PASSWORD_CODE_SENT_SUCCESS: i18n.t("constants.keywords.alerts.auth.otp.code"),

  VISITOR_SIGN_UP_SUCCESS: i18n.t(
    "constants.keywords.alerts.auth.register.success"
  ),

  LOGOUT_SUCCESS: i18n.t("constants.keywords.alerts.auth.logout.success"),
  OTP_SENT_SUCCESS: i18n.t("constants.keywords.alerts.auth.otp.sent"),
  OTP_VERIFY_SUCCESS: i18n.t("constants.keywords.alerts.auth.otp.verify"),

  USER_PROFILE_UPDATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.auth.profile.user.update"
  ),
  BUSINESS_ADDRESS_UPDATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.auth.profile.business.update"
  ),
  BUSINESS_STATUS_UPDATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.auth.profile.business.status"
  ),

  BUSINESS_CREATE_SUCCESS: i18n.t("constants.keywords.alerts.business.create"),

  ADD_CATEGORY_TO_BUSINESS_SUCCESS: i18n.t(
    "constants.keywords.alerts.category.add"
  ),

  CLAIM_SUBMIT_SUCCESS: i18n.t("constants.keywords.alerts.claim.submit"),

  NOTIFICATION_MARK_AS_READ: i18n.t(
    "constants.keywords.alerts.notification.read"
  ),

  BUSINESS_MENU_CREATE_SUCCESS: i18n.t("constants.keywords.alerts.menu.create"),
  BUSINESS_MENU_DELETE_SUCCESS: i18n.t("constants.keywords.alerts.menu.delete"),
  BUSINESS_MENU_UPDATE_SUCCESS: i18n.t("constants.keywords.alerts.menu.update"),
  BUSINESS_MENUS_UPLOAD_SUCCESS: i18n.t(
    "constants.keywords.alerts.menu.upload"
  ),

  QA_LIST_DELETE_SUCCESS: i18n.t("constants.keywords.alerts.qa.delete"),
  QA_LIST_UPDATED_SUCCESS: i18n.t("constants.keywords.alerts.qa.update"),

  QUERY_REPLAY_ADD_SUCCESS: i18n.t("constants.keywords.alerts.query.add"),
  QUERY_REPLAY_UPDATE_SUCCESS: i18n.t("constants.keywords.alerts.query.update"),

  BUSINESS_ADD_MANAGER_SUCCESS: i18n.t("constants.keywords.alerts.manager.add"),

  BUSINESS_REMOVE_MANAGER_SUCCESS: i18n.t(
    "constants.keywords.alerts.manager.delete"
  ),
  BUSINESS_UPDATE_MANAGER_SUCCESS: i18n.t(
    "constants.keywords.alerts.manager.update"
  ),

  GENERAL_ERROR: i18n.t("constants.keywords.alerts.errors.general"),

  RESTAURANT_SERVICES_DELETE_SUCCESS: i18n.t(
    "constants.keywords.alerts.service.delete"
  ),
  RESTAURANT_SERVICES_CREATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.service.create"
  ),

  BUSINESS_IMAGE_UPLOAD_SUCCESS: i18n.t(
    "constants.keywords.alerts.business.image.upload"
  ),
  BUSINESS_IMAGE_DELETE_SUCCESS: i18n.t(
    "constants.keywords.alerts.business.image.delete"
  ),

  BUSINESS_TIMING_UPDATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.timing.update"
  ),

  BUSINESS_REVIEW_REPORT_SUCCESS: i18n.t(
    "constants.keywords.alerts.reviewReport.report"
  ),
  BUSINESS_REVIEW_REPLAY_SUCCESS: i18n.t(
    "constants.keywords.alerts.reviewReport.replay"
  ),

  BUSINESS_CUISINE_CREATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.cuisine.create"
  ),
  BUSINESS_CUISINE_DELETE_SUCCESS: i18n.t(
    "constants.keywords.alerts.cuisine.delete"
  ),

  BUSINESS_PAYMENT_METHOD_CREATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.paymentMethod.create"
  ),
  BUSINESS_PAYMENT_METHOD_DELETE_SUCCESS: i18n.t(
    "constants.keywords.alerts.paymentMethod.delete"
  ),

  BUSINESS_PROMOTION_CREATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.promotion.create"
  ),
  BUSINESS_PROMOTION_DELETE_SUCCESS: i18n.t(
    "constants.keywords.alerts.promotion.delete"
  ),
  BUSINESS_PROMOTION_UPDATE_SUCCESS: i18n.t(
    "constants.keywords.alerts.promotion.update"
  ),

  RESTAURANT_QUERY_SUCCESS: "Your Question asked to restaurant",
  ADD_BUSINESS_FAVORITE_SUCCESS: "Business marked as favorite successfully",
  REMOVE_BUSINESS_FAVORITE_SUCCESS:
    "Business unmarked as favorite successfully",
  BUSINESS_REVIEW_ADD_SUCCESS: "Business review added successfully",
  BUSINESS_REVIEW_UPDATE_SUCCESS: "Business review updated successfully",
  BUSINESS_REVIEW_REMOVE_SUCCESS: "Business review deleted successfully",

  BUSINESS_EVENT_CREATE_SUCCESS: "Business event created successfully",
  BUSINESS_EVENT_UPDATE_SUCCESS: "Business event updated successfully",
  BUSINESS_EVENT_DELETE_SUCCESS: "Business event deleted successfully",

  BUSINESS_ADS_REQUEST_SUCCESS: "Business ads requested successfully",

  COPY_SUCCESS: "Copied successfully",

  ADD_POST_SUCCESS: "Post created  successfully",
  ADD_EVENT_SUCCESS: "Event created  successfully",

  DELETE_COMMENT_SUCCESS: "Comment deleted successfully",
  DELETE_POST_SUCCESS: "Post deleted successfully",

  ADD_USER_DISPUTE_SUCCESS : "Your Question asked successfully",

  SELECT_CITY_ERROR : "Please add restaurant name or city to search",

  ACCEPT_REQUEST_SUCCESS : "Follw Request Accept successfully",
  DELETE_REQUEST_SUCCESS : "Follw Request Delete successfully",


};

export const TOAST_TYPES = {
  SUCCESS: "success",
  WARN: "warn",
  INFO: "info",
  ERROR: "error",
};

export const STORAGE_KEYS = {
  AUTH: "@auth",
  AUTH_TOKEN: "@accessToken",
  AUTH_REFRESH_TOKEN: "@refreshToken",
  SETTINGS: "@settings",
  RETURN_TO : "@returnTo"
};

export const AUTH_PROVIDERS = {
  EMAIL: "email",
  MOBILE_NUMBER: "mobile-number",
  FACEBOOK: "fb",
  GOOGLE: "google",
};

export const USER_TYPES = {
  VISITOR: "visitor",
  BUSINESS_OWNER: "business-owner",
  RESTAURANT_MANAGER: "restaurant-manager",
  ADMIN: "admin",
};

export const USER_TYPES_MAPPER = {
  [USER_TYPES.BUSINESS_OWNER]: i18n.t("constants.keywords.roles.owner"),
  [USER_TYPES.VISITOR]: i18n.t("constants.keywords.roles.visitor"),
  [USER_TYPES.RESTAURANT_MANAGER]: i18n.t("constants.keywords.roles.manager"),
  [USER_TYPES.ADMIN]: i18n.t("constants.roles.keywords.admin"),
};

export const BUSINESS_STATUS = {
  NOT_CREATED: i18n.t("constants.keywords.businessStatus.notCreated"),
  UNDER_REVIEW: i18n.t("constants.keywords.businessStatus.underReview"),
  APPROVED: i18n.t("constants.keywords.businessStatus.approved"),
};

export const BUSINESS_TYPES = {
  CAFE: "cafe",
  RESTAURANT: "restaurant",
};

export const DAYS = [
  { label: "Sunday", value: "Sunday" },
  { label: "Monday", value: "Monday" },
  { label: "Tuesday", value: "Tuesday" },
  { label: "Wednesday", value: "Wednesday" },
  { label: "Thursday", value: "Thursday" },
  { label: "Friday", value: "Friday" },
  { label: "Saturday", value: "Saturday" },
];

export const OFFER_TYPES = [
  { label: "Percentage", value: "percentage" },
  { label: "Fixed amount", value: "fixed_amount" },
  { label: "BOGO", value: "bogo" },
];
