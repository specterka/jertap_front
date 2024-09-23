"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import React from "react";

import { ConfirmationDialog, PageTitle, TablePagination } from "@/components";
import { useMetaData, useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { EVENTS_TABLE_HEADERS } from "@/constants/attributes";
import { axiosDelete } from "@/services/axiosHelper";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useParams } from "next/navigation";
import { useTranslate } from "@/locales";
import { ListingDetail } from "@/styles/listing.style";
import EventsToolbar from "../events-toolbar";
import EventsList from "../events-list";
import AddUpdateEvent from "../add-update-event";

const EventsView = () => {
  // Config
  const initTableConfig = {
    activePage: 1,
    search: "",
    sorting: { column: "", direction: "" },
    sortBy: "id",
    sortOrder: "asc",
    ordering: "-id",
  };

  // States
  const [tableConfig, setTableConfig] = useState(initTableConfig);
  const [isAddUpdateMenuItemOpen, setIsAddUpdateMenuItemOpen] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [isEditMenu, setIsEditMenu] = useState(false);

  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const [events, isEventsLoading, fetchEvents] = useMetaData(
    API_ROUTER.GET_BUSINESS_EVENTS(businessId)
  );
  const { toaster } = useToaster();

  // Effects
  useEffect(() => {
    fetchEvents({
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

  const handleSort = async (sortBy, sortOrder) => {
    setTableConfig((prev) => ({
      ...prev,
      sortBy,
      sortOrder,
      ordering: `${`${sortOrder === "desc" ? "-" : ""}${sortBy}`}`,
    }));
    await fetchEvents({
      page: tableConfig.activePage,
      ...(tableConfig.search
        ? {
            search: tableConfig.search,
          }
        : {}),
      ordering: `${`${sortOrder === "desc" ? "-" : ""}${sortBy}`}`,
    });
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
        API_ROUTER.DELETE_BUSINESS_EVENT(businessId, isConfirmationOpen)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_EVENT_DELETE_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsConfirmationOpen(false);
        fetchEvents();
      }
    } catch (error) {}
  };

  const onEditMenu = (menuId) => {
    if (!menuId) return;
    const selected = events?.results?.find(({ id }) => id === menuId);
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
        <AddUpdateEvent
          onClose={onCloseAddUpdateMenuDialog}
          isOpen={isAddUpdateMenuItemOpen}
          fetchData={fetchEvents}
          isEdit={!!isEditMenu}
          editEvent={isEditMenu}
        />
      )
    );
  }, [
    isAddUpdateMenuItemOpen,
    setIsAddUpdateMenuItemOpen,
    fetchEvents,
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
          description={"Are you sure you want to delete this event?"}
          onCancel={() => setIsConfirmationOpen(false)}
        />
      )
    );
  }, [isAddUpdateMenuItemOpen, setIsAddUpdateMenuItemOpen, onDeleteConfirm]);

  return (
    <ListingDetail>
      <PageTitle title="Events" />
      <h1>{t("dashboard.business.events.heading")}</h1>
      <div className="jt-table">
        <EventsToolbar onSearchMenu={handleSearchSurgery} />
        <EventsList
          isLoading={isEventsLoading}
          data={events?.results || []}
          headerItems={EVENTS_TABLE_HEADERS}
          onDelete={onDeleteInitiate}
          tableConfig={tableConfig}
          handleSort={handleSort}
          onEdit={onEditMenu}
        />
        <TablePagination
          total={events?.count || 0}
          activePage={tableConfig.activePage}
          pageLimit={10}
          onPageChanged={onPageChange}
          isLastPage={!events?.next}
        />
        <div className="add-btn">
          <Link
            className="common-btn"
            href={"#"}
            onClick={() => setIsAddUpdateMenuItemOpen(true)}
          >
            {t("dashboard.business.events.buttons.add")}
          </Link>
          {renderAddUpdateMenu}
          {renderConfirmation}
        </div>
      </div>
    </ListingDetail>
  );
};

export default EventsView;
