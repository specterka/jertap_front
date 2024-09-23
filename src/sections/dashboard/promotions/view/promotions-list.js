"use client";

import { ConfirmationDialog, PageTitle, TablePagination } from "@/components";
import AddUpdatePromotion from "@/components/dashboard/business/promotions/AddUpdatePromotion";
import PromotionsListing from "@/components/dashboard/business/promotions/PromotionsListing";
import PromotionsToolbar from "@/components/dashboard/business/promotions/PromotionsToolBar";
import { PROMOTIONS_TABLE_HEADERS } from "@/constants/attributes";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useMetaData, useToaster } from "@/hooks";
import { useTranslate } from "@/locales";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosDelete, axiosGet } from "@/services/axiosHelper";
import { ListingDetail } from "@/styles/listing.style";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useMemo, useState } from "react";

const PromotionsListView = () => {
  // Config
  const initTableConfig = {
    activePage: 1,
    search: "",
    sorting: { column: "", direction: "" },
  };

  // States
  const [tableConfig, setTableConfig] = useState(initTableConfig);
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isEditMenu, setIsEditMenu] = useState(false);

  // Hooks
  const { businessId } = useParams();
  const [promotions, isLoading, fetchMenus] = useMetaData(
    API_ROUTER.GET_BUSINESS_PROMOTIONS(businessId)
  );
  const { t } = useTranslate();
  const { toaster } = useToaster();

  // Handlers
  const onSearch = () => {};

  const handleSorting = (columnId) => {
    let col = columnId,
      dir;
    if (tableConfig.sorting.column === columnId) {
      dir = tableConfig.sorting.direction === "asc" ? "desc" : "asc";
      setTableConfig((prev) => ({
        ...prev,
        sorting: {
          ...prev.sorting,
          direction: dir,
        },
      }));
    } else {
      dir = "asc";
      setTableConfig((prev) => ({
        ...prev,
        sorting: { column: col, direction: dir },
      }));
    }
  };

  const onDeleteConfirm = async () => {
    try {
      const res = await axiosDelete(
        API_ROUTER.DELETE_BUSINESS_PROMOTION(businessId, isConfirmationOpen)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_PROMOTION_DELETE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsConfirmationOpen(false);
        setTableConfig((prev) => ({
          ...prev,
          activePage: 1,
        }));
        fetchMenus({ activePage: 1 });
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onDeleteInitiate = (id) => {
    setIsConfirmationOpen(id);
  };

  const onEditMenu = async (menuId) => {
    if (!menuId) return;
    try {
      const selected = await axiosGet(
        API_ROUTER.GET_BUSINESS_PROMOTION(businessId, menuId)
      );
      if (selected.status) {
        setIsEditMenu(selected.data);
        setIsOpen(true);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Handlers
  const onPageChange = (page) => {
    setTableConfig((prev) => ({ ...prev, activePage: page }));
  };

  const fetchData = () => {
    setTableConfig((prev) => ({ ...prev, activePage: 1 }));
    fetchMenus();
  };

  const onClose = () => {
    setIsEditMenu(false);
    setIsOpen(false);
  };

  // Renders

  const renderAddUpdatePromotion = useMemo(
    () => (
      <AddUpdatePromotion
        isOpen={isOpen}
        onClose={() => onClose()}
        fetchData={fetchData}
        isEdit={isEditMenu}
        editMenu={isEditMenu}
      />
    ),
    [isOpen, fetchData, isEditMenu, onClose]
  );

  // Render Methods
  const renderConfirmation = useMemo(() => {
    return (
      isConfirmationOpen && (
        <ConfirmationDialog
          onClose={() => setIsConfirmationOpen(false)}
          isOpen={isConfirmationOpen}
          modalTitle={t("dashboard.business.promotions.confirmation.title")}
          onConfirm={onDeleteConfirm}
          description={t(
            "dashboard.business.promotions.confirmation.description"
          )}
          onCancel={() => setIsConfirmationOpen(false)}
        />
      )
    );
  }, [
    onDeleteConfirm,
    isConfirmationOpen,
    onDeleteConfirm,
    setIsConfirmationOpen,
  ]);

  return (
    <ListingDetail>
      <PageTitle title="Promotions" />
      <h1>{t("dashboard.business.promotions.heading")}</h1>
      <div className="jt-table">
        <PromotionsToolbar onSearch={onSearch} setIsOpen={setIsOpen} />
        {renderAddUpdatePromotion}
        <PromotionsListing
          isLoading={isLoading}
          data={promotions?.results || []}
          headerItems={PROMOTIONS_TABLE_HEADERS}
          onDelete={onDeleteInitiate}
          tableConfig={tableConfig}
          handleSorting={handleSorting}
          onEdit={onEditMenu}
        />
        <TablePagination
          total={promotions?.count || 0}
          activePage={tableConfig.activePage}
          pageLimit={10}
          onPageChanged={onPageChange}
          isLastPage={!promotions?.next}
        />
        <div className="add-btn">
          <Link
            className="common-btn"
            href={"#"}
            onClick={() => setIsOpen(true)}
          >
            {t("dashboard.business.listing.links.add")}
          </Link>
          {renderConfirmation}
        </div>
      </div>
    </ListingDetail>
  );
};

export default PromotionsListView;
