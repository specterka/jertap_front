"use client";

import React, { useEffect, useMemo, useState } from "react";
import { QfdetailReview } from "../../../../../../../styles/q&f.style";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import { AddReplayClientQuery, ClientQueryItem, Loader } from "@/components";
import { Button } from "react-bootstrap";
import { useTranslate } from "@/locales";

const ClientQueriesPage = () => {
  // Config
  const initTableConfig = {
    activePage: 1,
    search: "",
    sorting: { column: "", direction: "" },
  };

  // States
  const [isReplayModalOpen, setIsReplayModalOpen] = useState(false);
  const [paginatedQueries, setPaginatedQueries] = useState([]);
  const [tableConfig, setTableConfig] = useState(initTableConfig);

  // Hooks
  const { t } = useTranslate();
  const { businessId } = useParams();
  const [queries, isFetching, fetchQueries] = useMetaData(
    API_ROUTER.GET_CLIENT_QUERIES(businessId),
    { page: tableConfig.activePage }
  );

  // Effects
  useEffect(() => {
    if (queries?.results && queries?.results?.length > 0) {
      setPaginatedQueries((prev) => [
        ...(tableConfig.activePage === initTableConfig.activePage ? [] : prev),
        ...queries.results,
      ]);
    } else setPaginatedQueries([]);
  }, [queries?.results]);

  // Constants
  const isMoreLoading = useMemo(
    () => paginatedQueries?.length > 0 && isFetching,
    [isFetching, paginatedQueries]
  );

  const isMainLoading = useMemo(
    () => paginatedQueries?.length === 0 && isFetching,
    [isFetching, paginatedQueries]
  );

  const onFetchQueries = () => {
    setTableConfig((prev) => ({
      ...prev,
      activePage: initTableConfig.activePage,
    }));
    fetchQueries({
      page: initTableConfig.activePage,
    });
  };

  // Render Methods
  const renderReplayModal = useMemo(
    () => (
      <AddReplayClientQuery
        isOpen={!!isReplayModalOpen}
        review={isReplayModalOpen}
        onClose={() => setIsReplayModalOpen(false)}
        fetchQueries={onFetchQueries}
      />
    ),
    [isReplayModalOpen, setIsReplayModalOpen, onFetchQueries]
  );

  // Handlers
  const onLoadMore = () => {
    if (queries?.next) {
      setTableConfig((prev) => ({
        ...prev,
        activePage: prev.activePage + 1,
      }));
      fetchQueries({
        page: tableConfig.activePage + 1,
      });
    }
  };

  const onReplyInitiate = (query) => {
    if (!query) return;
    setIsReplayModalOpen(query);
  };

  return (
    <QfdetailReview>
      <div className="q-details-block">
        <h1>
          {t(
            "dashboard.business.qapage.qapage.client_queries.greetings.heading"
          )}
        </h1>
      </div>
      <div className="list-quaries-block">
        <h3>
          {t(
            "dashboard.business.qapage.qapage.client_queries.greetings.table_heading"
          )}
        </h3>
        <div className="list-quaries-block-inner">
          {isMainLoading ? (
            <Loader />
          ) : paginatedQueries && paginatedQueries?.length > 0 ? (
            <>
              {paginatedQueries.map((query) => (
                <ClientQueryItem
                  key={query?.id}
                  query={query}
                  onReplyInitiate={onReplyInitiate}
                />
              ))}
              {queries?.next ? (
                <div className="d-flex justify-content-center align-items-center p-4">
                  {isMoreLoading ? (
                    <Loader />
                  ) : (
                    <Button onClick={onLoadMore}>Load More</Button>
                  )}
                </div>
              ) : null}
            </>
          ) : (
            <div className="list-quaries-block-inner-block">
              <p>{t(
            "dashboard.business.qapage.qapage.client_queries.greetings.no_queries"
          )}</p>
            </div>
          )}
          {renderReplayModal}
        </div>
      </div>
    </QfdetailReview>
  );
};

export default ClientQueriesPage;
