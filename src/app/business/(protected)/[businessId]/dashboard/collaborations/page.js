"use client";
import React, { useCallback, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { CollaborationsDetail } from "../../../../../../styles/collaborations.style";
import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import CollaborationCard from "@/components/Cards/Dashboard/collaboration/CollaborationCard";
import { Loader, SearchInput } from "@/components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useTranslate } from "@/locales";

const Collaborations = () => {
  // States
  const [tableConfig, setTableConfig] = useState({
    page: 1,
  });
  // Hooks
  const { t } = useTranslate();
  const [collaborations, isFetching, fetchCollaborators] = useMetaData(
    API_ROUTER.GET_COLLABORATION_LIST,
    {
      ...tableConfig,
    }
  );

  const onSearchCollaborator = useCallback(
    (searchText) => {
      setTableConfig((prev) => ({ ...prev, page: 1 }));
      fetchCollaborators({ page: 1, search: searchText });
    },
    [fetchCollaborators]
  );

  return (
    <CollaborationsDetail>
      <h1>{t("dashboard.business.collaborations.greetings.heading")}</h1>
      <Row>
        <Col lg={12}>
          <div className="promot-section">
            <h3>
              {t("dashboard.business.collaborations.greetings.heading_1")}
            </h3>
            <div className="search-input-block-main">
              <SearchInput
                placeholder={t("dashboard.business.collaborations.serch_input")}
                onSearch={onSearchCollaborator}
              />
            </div>
            {isFetching ? (
              <Loader />
            ) : collaborations?.results?.length > 0 ? (
              <InfiniteScroll
                dataLength={collaborations?.results?.length || 0}
                next={() => fetchCollaborators({ page: tableConfig.page + 1 })}
                hasMore={collaborations?.next}
                loader={<Loader />}
              >
                {collaborations?.results?.map((collaborator) => (
                  <CollaborationCard
                    key={collaborator.id}
                    collaborator={collaborator}
                  />
                ))}
              </InfiniteScroll>
            ) : (
              <h5 className="text-center p-4">
                {t("dashboard.business.collaborations.greetings.heading_2")}
              </h5>
            )}
          </div>
        </Col>
      </Row>
    </CollaborationsDetail>
  );
};

export default Collaborations;
