export const API_ROUTER = {
  LOGIN: (provider) => `users/login-with/${provider}/`,
  VISITOR_REGISTER: "users/registration/",
  FORGOT_PASSWORD_EMAIL: "users/send-password-reset-code-mail/",
  RESET_PASSWORD: "users/reset-password/",
  REFRESH_TOKEN: "users/token-refresh/",
  GET_USER: "users/user-profile/",
  UPDATE_USER: "users/user-profile/",
  UPDATE_RESTRO_DETAIL: "owner/restaurant-details/",
  UPDATE_ADDRESS_DETAIL: (businessId) =>
    `owner/restaurant-address/${businessId}/`,
  GET_PROFILE_BASIC_DETAILS: (businessId) =>
    `owner/restaurant-details/${businessId}/`,
  UPDATE_BASIC_DETAILS: (businessId) =>
    `owner/restaurant-details/${businessId}/`,

  // BUSINESS
  BUSINESS_REGISTER: "users/owner-registration/",
  BUSINESS_LOGIN: (provider) => `users/owner-login-with/${provider}/`,
  BUSINESS_VERIFY_CODE: "users/owner-login/verify-login-otp/",

  CREATE_BUSINESS: "owner/create-restaurant/",
  CHECK_BUSINESS_STATUS: "core/check-restaurant-status/",
  GET_OWNER_RESTAURANTS: "owner/owner-restaurants/",
  GET_UNCLAIMED_BUSINESS: "owner/restaurants-unclaimed/",
  CLAIM_BUSINESS: "owner/add-claim-request/",

  GET_ALL_CATEGORIES: (businessId) => `owner/all-category/${businessId}/`,
  ADD_CATEGORY_RESTAURANT: "owner/add-restaurant-category/",
  GET_BUSINESS_CATEGORY_COUNT: (businessId) =>
    `owner/dashboard-category-count/${businessId}/`,
  GET_NOTIFICATIONS: (businessId) => `owner/notifications/${businessId}/`,
  MARK_AS_READ_NOTIFICATION: (businessId, id) =>
    `owner/mark-as-read/${businessId}/${id}/`,

  GET_ADDRESS_DETAILS: (businessId) =>
    `owner/restaurant-address/${businessId}/`,

  GET_MONTHLY_RATINGS: (businessId) => `owner/monthly-rating/${businessId}/`,
  GET_BUSINESS_DETAIL: (businessId) =>
    `owner/restaurant-details/${businessId}/`,
  GET_BUSINESS_ADDRESS: (businessId) =>
    `owner/restaurant-address/${businessId}/`,
  UPDATE_BUSINESS_ADDRESS: (businessId) =>
    `owner/restaurant-address/${businessId}/`,

  GET_CUISINES_LIST: "/owner/cuisines-list/",
  GET_RESTAURANT_MENUS: (businessId) => `owner/restaurant-menu/${businessId}/`,
  UPLOAD_BUSINESS_MENUS: (businessId) =>
    `owner/restaurant-upload-menu-csv/${businessId}/`,
  GET_COLLABORATION_LIST: "owner/collaborators/",
  GET_REVIEW_LIST: (businessId) =>
    `owner/restaurant-review-list/${businessId}/`,
  GET_REVIEW_LIST_ID: (businessId, id) =>
    `owner/restaurant-review-detail/${businessId}/${id}/`,
  GET_SUB_CATEGORIES: (businessId) =>
    `owner/restaurant-sub-categories/${businessId}/`,
  CREATE_REVIEW_REPORT: (businessId, id) =>
    `owner/restaurant-review-detail/${businessId}/${id}/`,
  REPLAY_REVIEW: `owner/replay-to-restaurant-review/`,

  CREATE_BUSINESS_MENU: (businessId) =>
    `owner/restaurant-add-menu-item/${businessId}/`,
  UPDATE_BUSINESS_MENU: (businessId, menuId) =>
    `owner/restaurant-update-menu-item/${businessId}/${menuId}/`,
  DELETE_BUSINESS_MENU: (businessId, id) =>
    `owner/restaurant-menu-item/delete/${businessId}/${id}/`,

  DELETE_MENU_ITEM_IMAGE: (businessId, imageId) =>
    `owner/restaurant-delete-menu-item-image/${businessId}/${imageId}/`,
  DELETE_MENU_ITEM_INGREDIENT: (businessId, ingredientId) =>
    `owner/restaurant-delete-menu-item-ingredient/${businessId}/${ingredientId}/`,

  GET_QA_LIST: (businessId) => `owner/q&a-list/${businessId}/`,
  DELETE_QA_LIST: (businessId, id) => `owner/q&a-delete/${businessId}/${id}/`,

  GET_CLIENT_QUERIES: (businessId) => `owner/public-queries/${businessId}/`,
  REPLAY_CLIENT_QUERY: (businessId, id) =>
    `owner/answer-public-queries/${businessId}/${id}/`,

  CREATE_BUSINESS_MANAGER: (businessId) =>
    `owner/create-manager/${businessId}/`,
  GET_BUSINESS_MANAGERS: (businessId) => `owner/manager/${businessId}/`,
  UPDATE_BUSINESS_MANAGER: (managerId) => `owner/manager/${managerId}/`,
  SET_BUSINESS_MANAGER: (businessId) => `owner/set-manager/${businessId}/`,
  GET_EXISTING_MANAGERS: `owner/existing-users`,

  DELETE_RESTRODETAIL_IMAGE: (businessId) =>
    `restaurant-image-delete/${businessId}/`,

  CREATE_QA_LIST: (businessId) => `owner/q&a-create/${businessId}/`,

  GET_RESTAURANT_SERVICES: (businessId) =>
    `owner/restaurant-services/${businessId}/`,

  DELETE_RESTAURANT_SERVICES: (businessId, id) =>
    `owner/remove-services/${businessId}/${id}/`,

  GET_ALL_RESTAURANT_SERVICES: (businessId) =>
    `owner/all-services/${businessId}/`,

  ADD_RESTAURANT_SERVICES: (businessId) => `owner/add-services/${businessId}/`,
  UPLOAD_BUSINESS_IMAGE: (businessId) =>
    `owner/restaurant-upload-images/${businessId}/`,
  DELETE_BUSINESS_IMAGE: (businessId, imageId) =>
    `owner/restaurant-image-delete/${businessId}/${imageId}/`,

  GET_BUSINESS_TIMINGS: (businessId) =>
    `owner/restaurant-timings/${businessId}/`,
  UPDATE_BUSINESS_TIMING: (businessId, timingId) =>
    `owner/restaurant-time-update/${businessId}/${timingId}/`,

  GET_MENU_TYPES: "owner/menu-types/",

  GET_CITIES: "owner/all-cities/",
  GET_TYPES: "owner/all-business-types/",
  GET_STATES: "owner/all-states/",

  GET_ALL_CUISINES: (businessId) => `owner/all-cuisines/${businessId}/`,
  GET_BUSINESS_CUISINES: (businessId) =>
    `owner/restaurant-cuisine/${businessId}/`,
  ADD_BUSINESS_CUISINE: (businessId) => `owner/add-cuisine/${businessId}/`,
  DELETE_BUSINESS_CUISINE: (businessId, id) =>
    `owner/remove-cuisine/${businessId}/${id}/`,

  GET_ALL_PAYMENT_METHODS: (businessId) =>
    `owner/all-payment-modes/${businessId}/`,
  ADD_BUSINESS_PAYMENT_METHOD: (businessId) =>
    `owner/add-payment-method/${businessId}/`,
  DELETE_BUSINESS_PAYMENT_METHOD: (businessId, id) =>
    `owner/remove-payment-method/${businessId}/${id}/`,
  GET_BUSINESS_PAYMENT_METHODS: (businessId) =>
    `owner/restaurant-payment-methods/${businessId}/`,

  GET_BUSINESS_PROMOTIONS: (businessId) => `owner/promotions/${businessId}/`,
  GET_ALL_MENU_ITEMS: (businessId) => `owner/menu-item-dropdown/${businessId}/`,
  CREATE_PROMOTION: (businessId) => `owner/create-promotions/${businessId}/`,
  GET_BUSINESS_PROMOTION: (businessId, id) =>
    `owner/promotions/${businessId}/${id}/`,
  DELETE_BUSINESS_PROMOTION_DAY: (businessId, id) =>
    `owner/delete-promotion-day/${businessId}/${id}/`,
  DELETE_BUSINESS_PROMOTION_ITEM: (businessId, id) =>
    `owner/delete-promotion-item/${businessId}/${id}/`,
  UPDATE_BUSINESS_PROMOTION: (businessId, id) =>
    `owner/update-promotions/${businessId}/${id}/`,
  DELETE_BUSINESS_PROMOTION: (businessId, id) =>
    `owner/delete-promotions/${businessId}/${id}/`,

  GET_BUSINESS_EVENTS: (businessId) => `owner/all-events/${businessId}/`,
  CREATE_BUSINESS_EVENT: (businessId) => `owner/create-event/${businessId}/`,
  UPDATE_BUSINESS_EVENT: (businessId, id) =>
    `owner/update-event/${businessId}/${id}/`,
  DELETE_BUSINESS_EVENT: (businessId, id) =>
    `owner/delete-event/${businessId}/${id}/`,

  BUSINESS_ADS_REQUEST: () => `owner/add-ads-banner-request/`,

  // LANDING PAGE
  GET_HOME_CATEGORIES: "core/all-category-list/",
  HOME_RESTAURANT_SEARCH: "core/home-restaurant-search/",
  ALL_CITY_SEARCH: "core/all-city/",
  HOME_AVAILABLE_RESTAURANT: "core/home-nearby_restaurant/",
  HOME_RECENT_ACTIVITIES: "core/home-review-list/",
  ALL_RESTAURANT_LIST: "core/restaurants/",
  RESTAURANT_DETAIL: (id) => `core/restaurant/${id}/`,
  RESTAURANT_REVIEW_LIST: (id) => `core/reviews/${id}/`,
  RESTAURANT_QUERY: (id) => `core/add-query/${id}/`,
  RESTAURANT_MENU: (id) => `core/menu/${id}/`,
  RESTAURANT_MENU_TYPE: "core/menu-types/",
  GET_FAVORITE_BUSINESSES: "core/favorite-restaurants/",
  ADD_FAVORITE_BUSINESS: (businessId) => `core/add-to-favorite/${businessId}/`,
  REMOVE_FAVORITE_BUSINESS: (businessId) =>
    `core/remove-favorite/${businessId}/`,
  ADD_RESTAURANT_REVIEW: (id) => `core/add-review/${id}/`,
  REVIEW_UPDATE: (id) => `core/update-review/${id}/`,
  HERO_SECTION_BENNAR: "core/home-ads-banners/",
  ADD_USER_DISPUTE: "core/add-user-dispute/",
  ALL_SERVICE_LIST: "core/all-service-list/",
  ALL_CUISINE_LIST: "core/all-cuisine-list/",

  // SOCIAL MEDIA

  SOCIAL_USER_PROFILE: (id) => `social/profile/${id}/`,
  UPDATE_SOCIAL_PROFILE: "social/edit-profile/",
  ALL_UPDATES: "social/all-updates/",
  PENDING_FOLLOW_REQUEST: "social/pending-follow-requests/",
  SEND_FOLLOW_REQUEST: "social/send-follow-requests/",

  LIKE_UNLIKE_POST: (post_id) => `social/like-or-unlike-post/${post_id}/`,
  ADD_COMMENT: (post_id) => `social/add-comment/${post_id}/`,
  DELETE_COMMENTS: (id) => `social/delete-comment/${id}/`,
  ACCEPT_FOLLOW_REQUEST: (id) => `social/accept-follow-request/${id}/`,
  DELETE_FOLLOW_REQUEST_OR_FOLLOWER: (id) =>
    `/social/delete-follow-request-or-follower/${id}/`,

  ADD_POST: "social/add-post/",
  DELETE_POST: (id) => `social/delete-post/${id}/`,

  ADD_EVENT: "social/add-event/",
  ALL_EVENT: "social/all-events/",
  SEARCH_USER: "social/search-user/",
  USER_SOCIAL_PROFILE: (id) => `social/user-social-profile/${id}`,
  USER_POST: (id) => `social/user-post-list/${id}`,
  USER_REVIEW: (id) => `social/user-review-list/${id}`,
};
