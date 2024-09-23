import React from "react";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";

import { useLocales, useTranslate } from "@/locales";

const Language = () => {
  // Hooks
  const { allLangs, currentLang } = useLocales();
  const { onChangeLang } = useTranslate();

  return (
    <div className="profile-img language-option">
      <Dropdown as={NavItem}>
        <Dropdown.Toggle as={NavLink}>
          <figure>{currentLang.icon}</figure>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {allLangs?.map((lang) => (
            <Dropdown.Item
              key={lang.value}
              onClick={() => onChangeLang(lang.value)}
              active={lang.value === currentLang.value}
            >
              <figure>{lang.icon}</figure>
              <p>{lang.label}</p>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Language;
