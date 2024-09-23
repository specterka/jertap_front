import { PATH_BUSINESS } from "@/routes/paths";
import {
  capitalizeFirstLetterOfEachWord,
  getTranslatedData,
} from "@/utils/helper";
import { useRouter } from "next/navigation";
import React from "react";
import { useLocales, useTranslate } from "@/locales";

const RestaurantCard = ({ business }) => {
  // Hooks
  const { push } = useRouter();
  const { t } = useTranslate();
  const { currentLang } = useLocales();

  return (
    <>
      <div
        key={business?.id}
        onClick={() =>
          business?.is_approved
            ? push(PATH_BUSINESS.dashboard(business.id))
            : null
        }
      >
        <div
          className={`slick-img-block-inner ${
            business?.is_approved ? "cursor-pointer-block" : "disable-slider"
          }`}
        >
          {!business?.is_approved ? (
            <div className="slick-img-block-inner-hover">
              <p>
                {t("dashboard.business.restaurant_card.button.under_review")}
              </p>
            </div>
          ) : null}

          <div className="slick-img-block-inner-main">
            <div className="slick-img-block-inner-main-img">
              <img
                src={business?.profile_image || "/images/category-img-1.png"}
                alt={business?.name}
              />

              {business?.type ? (
                <p>
                  {capitalizeFirstLetterOfEachWord(
                    getTranslatedData(currentLang, business?.type, "type")
                  )}
                </p>
              ) : (
                "-"
              )}
            </div>
            <div className="slick-img-block-inner-main-text">
              <h3>{business?.name}</h3>
              <p>
                <span>
                  {t("dashboard.business.restaurant_card.card.address")} :{" "}
                </span>
                {business?.address}
              </p>
              <p>
                <span>
                  {t("dashboard.business.restaurant_card.card.city")} :{" "}
                </span>
                {business?.city
                  ? getTranslatedData(currentLang, business?.city, "city")
                  : "-"}
              </p>
              <p>
                <span>
                  {t("dashboard.business.restaurant_card.card.zip_code")} :{" "}
                </span>
                {business?.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
