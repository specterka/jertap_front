"use client";

import { HeroSection } from "@/components/landing";
import { React, useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { SubMenuIndex } from "@/styles/visiter/sub-menu.style";
import { useMetaData } from "@/hooks";
import { useParams } from "next/navigation";
import { API_ROUTER } from "@/services/apiRouter";
import { Loader, TablePagination } from "@/components";
import { getTranslatedData } from "@/utils/helper";
import { useLocales } from "@/locales";
import {
  priceFilterOptions,
  sortFilers,
  vegNonVegFilters,
} from "@/constants/attributes";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export const sortFilters = [
  { label: "Price: High to Low", value: "-price" },
  { label: "Price: Low to High", value: "price" },
  { label: "A to Z", value: "Item_name" },
  { label: "Z to A", value: "-Item_name" },
];

const SubMenu = () => {
  AOS.init();
  // Init Config

  const initTableConfig = {
    activePage: 1,
    price: "",
    search: "",
    menu_type: "",
    ordering: "Item_name",
    is_veg: "",
    sort: "",
  };

  // States
  const [tableConfig, setTableConfig] = useState(initTableConfig);
  const [searchText, setSearchText] = useState("");
  const [check, setCheck] = useState(false);
  // Hooks
  const { id } = useParams();

  const [restaurantMenu, isMenuLoading, fetchMenus] = useMetaData(
    API_ROUTER.RESTAURANT_MENU(id)
  );

  const [menuTypes, isMenuTypeLoading] = useMetaData(
    API_ROUTER.RESTAURANT_MENU_TYPE
  );
  const { currentLang } = useLocales();

  // Effects
  // useEffect(() => {
  //   fetchMenus({
  //     page: tableConfig.activePage,
  //     ...(tableConfig.price
  //       ? {
  //           price_lt: Number(tableConfig.price.split("-")[1]),
  //           price_gt: Number(tableConfig.price.split("-")[0]),
  //         }
  //       : {}),
  //     ...(tableConfig.search.trim()
  //       ? {
  //           search: tableConfig.search.trim(),
  //         }
  //       : {}),
  //     ...(tableConfig.menu_type
  //       ? {
  //           menu_type: tableConfig.menu_type,
  //         }
  //       : {}),

  //     ...(tableConfig.is_veg
  //       ? {
  //           is_veg: tableConfig.is_veg,
  //         }
  //       : {}),
  //   });
  // }, [tableConfig]);
  useEffect(() => {
    if (check) {
      tableConfig.search = "";
    }
    
    fetchMenus({
      page: tableConfig.activePage,
      ...(tableConfig.price
        ? {
            price_lt: Number(tableConfig.price.split("-")[1]),
            price_gt: Number(tableConfig.price.split("-")[0]),
          }
        : {}),
      ...(tableConfig.search.trim()
        ? { search: tableConfig.search.trim() }
        : {}),
      ...(tableConfig.menu_type ? { menu_type: tableConfig.menu_type } : {}),
      ...(tableConfig.is_veg ? { is_veg: tableConfig.is_veg } : {}),
      ...(tableConfig.ordering ? { ordering: tableConfig.ordering } : {}),
    });
  }, [tableConfig]);

  const onChangeConfig = (name, value) => {
    
    if (name == "search") {
      
      setCheck(true);
    }
    setTableConfig((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSearchText(" ");
  };

  const onPageChange = (page) => {
    setTableConfig((prev) => ({ ...prev, activePage: page }));
  };

  if (isMenuTypeLoading) return <Loader />;

  return (
    <>
      <HeroSection />
      <SubMenuIndex className="section-block">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Menu List<span></span>
        </h2>
        <Container className="px-3">
          <div
            className="main-food-menu"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Button
              type="button"
              className={`trans-btn ${
                tableConfig.menu_type == "" ? "active" : ""
              }`}
              onClick={() => onChangeConfig("menu_type", "")}
            >
              All
            </Button>
            {menuTypes && menuTypes.length > 0
              ? menuTypes.map((type) => (
                  <Button
                    type="button"
                    className={`trans-btn ${
                      tableConfig.menu_type == type.id ? "active" : ""
                    }`}
                    key={type.id}
                    onClick={() => onChangeConfig("menu_type", type.id)}
                  >
                    {getTranslatedData(currentLang, type, "type")}
                  </Button>
                ))
              : null}
            {menuTypes && menuTypes.length > 2 ? (
              <Button type="button" className="trans-btn dot-btn">
                <svg
                  width="33"
                  height="9"
                  viewBox="0 0 33 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.21921 8.86237C3.11586 8.86237 2.17133 8.46683 1.38561 7.67575C0.59989 6.88466 0.207031 5.93367 0.207031 4.82279C0.207031 3.7119 0.59989 2.76092 1.38561 1.96983C2.17133 1.17875 3.11586 0.783203 4.21921 0.783203C5.32256 0.783203 6.26709 1.17875 7.05281 1.96983C7.83852 2.76092 8.23138 3.7119 8.23138 4.82279C8.23138 5.93367 7.83852 6.88466 7.05281 7.67575C6.26709 8.46683 5.32256 8.86237 4.21921 8.86237ZM16.2557 8.86237C15.1524 8.86237 14.2079 8.46683 13.4221 7.67575C12.6364 6.88466 12.2436 5.93367 12.2436 4.82279C12.2436 3.7119 12.6364 2.76092 13.4221 1.96983C14.2079 1.17875 15.1524 0.783203 16.2557 0.783203C17.3591 0.783203 18.3036 1.17875 19.0893 1.96983C19.8751 2.76092 20.2679 3.7119 20.2679 4.82279C20.2679 5.93367 19.8751 6.88466 19.0893 7.67575C18.3036 8.46683 17.3591 8.86237 16.2557 8.86237ZM28.2923 8.86237C27.1889 8.86237 26.2444 8.46683 25.4587 7.67575C24.6729 6.88466 24.2801 5.93367 24.2801 4.82279C24.2801 3.7119 24.6729 2.76092 25.4587 1.96983C26.2444 1.17875 27.1889 0.783203 28.2923 0.783203C29.3956 0.783203 30.3401 1.17875 31.1259 1.96983C31.9116 2.76092 32.3044 3.7119 32.3044 4.82279C32.3044 5.93367 31.9116 6.88466 31.1259 7.67575C30.3401 8.46683 29.3956 8.86237 28.2923 8.86237Z"
                    fill="#525252"
                  />
                </svg>
              </Button>
            ) : null}
          </div>
          <div
            className="food-section"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div
              className="jt-send-email"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.9834 16.5627L14.5834 13.1727C15.6804 11.7752 16.2756 10.0494 16.2734 8.27271C16.2734 6.69046 15.8042 5.14374 14.9252 3.82815C14.0461 2.51255 12.7967 1.48717 11.3349 0.881672C9.8731 0.276171 8.26457 0.117745 6.71272 0.426426C5.16087 0.735108 3.73541 1.49703 2.61659 2.61585C1.49777 3.73467 0.735841 5.16014 0.427159 6.71199C0.118477 8.26383 0.276904 9.87237 0.882405 11.3342C1.48791 12.796 2.51329 14.0454 3.82888 14.9245C5.14447 15.8035 6.69119 16.2727 8.27344 16.2727C10.0501 16.2749 11.7759 15.6797 13.1734 14.5827L16.5634 17.9827C16.6564 18.0764 16.767 18.1508 16.8889 18.2016C17.0107 18.2524 17.1414 18.2785 17.2734 18.2785C17.4055 18.2785 17.5362 18.2524 17.658 18.2016C17.7799 18.1508 17.8905 18.0764 17.9834 17.9827C18.0772 17.8897 18.1516 17.7791 18.2023 17.6573C18.2531 17.5354 18.2792 17.4047 18.2792 17.2727C18.2792 17.1407 18.2531 17.01 18.2023 16.8881C18.1516 16.7663 18.0772 16.6557 17.9834 16.5627ZM2.27344 8.27271C2.27344 7.08602 2.62533 5.92598 3.28462 4.93929C3.94391 3.95259 4.88098 3.18356 5.97734 2.72943C7.0737 2.27531 8.2801 2.15649 9.44398 2.388C10.6079 2.61951 11.677 3.19095 12.5161 4.03007C13.3552 4.86918 13.9266 5.93828 14.1582 7.10217C14.3897 8.26605 14.2708 9.47245 13.8167 10.5688C13.3626 11.6652 12.5936 12.6022 11.6069 13.2615C10.6202 13.9208 9.46013 14.2727 8.27344 14.2727C6.68214 14.2727 5.15602 13.6406 4.0308 12.5153C2.90558 11.3901 2.27344 9.86401 2.27344 8.27271Z"
                  fill="#525252"
                />
              </svg>
              <Form.Control
                placeholder="Search Chinese Food "
                type="search"
                value={searchText}
                onChange={({ target: { value } }) => setSearchText(value)}
              />
              <a
                href="#"
                className="common-btn"
                onClick={(e) => {
                  e.preventDefault(); // Prevents the default scroll behavior
                  onChangeConfig("search", searchText);
                }}
              >
                Search
              </a>
            </div>
            <div
              className="select-food"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Form.Select
                aria-label="Sorting"
                value={tableConfig.ordering}
                onChange={({ target: { value } }) =>
                  onChangeConfig("ordering", value)
                }
              >
                {sortFilters.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div
              className="select-food"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Form.Select
                aria-label="Price"
                value={tableConfig.price}
                onChange={({ target: { value } }) =>
                  onChangeConfig("price", value)
                }
              >
                <option value={""}>All Prices</option>
                {priceFilterOptions.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </Form.Select>
            </div>
            <div
              className="select-food"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Form.Select
                aria-label="Veg"
                value={tableConfig.is_veg}
                onChange={({ target: { value } }) =>
                  onChangeConfig("is_veg", value)
                }
              >
                <option value={""}>All Menus</option>
                {vegNonVegFilters.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </Form.Select>
            </div>
          </div>

          {isMenuLoading ? (
            <Loader />
          ) : restaurantMenu?.results && restaurantMenu?.results.length > 0 ? (
            restaurantMenu.results.map((item, index) => (
              <div
                className="categories-box"
                key={index}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="categories-img">
                  {item.cover_image ? (
                    <img src={item.cover_image} alt={item.Item_name} />
                  ) : (
                    <img src="/images/restro-img1.png" alt="default-image" />
                  )}
                </div>
                <div className="restro-detail">
                  <div className="restro-plus">
                    <div className="mb-4 mb-md-5">
                      <div className="d-flex align-items-center">
                        <h5>{item.Item_name}</h5>
                        {item.is_veg ? (
                          <span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="6"
                                cy="6"
                                r="5.33333"
                                fill="#34A853"
                              />
                            </svg>
                          </span>
                        ) : (
                          <small>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="6"
                                cy="6"
                                r="5.33333"
                                fill="#34A853"
                              />
                            </svg>
                          </small>
                        )}
                      </div>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="restro-btn">
                    Ingredients - {item.item_ingredients[0]?.ingredients}
                    <Button className="common-btn">{item.price} $</Button>
                  </div>
                  <div className="mobile-btn">
                    <div className="restro-btn">
                      Ingredients - {item.item_ingredients[0]?.ingredients}
                      <Button className="common-btn">{item.price} $</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-data-message">
              <p>
                No restaurants matched your selected filter and search input
              </p>
            </div>
          )}

          <TablePagination
            className="d-flex justify-content-center align-items-center"
            total={restaurantMenu?.count || 0}
            activePage={tableConfig.activePage}
            pageLimit={15}
            onPageChanged={onPageChange}
            isLastPage={!restaurantMenu?.next}
          />
        </Container>
      </SubMenuIndex>
    </>
  );
};

export default SubMenu;
