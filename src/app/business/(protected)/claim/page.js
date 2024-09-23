"use client";

import { useAuth, useMetaData, useToaster } from "@/hooks";
import { PATH_BUSINESS } from "@/routes/paths";
import { API_ROUTER } from "@/services/apiRouter";
import { LoginMain } from "@/styles/auth.style";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { axiosPost } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES, USER_TYPES } from "@/constants/keywords";
import { ACL, ClaimBusinessItem, ListSearchInput, Loader } from "@/components";
import { useTranslate } from "@/locales";

const ClaimBusiness = () => {
  // Config
  const initTableConfig = {
    activePage: 1,
    search: "",
    sorting: { column: "", direction: "" },
  };
  const { t } = useTranslate();

  // States
  const [claimBusinesses, setClaimBusinesses] = useState([]);
  const [tableConfig, setTableConfig] = useState(initTableConfig);
  const [isClaiming, setIsClaiming] = useState(false);

  // Hooks
  const [businesses, isFetching, fetchBusinesses] = useMetaData(
    API_ROUTER.GET_UNCLAIMED_BUSINESS,
    { page: tableConfig.activePage }
  );
  const { toaster } = useToaster();
  const { push } = useRouter();
  const scrollContainerRef = useRef(null);
  const { user } = useAuth();

  // Constants
  const isMoreLoading = useMemo(
    () => claimBusinesses?.length > 0 && isFetching,
    [isFetching, claimBusinesses]
  );

  const isMainLoading = useMemo(
    () => claimBusinesses?.length === 0 && isFetching,
    [isFetching, claimBusinesses]
  );

  // Effects
  useEffect(() => {
    if (businesses?.results && businesses?.results?.length > 0) {
      setClaimBusinesses((prev) => [...prev, ...businesses.results]);
    } else setClaimBusinesses([]);
  }, [businesses?.results]);

  // Handlers
  const handleScroll = () => {
    const element = scrollContainerRef?.current;
    const threshold = 2;
    if (
      Math.abs(
        element.scrollHeight - element.scrollTop - element.clientHeight
      ) <= threshold &&
      !isFetching
    ) {
      if (businesses?.next) {
        setTableConfig((prev) => ({
          ...prev,
          activePage: prev.activePage + 1,
        }));
        fetchBusinesses({
          page: tableConfig.activePage + 1,
        });
      }
    }
  };

  const onSearchBusiness = () => {
    try {
      setTableConfig((prev) => ({
        ...prev,
        activePage: initTableConfig.activePage,
      }));
      fetchBusinesses({
        page: initTableConfig.activePage,
        ...(tableConfig.search?.trim()
          ? {
              search: tableConfig.search?.trim(),
            }
          : {}),
      });
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const handleClaimRequest = async (id) => {
    if (!id) return toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    try {
      setIsClaiming(id);
      const res = await axiosPost(API_ROUTER.CLAIM_BUSINESS, {
        request_for: id,
      });
      setIsClaiming(false);

      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }

      if (res.status) {
        toaster(TOAST_ALERTS.CLAIM_SUBMIT_SUCCESS, TOAST_TYPES.SUCCESS);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  return (
    <ACL accessibleRoles={[USER_TYPES.BUSINESS_OWNER]} currentRole={user?.role}>
      <LoginMain className="claim-main">
        <div className="claim-inner">
          <div className="claim-inner-top">
            <h3>{t("dashboard.business.claim.greetings.heading")}</h3>
            <div className="claim-inner-top-search">
              <ListSearchInput
                searchText={tableConfig.search}
                onSearch={onSearchBusiness}
                onChangeSearchText={(value) =>
                  setTableConfig((prev) => ({ ...prev, search: value }))
                }
                placeholder={t(
                  "dashboard.business.claim.form.fields.search.placeholder"
                )}
              />
              <button
                className="common-btn btn btn-primary"
                onClick={() => push(PATH_BUSINESS.business.add)}
              >
                {t("dashboard.business.claim.button.add_new")}
                {/* Add New */}
              </button>
              <button
                className="common-btn btn btn-primary ms-3"
                onClick={() => push(PATH_BUSINESS.business.root)}
              >
                {t("dashboard.business.claim.button.back_to_list")}
              </button>
            </div>
          </div>
          <div
            className="claim-inner-list"
            onScroll={handleScroll}
            ref={scrollContainerRef}
          >
            {isMainLoading ? (
              <div className="claim-inner-list-block d-flex justify-content-center align-items-center">
                <Loader />
              </div>
            ) : claimBusinesses && claimBusinesses?.length > 0 ? (
              claimBusinesses?.map((business) => (
                <ClaimBusinessItem
                  key={business.id}
                  business={business}
                  onClaim={handleClaimRequest}
                  isClaiming={isClaiming}
                />
              ))
            ) : isMoreLoading ? (
              <Loader />
            ) : (
              <div className="claim-inner-list-block">
                <p className="text-center">No businesses Found</p>
              </div>
            )}
          </div>
        </div>
      </LoginMain>
    </ACL>
  );
};

export default ClaimBusiness;
