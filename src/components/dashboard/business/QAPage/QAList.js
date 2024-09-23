import ConfirmationDialog from "@/components/shared/ConfirmationDialog";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { useToaster } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosDelete } from "@/services/axiosHelper";
import { useContext, useMemo, useState } from "react";
import { Accordion, Button } from "react-bootstrap";

import Loader from "@/components/shared/Loader";
import QAListItem from "./QAListItems";
import { QuestionContext } from "@/contexts/QuestionContext";
import { useTranslate } from "@/locales";

const QAList = () => {
  //Context
  const {
    paginatedData,
    setPaginatedData,
    setTableConfig,
    qaData,
    isFetching,
    fetchMetaData,
    initTableConfig,
    onLoadMore,
    businessId,
  } = useContext(QuestionContext);

  // Hooks
  const { t } = useTranslate();
  const [isConfirmation, setIsConfirmation] = useState(false);
  const { toaster } = useToaster();

  // Constants
  const isMoreLoading = useMemo(
    () => paginatedData?.length > 0 && isFetching,
    [isFetching, paginatedData]
  );

  const onDeleteInitiate = (id) => {
    setIsConfirmation(id);
  };

  const onDeleteConfirm = async () => {
    try {
      const res = await axiosDelete(
        API_ROUTER.DELETE_QA_LIST(businessId, isConfirmation)
      );
      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }
      if (res.status) {
        toaster(TOAST_ALERTS.QA_LIST_DELETE_SUCCESS, TOAST_TYPES.SUCCESS);
        setIsConfirmation(false);
        setPaginatedData([]);
        setTableConfig((prev) => ({
          ...prev,
          activePage: initTableConfig.activePage,
        }));
        fetchMetaData({
          page: initTableConfig.activePage,
        });
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  // Render Methods
  const renderConfirmation = useMemo(() => {
    return (
      isConfirmation && (
        <ConfirmationDialog
          onClose={() => setIsConfirmation(false)}
          isOpen={!!isConfirmation}
          modalTitle={t("dashboard.business.qapage.confirmation.title")}
          onConfirm={onDeleteConfirm}
          description={t("dashboard.business.qapage.confirmation.description")}
          onCancel={() => setIsConfirmation(false)}
        />
      )
    );
  }, [isConfirmation, onDeleteConfirm]);

  //Return
  return (
    <>
      {paginatedData?.length > 0 ? (
        <Accordion defaultActiveKey="0">
          {paginatedData.map((qaItem, key) => {
            return (
              <QAListItem
                key={key}
                index={key}
                isActive={key === 0}
                qaItem={qaItem}
                onDeleteInitiate={onDeleteInitiate}
              />
            );
          })}
          {qaData?.next ? (
            <div className="d-flex justify-content-center align-items-center p-4">
              {isMoreLoading ? (
                <Loader />
              ) : (
                <Button onClick={onLoadMore}>Load More</Button>
              )}
            </div>
          ) : null}
        </Accordion>
      ) : (
        <div className="d-flex justify-content-center align-items-center p-4">
          <p>No Questions Found. Please add question</p>
        </div>
      )}

      {renderConfirmation}
    </>
  );
};

export default QAList;
