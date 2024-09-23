import { useActiveLink, useSettings } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Accordion } from "react-bootstrap";

const NavItem = ({
  icon = null,
  path = "#",
  label,
  isSubMenu = false,
  children = null,
}) => {
  // Hooks
  const { isSideNavigationOpen } = useSettings();
  const { push } = useRouter();
  const active = useActiveLink(path, !!children);

  return (
    <li className={active ? "active" : ""}>
      <Link href={path}>{icon}</Link>
      {isSideNavigationOpen ? (
        isSubMenu ? (
          <Accordion>
            {children?.map((item, index) => (
              <Accordion.Item eventKey="0" key={item.id}>
                {index === 0 ? (
                  <Accordion.Header>{label}</Accordion.Header>
                ) : null}
                <Accordion.Body onClick={() => push(item?.path)}>
                  {item?.label}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        ) : (
          <Link href={path}>{label}</Link>
        )
      ) : null}
    </li>
  );
};

export default NavItem;
