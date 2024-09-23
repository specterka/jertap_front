"use client";
import { useEffect, useMemo, useState } from "react";
import { ListingDetail } from "../../../../../../styles/listing.style";
import Link from "next/link";
import React from "react";

import {
  AddUpdateMenuModal,
  ConfirmationDialog,
  ListingTable,
  ListingToolbar,
  PageTitle,
  TablePagination,
  UploadMenuModal,
} from "@/components";
import { useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { LISTING_TABLE_HEADERS } from "@/constants/attributes";
import { axiosDelete } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import { useTranslate } from "@/locales";

const Listings = () => {
  // Config
  const initTableConfig = {
    activePage: 1,
    search: "",
    sorting: { column: "", direction: "" },
  };

  // States
  const [tableConfig, setTableConfig] = useState(initTableConfig);
  const [isAddUpdateMenuItemOpen, setIsAddUpdateMenuItemOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isEditMenu, setIsEditMenu] = useState(false);
  const [isUploadMenuOpen, setIsUploadMenuOpen] = useState(false);

  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const [menus, isMenuLoading, fetchMenus] = useMetaData(
    API_ROUTER.GET_RESTAURANT_MENUS(businessId)
  );
  const { toaster } = useToaster();

  // Effects
  useEffect(() => {
    fetchMenus({
      page: tableConfig.activePage,
      ...(tableConfig.search
        ? {
            search: tableConfig.search,
          }
        : {}),
    });
  }, [tableConfig]);

  // Handlers
  const onPageChange = (page) => {
    setTableConfig((prev) => ({ ...prev, activePage: page }));
  };

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

  const handleSearchSurgery = (searchText) => {
    setTableConfig((prev) => ({
      ...prev,
      activePage: 1,
      search: searchText,
    }));
  };

  const onDeleteInitiate = (id) => {
    setIsConfirmationOpen(id);
  };

  const onDeleteConfirm = async () => {
    try {
      const res = await axiosDelete(
        API_ROUTER.DELETE_BUSINESS_MENU(businessId, isConfirmationOpen)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.BUSINESS_MENU_DELETE_SUCCESS, TOAST_TYPES.SUCCESS);
        setIsConfirmationOpen(false);
        fetchMenus();
      }
    } catch (error) {}
  };

  const onEditMenu = (menuId) => {
    if (!menuId) return;
    const selected = menus?.results?.find(({ id }) => id === menuId);
    if (selected) {
      setIsEditMenu(selected);
      setIsAddUpdateMenuItemOpen(true);
    }
  };

  const onCloseAddUpdateMenuDialog = () => {
    setIsAddUpdateMenuItemOpen(false);
    if (isEditMenu) setIsEditMenu(false);
  };

  // Render Methods
  const renderAddUpdateMenu = useMemo(() => {
    return (
      isAddUpdateMenuItemOpen && (
        <AddUpdateMenuModal
          onClose={onCloseAddUpdateMenuDialog}
          isOpen={isAddUpdateMenuItemOpen}
          fetchData={fetchMenus}
          isEdit={!!isEditMenu}
          editMenu={isEditMenu}
        />
      )
    );
  }, [
    isAddUpdateMenuItemOpen,
    setIsAddUpdateMenuItemOpen,
    fetchMenus,
    isEditMenu,
    onCloseAddUpdateMenuDialog,
  ]);

  // Render Methods
  const renderConfirmation = useMemo(() => {
    return (
      isConfirmationOpen && (
        <ConfirmationDialog
          onClose={() => setIsConfirmationOpen(false)}
          isOpen={isConfirmationOpen}
          modalTitle={t("dashboard.business.listing.confirmation.title")}
          onConfirm={onDeleteConfirm}
          description={t("dashboard.business.listing.confirmation.description")}
          onCancel={() => setIsConfirmationOpen(false)}
        />
      )
    );
  }, [isAddUpdateMenuItemOpen, setIsAddUpdateMenuItemOpen, onDeleteConfirm]);

  const renderUploadMenu = useMemo(
    () => (
      <UploadMenuModal
        isOpen={isUploadMenuOpen}
        onClose={() => setIsUploadMenuOpen(false)}
        fetchMenus={fetchMenus}
      />
    ),
    [setIsUploadMenuOpen, isUploadMenuOpen, fetchMenus]
  );

  return (
    <ListingDetail>
      <PageTitle title="Menus" />
      <h1>{t("dashboard.business.listing.greetings.heading")}</h1>
      <div className="jt-table">
        <ListingToolbar
          onSearchMenu={handleSearchSurgery}
          setIsUploadMenuOpen={setIsUploadMenuOpen}
        />
        {renderUploadMenu}
        <ListingTable
          isLoading={isMenuLoading}
          data={menus?.results || []}
          headerItems={LISTING_TABLE_HEADERS}
          onDelete={onDeleteInitiate}
          tableConfig={tableConfig}
          handleSorting={handleSorting}
          onEdit={onEditMenu}
        />

        <TablePagination
          total={menus?.count || 0}
          activePage={tableConfig.activePage}
          pageLimit={10}
          onPageChanged={onPageChange}
          isLastPage={!menus?.next}
        />
        <div className="add-btn">
          <Link
            className="common-btn"
            href={"javascript:void(0)"}
            onClick={() => setIsAddUpdateMenuItemOpen(true)}
          >
            {t("dashboard.business.listing.links.add")}
          </Link>
          {renderAddUpdateMenu}
          {renderConfirmation}
        </div>
      </div>
    </ListingDetail>
  );
};

export default Listings;
