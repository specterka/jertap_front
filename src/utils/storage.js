"use client";
import { decodeData, encodeData } from "./jwt";

export function localStorageAvailable() {
  try {
    if (!window) {
      return false;
    }
    const key = "__some_random_key_you_are_not_going_to_use__";
    window.localStorage.setItem(key, key);
    window.localStorage.removeItem(key);
    return true;
  } catch (error) {
    return false;
  }
}

export const saveData = (key, value) => {
  if (window) {
    try {
      const encryptedData = encodeData(value);
      window.localStorage.setItem(key, encryptedData);
    } catch (error) {}
  }
};

export const getData = (key) => {
  if (window) {
    try {
      const localEncryptedData = window.localStorage.getItem(key);
      if (localEncryptedData) {
        return decodeData(localEncryptedData);
      }
    } catch (error) {
      return "";
    }
  }
};

export const removeData = (key) => {
  if (window) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {}
  }
};

export const updateData = (key, value) => {
  if (window) {
    try {
      removeData(key);
      saveData(key, value);
    } catch (error) {}
  }
};

export const removeAll = () => {
  if (window) {
    try {
      window.localStorage.clear();
    } catch (error) {}
  }
};
