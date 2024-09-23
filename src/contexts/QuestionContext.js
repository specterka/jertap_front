import { useMetaData } from "@/hooks";
import { API_ROUTER } from "@/services/apiRouter";
import { useParams } from "next/navigation";
import React, { createContext, useEffect, useState } from "react";

export const QuestionContext = createContext({});

const QuestionProvider = ({ children }) => {
  // Config
  const initTableConfig = {
    activePage: 1,
    search: "",
    sorting: { column: "", direction: "" },
  };

  //states
  const [paginatedData, setPaginatedData] = useState([]);
  const [tableConfig, setTableConfig] = useState(initTableConfig);

  // Hooks
  const { businessId } = useParams();
  const [qaData, isFetching, fetchMetaData] = useMetaData(
    API_ROUTER.GET_QA_LIST(businessId),
    { page: tableConfig.activePage }
  );

  //Effects;
  useEffect(() => {
    if (qaData?.results && qaData?.results?.length > 0) {
      setPaginatedData((prev) => [
        ...(tableConfig.activePage === initTableConfig.activePage ? [] : prev),
        ...qaData.results,
      ]);
    } else {
      setPaginatedData([]);
    }
  }, [qaData?.results]);

  //Handlers;
  const onLoadMore = () => {
    if (qaData?.next) {
      setTableConfig((prev) => ({
        ...prev,
        activePage: prev.activePage + 1,
      }));
      fetchMetaData({
        page: tableConfig.activePage + 1,
      });
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        paginatedData,
        setPaginatedData,
        tableConfig,
        setTableConfig,
        qaData,
        isFetching,
        fetchMetaData,
        initTableConfig,
        onLoadMore,
        businessId,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};

export default QuestionProvider;
