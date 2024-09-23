import { USER_TYPES } from "@/constants/keywords";

export const getUserRole = (user) => {
  if (!user) return "";
  if (user?.is_superuser) return USER_TYPES.ADMIN;
  if (user?.is_cafe_owner) return USER_TYPES.BUSINESS_OWNER;
  if (user?.is_cafe_manager) return USER_TYPES.RESTAURANT_MANAGER;
  if (user?.is_visitor) return USER_TYPES.VISITOR;
  else return USER_TYPES.VISITOR;
};

export const getLabelFromValue = (arr, value) => {
  let result = "";
  if (arr.length > 0) {
    result = arr.find((item) => item.value === value)?.label;
  }
  return result;
};

// Convert file to base64 string
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const getPastYears = (count = 20) => {
  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: count + 1 },
    (_, index) => currentYear - index
  );

  return years;
};

export const getUserName = (user) => {
  if (!user) return "";
  if (user?.first_name && user?.last_name)
    return `${user.first_name} ${user.last_name}`;
  return user?.username;
};

export const capitalizeFirstLetterOfEachWord = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

export const getTranslatedData = (currentLang, data, key) => {
  if (!data[key]) return "";
  switch (currentLang.value) {
    case "en":
      return data[key];
    case "ru":
      return data[`${key}_${currentLang.value}`] || data[key];
    default:
      return data[key];
  }
};

export function groupObjects(array, groupSize) {
  const result = {};
  let groupIndex = 1;

  for (let i = 0; i < array.length; i += groupSize) {
    const group = array.slice(i, i + groupSize);
    result[groupIndex] = group;
    groupIndex++;
  }

  return result;
}

export function generateArray(n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(i);
  }
  return array;
}

export const getClientUrl = () => {
  switch (process.env.PROJECT_ENV) {
    case "development":
      return "http://localhost:3000";
    case "vercel":
      return "https://jertap.vercel.app";
    case "production":
      return "https://jertap.vercel.app";
    default:
      return "http://localhost:3000";
  }
};

export const getDirectionUrl = (lat, long) =>
  `https://www.google.com/maps?q=${lat},${long}`;

export const shareContent = (config) => {
  try {
    if (navigator.share) {
      navigator
        .share(config)
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      console.log("Web Share API not supported.");
    }
  } catch (error) {}
};
