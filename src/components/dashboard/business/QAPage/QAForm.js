import {
  FormProvider,
  RHFTextAreaInput,
  RHFTextInput,
} from "@/components/hook-form";
import { useContext, useMemo } from "react";
import { Button } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { TOAST_ALERTS, TOAST_TYPES } from "@/constants/keywords";
import { API_ROUTER } from "@/services/apiRouter";
import { axiosPost } from "@/services/axiosHelper";
import { useToaster } from "@/hooks";
import { QuestionContext } from "@/contexts/QuestionContext";
import { useTranslate } from "@/locales";

const QAForm = () => {
  //Context
  const {
    setPaginatedData,
    setTableConfig,
    fetchMetaData,
    initTableConfig,
    businessId,
  } = useContext(QuestionContext);

  // Hooks
  const { t } = useTranslate();
  const { toaster } = useToaster();

  // Form Config
  const defaultValues = useMemo(
    () => ({
      question: "",
      answer: "",
    }),
    []
  );

  const formSchema = useMemo(() => {
    return yup
      .object()
      .shape({
        question: yup
          .string()
          .required(
            t("dashboard.business.qapage.qapage.qaform.fields.question.errors.required")
          )
          .trim(
            t("dashboard.business.qapage.qapage.qaform.fields.question.errors.invalid")
          )
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            t("dashboard.business.qapage.qapage.qaform.fields.question.errors.regex")
          ),
        answer: yup
          .string()
          .required(
            t("dashboard.business.qapage.qapage.qaform.fields.answer.errors.required")
          )
          .trim(
            t("dashboard.business.qapage.qapage.qaform.fields.answer.errors.invalid")
          )
          .matches(
            /^(?=.*[a-zA-Z])[a-zA-Z0-9 !@#$%=^&*()"'`|/_+{}\[\]:;<>,.?~\\-]+$/,
            t("dashboard.business.qapage.qapage.qaform.fields.answer.errors.regex")
          ),
      })
      .required()
      .strict(true);
  }, []);

  // Hooks

  const methods = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  // Constants
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmitForm = async (formData) => {
    try {
      const { question, answer } = formData;

      const res = await axiosPost(API_ROUTER.CREATE_QA_LIST(businessId), {
        question,
        answer,
      });

      if (!res.status) {
        return toaster(
          res?.message || TOAST_ALERTS.GENERAL_ERROR,
          TOAST_TYPES.ERROR
        );
      }

      if (res.status) {
        setPaginatedData([]);
        setTableConfig((prev) => ({
          ...prev,
          activePage: initTableConfig.activePage,
        }));
        fetchMetaData({
          page: initTableConfig.activePage,
        });
        toaster(TOAST_ALERTS.QA_LIST_UPDATED_SUCCESS, TOAST_TYPES.SUCCESS);
        methods.reset();
      }
    } catch (error) {
      toaster(TOAST_ALERTS.GENERAL_ERROR, TOAST_TYPES.ERROR);
    }
  };

  //Return
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmitForm)}>
      <div className="qf-end">
        <div>
          <RHFTextInput
            type="text"
            name="question"
            placeholder={t(
              "dashboard.business.qapage.qapage.qaform.fields.question.placeholder"
            )}
          />
          <RHFTextAreaInput
            name="answer"
            placeholder={t(
              "dashboard.business.qapage.qapage.qaform.fields.answer.placeholder"
            )}
            type="text"
            rows={3}
          />
        </div>
        <Button className="common-btn" disabled={isSubmitting} type="submit">
          {t("dashboard.business.qapage.qapage.qaform.button.add")}
        </Button>
      </div>
    </FormProvider>
  );
};

export default QAForm;
