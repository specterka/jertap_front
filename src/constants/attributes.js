import i18n from "@/locales/i18n";
import { AUTH_PROVIDERS, BUSINESS_TYPES, USER_TYPES } from "./keywords";

export const PROVIDERS_TABS = [
  {
    eventKey: AUTH_PROVIDERS.MOBILE_NUMBER,
    title: i18n.t("constants.keywords.providers.phone"),
  },
  {
    eventKey: AUTH_PROVIDERS.EMAIL,
    title: i18n.t("constants.keywords.providers.email"),
  },
];

export const BUSINESS_ITEMS = [
  {
    label: i18n.t("constants.keywords.businessType.cafe"),
    value: BUSINESS_TYPES.CAFE,
  },
  {
    label: i18n.t("constants.keywords.businessType.restaurant"),
    value: BUSINESS_TYPES.RESTAURANT,
  },
];

export const USER_ROLES_ITEMS = [
  {
    label: i18n.t("constants.keywords.roles.visitor"),
    value: USER_TYPES.VISITOR,
  },
  {
    label: i18n.t("constants.keywords.roles.owner"),
    value: USER_TYPES.BUSINESS_OWNER,
  },
  {
    label: i18n.t("constants.keywords.roles.admin"),
    value: USER_TYPES.ADMIN,
  },
];

export const LISTING_TABLE_HEADERS = [
  {
    id: 1,
    label: i18n.t("dashboard.business.listing.listing_tools.list.heading.srNo"),
    key: "sr",
    isSort: false,
  },
  {
    id: 2,
    label: i18n.t("dashboard.business.listing.listing_tools.list.heading.name"),
    key: "Item_name",
    isSort: true,
  },
  {
    id: 3,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.price"
    ),
    key: "price",
    isSort: true,
  },
  {
    id: 9,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.menuType"
    ),
    key: "price",
    isSort: true,
  },
  {
    id: 4,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.description"
    ),
    key: "description",
    isSort: true,
  },
  {
    id: 8,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.isVeg"
    ),
    key: "is_veg",
    isSort: true,
  },
  {
    id: 5,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.coverImage"
    ),
    key: "cover_image",
    isSort: false,
  },
  {
    id: 6,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.action"
    ),
    key: "action",
    isSort: true,
  },
];

export const EVENTS_TABLE_HEADERS = [
  {
    id: 1,
    label: "Sr. No",
    key: "sr",
    isSort: false,
  },
  {
    id: 2,
    label: "Event Name",
    key: "name",
    isSort: false,
  },
  {
    id: 4,
    label: "Description",
    key: "description",
    isSort: false,
  },
  {
    id: 5,
    label: "Event Image",
    key: "event_image",
    isSort: false,
  },
  {
    id: 7,
    label: "Is Event Approved by Business?",
    key: "is_approved_by_restaurant",
    isSort: false,
  },
  {
    id: 8,
    label: "Event Date time",
    key: "date_time",
    isSort: true,
  },
  {
    id: 6,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.action"
    ),
    key: "action",
    isSort: false,
  },
];

export const PROMOTIONS_TABLE_HEADERS = [
  {
    id: 1,
    label: i18n.t("dashboard.business.promotions.list.headings.srNo"),
    key: "sr",
    isSort: false,
  },
  {
    id: 2,
    label: i18n.t("dashboard.business.promotions.list.headings.title"),
    key: "title",
    isSort: true,
  },
  {
    id: 3,
    label: i18n.t("dashboard.business.promotions.list.headings.offer_type"),
    key: "offer_type",
    isSort: true,
  },
  {
    id: 9,
    label: i18n.t("dashboard.business.promotions.list.headings.discount"),
    key: "discount",
    isSort: true,
  },
  {
    id: 4,
    label: i18n.t("dashboard.business.promotions.list.headings.is_active"),
    key: "is_active",
    isSort: true,
  },
  {
    id: 8,
    label: i18n.t(
      "dashboard.business.promotions.list.headings.apply_on_everyday"
    ),
    key: "apply_on_everyday",
    isSort: true,
  },
  {
    id: 5,
    label: i18n.t("dashboard.business.promotions.list.headings.created_at"),
    key: "created_at",
    isSort: false,
  },
  {
    id: 6,
    label: i18n.t(
      "dashboard.business.listing.listing_tools.list.heading.action"
    ),
    key: "action",
    isSort: true,
  },
];

export const priceFilterOptions = [
  { label: "$0 - $50", value: "0-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "$100 - $150", value: "100-150" },
  { label: "$150 - $200", value: "150-200" },
  { label: "$200 - $250", value: "200-250" },
  { label: "$250 - $300", value: "250-300" },
  { label: "$300 - $350", value: "300-350" },
  { label: "$350 - $400", value: "350-400" },
  { label: "$400 - $450", value: "400-450" },
  { label: "$450 - $500", value: "450-500" },
  { label: "$500 - $550", value: "500-550" },
  { label: "$550 - $600", value: "550-600" },
  { label: "$600 - $650", value: "600-650" },
  { label: "$650 - $700", value: "650-700" },
  { label: "$700 - $750", value: "700-750" },
  { label: "$750 - $800", value: "750-800" },
  { label: "$800 - $850", value: "800-850" },
  { label: "$850 - $900", value: "850-900" },
  { label: "$900 - $950", value: "900-950" },
  { label: "$950 - $1000", value: "950-1000" },
  { label: "More than $1000", value: "1000-50000" },

];

export const sortFilers = [
  {
    label: "Price: High to Low",
    value: "-price",
  },
  {
    label: "Price: Low to High",
    value: "price",
  },
  {
    label: "A to Z",
    value: "Item_name",
  },
  {
    label: "Z to A",
    value: "-Item_name",
  },
];

export const vegNonVegFilters = [
  {
    label: "Non-Veg",
    value: "False",
  },
  {
    label: "Veg",
    value: "True",
  },
];
