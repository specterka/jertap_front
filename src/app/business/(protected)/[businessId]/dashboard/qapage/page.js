"use client";

import { Qfdetail } from "../../../../../../styles/q&f.style";
import { Loader, QAForm, QAList } from "@/components";
import { useParams, useRouter } from "next/navigation";
import { PATH_BUSINESS } from "@/routes/paths";
import { useContext } from "react";
import QuestionProvider, { QuestionContext } from "@/contexts/QuestionContext";
import { useTranslate } from "@/locales";

const QFPage = () => {
  // Hooks
  const { t } = useTranslate();
  const { isFetching } = useContext(QuestionContext);
  const { push } = useRouter();
  const { businessId } = useParams();

  // Return
  return (
    <QuestionProvider>
      <Qfdetail>
        <div className="q-details-block">
          <h1>{t("dashboard.business.qapage.greetings.heading")}</h1>
          <button
            className="common-btn"
            onClick={() => push(PATH_BUSINESS.qapage.clientQueries(businessId))}
          >
            {t("dashboard.business.qapage.button.client_queries")}
          </button>
        </div>
        {isFetching ? (
          <Loader />
        ) : (
          <>
            <QAList />
          </>
        )}
        <QAForm />
      </Qfdetail>
    </QuestionProvider>
  );
};

export default QFPage;
