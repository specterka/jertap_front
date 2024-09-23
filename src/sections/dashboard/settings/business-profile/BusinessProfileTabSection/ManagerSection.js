import {
  AddUpdateManagerForm,
  ConfirmationDialog,
  Loader,
  ManagerCard,
} from "@/components";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useMetaData, useToaster } from "@/hooks";
import { useTranslate } from "@/locales";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosPatch } from "@/services/axiosHelper";
import { useParams } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const ManagerSection = () => {
  // States
  const [isDeleteManager, setIsDeleteManager] = useState(false);
  const [search, setSearch] = useState("");
  const [isExisting, setIsExisting] = useState(false);

  // Hooks
  const { businessId } = useParams();
  const [managerRes, isFetching, fetchManagers] = useMetaData(
    API_ROUTER.GET_BUSINESS_MANAGERS(businessId)
  );
  const [existingManagers, isExistingFetching, fetchExistingManagers] =
    useMetaData(
      API_ROUTER.GET_EXISTING_MANAGERS,

      true
    );

  const { toaster } = useToaster();
  const { t } = useTranslate();

  // Handlers
  const onDeleteInitiate = (managerId) => {
    if (!managerId) return;
    try {
      setIsDeleteManager(managerId);
    } catch (error) {}
  };

  const onDeleteManager = async () => {
    try {
      if (!isDeleteManager)
        return toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);

      const res = await axiosPatch(
        API_ROUTER.UPDATE_BUSINESS_MANAGER(businessId)
      );
      if (!res.status) {
        return toaster(
          res.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_REMOVE_MANAGER_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        setIsDeleteManager(false);
        fetchManagers();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  const onSearch = useCallback(
    (e) => {
      e.preventDefault();
      setIsExisting(true);
      fetchExistingManagers({ search: search });
    },
    [fetchExistingManagers, search]
  );

  const onClearSearch = useCallback(
    (e) => {
      e.preventDefault();
      setSearch("");
      setIsExisting(false);
    },
    [setSearch, setIsExisting]
  );

  const onSetManager = async (managerId) => {
    if (!managerId) return;
    try {
      const res = await axiosPatch(
        API_ROUTER.SET_BUSINESS_MANAGER(businessId),
        {
          manager: managerId,
        }
      );
      if (!res.status) {
        return toaster(
          res.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(
          TOAST_ALERTS.BUSINESS_UPDATE_MANAGER_SUCCESS,
          TOAST_TYPES.SUCCESS
        );
        fetchManagers();
        setSearch("");
        setIsExisting(false);
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Renders
  const renderConfirmation = useMemo(
    () => (
      <ConfirmationDialog
        isOpen={isDeleteManager}
        onCancel={() => setIsDeleteManager(false)}
        onClose={() => setIsDeleteManager(false)}
        modalTitle={t(
          "dashboard.business.settings.businessProfile.tabs.manager.confirmation.title"
        )}
        description={t(
          "dashboard.business.settings.businessProfile.tabs.manager.confirmation.description"
        )}
        onConfirm={() => onDeleteManager()}
      />
    ),
    [isDeleteManager, setIsDeleteManager, onDeleteManager, t]
  );

  const renderAssignedManager = useMemo(
    () => (
      <div>
        {[managerRes?.manager]?.map((manager) => (
          <ManagerCard
            manager={manager}
            key={manager?.id}
            onDeleteInitiate={onDeleteInitiate}
          />
        ))}
        {renderConfirmation}
      </div>
    ),
    [managerRes?.manager, onDeleteInitiate, renderConfirmation]
  );

  const renderExistingManager = useMemo(
    () => (
      <div>
        {existingManagers && existingManagers?.length > 0 ? (
          existingManagers?.map((manager) => (
            <ManagerCard
              manager={manager}
              key={manager?.id}
              isSet
              onSetManager={onSetManager}
            />
          ))
        ) : (
          <p>
            {t(
              "dashboard.business.settings.businessProfile.tabs.manager.list.emptyManager"
            )}
          </p>
        )}
      </div>
    ),
    [existingManagers, onSetManager, t]
  );

  if (isFetching || isExistingFetching) return <Loader />;

  return (
    <div className="profile-block-common">
      <div className="profile-block-common-inner">
        {!managerRes?.manager ? (
          <div className="search-block-button">
            <form className="d-flex justify-content-center gap-2 align-items-center">
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t(
                    "dashboard.business.settings.businessProfile.tabs.manager.fields.search.placeholder"
                  )}
                  value={search}
                  onChange={({ target: { value } }) => setSearch(value)}
                />
                <button onClick={onSearch}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.7556 16L9.15556 10.4C8.71111 10.7556 8.2 11.037 7.62222 11.2444C7.04444 11.4519 6.42963 11.5556 5.77778 11.5556C4.16296 11.5556 2.7963 10.9963 1.67778 9.87778C0.559259 8.75926 0 7.39259 0 5.77778C0 4.16296 0.559259 2.7963 1.67778 1.67778C2.7963 0.559259 4.16296 0 5.77778 0C7.39259 0 8.75926 0.559259 9.87778 1.67778C10.9963 2.7963 11.5556 4.16296 11.5556 5.77778C11.5556 6.42963 11.4519 7.04444 11.2444 7.62222C11.037 8.2 10.7556 8.71111 10.4 9.15556L16 14.7556L14.7556 16ZM5.77778 9.77778C6.88889 9.77778 7.83333 9.38889 8.61111 8.61111C9.38889 7.83333 9.77778 6.88889 9.77778 5.77778C9.77778 4.66667 9.38889 3.72222 8.61111 2.94444C7.83333 2.16667 6.88889 1.77778 5.77778 1.77778C4.66667 1.77778 3.72222 2.16667 2.94444 2.94444C2.16667 3.72222 1.77778 4.66667 1.77778 5.77778C1.77778 6.88889 2.16667 7.83333 2.94444 8.61111C3.72222 9.38889 4.66667 9.77778 5.77778 9.77778Z"
                      fill="#9D9D9D"
                    />
                  </svg>
                </button>
              </div>
              {search ? (
                <Button onClick={onClearSearch}>
                  {t(
                    "dashboard.business.settings.businessProfile.tabs.manager.fields.button.clear"
                  )}
                </Button>
              ) : null}
            </form>
          </div>
        ) : null}
        <div className="basic-details-block">
          <h3 className="basic-title">
            {t(
              "dashboard.business.settings.businessProfile.tabs.manager.label"
            )}
          </h3>
          {isExisting ? (
            renderExistingManager
          ) : managerRes?.manager ? (
            renderAssignedManager
          ) : (
            <div className="basic-details-block-form">
              <AddUpdateManagerForm fetchManagers={fetchManagers} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagerSection;
