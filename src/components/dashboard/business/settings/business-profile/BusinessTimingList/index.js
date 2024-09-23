import React from "react";
import DatePicker from "react-datepicker";
import TableCell from "@/components/shared/table/TableCell";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import { Button } from "react-bootstrap";
import TableLoader from "@/components/shared/table/TableLoader";
import NoDataRow from "@/components/shared/table/NoDataRow";
import { getDateFromTimeString } from "@/utils/formatTime";
import i18n from "@/locales/i18n";
import { useTranslate } from "@/locales";

const TABLE_HEADINGS = [
  {
    id: "day",
    label: i18n.t(
      "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.heading.day"
    ),
  },
  {
    id: "from_hour",
    label: i18n.t(
      "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.heading.openAt"
    ),
  },
  {
    id: "to_hour",
    label: i18n.t(
      "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.heading.closeAt"
    ),
  },
  {
    id: "action",
    label: i18n.t(
      "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.heading.action"
    ),
  },
];

const BusinessTimingList = ({
  timings = [],
  isLoading = false,
  onChangeTimings = () => {},
  onUpdate = () => {},
}) => {
  // Hooks
  const { t } = useTranslate();

  const filterStartTimes = (index, time) => {
    const toHour =
      typeof timings[index].to_hour === "string"
        ? getDateFromTimeString(timings[index].to_hour)
        : timings[index].to_hour;

    // Disable times that are less than or equal to the selected "to_hour"
    if (toHour) {
      return time <= toHour;
    }

    return true;
  };

  const filterEndTimes = (index, time) => {
    const fromHour =
      typeof timings[index].from_hour === "string"
        ? getDateFromTimeString(timings[index].from_hour)
        : timings[index].from_hour;

    // Disable times that are less than or equal to the selected "to_hour"
    if (fromHour) {
      return time >= fromHour;
    }

    return false;
  };
  return (
    <table className="table table-bordered">
      <TableHeader headerItems={TABLE_HEADINGS} />
      <tbody>
        {isLoading ? (
          <TableLoader colSpan={TABLE_HEADINGS.length} />
        ) : timings && timings.length > 0 ? (
          timings.map(({ id, weekday, from_hour, to_hour }, index) => (
            <TableRow key={id}>
              <TableCell>{weekday}</TableCell>
              <TableCell>
                <div className="form-group">
                  <DatePicker
                    selected={
                      typeof from_hour === "string"
                        ? getDateFromTimeString(from_hour)
                        : from_hour
                    }
                    onChange={(date) =>
                      onChangeTimings(index, "from_hour", date)
                    }
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption={t(
                      "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.fields.openAt.label"
                    )}
                    dateFormat="HH:mm:ss"
                    timeFormat="HH:mm:ss"
                    filterTime={(time) => filterStartTimes(index, time)}
                  />
                </div>
              </TableCell>
              <TableCell>
                <div className="form-group">
                  <DatePicker
                    selected={
                      typeof to_hour === "string"
                        ? getDateFromTimeString(to_hour)
                        : to_hour
                    }
                    onChange={(date) => onChangeTimings(index, "to_hour", date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption={t(
                      "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.fields.closeAt.label"
                    )}
                    dateFormat="HH:mm:ss"
                    timeFormat="HH:mm:ss"
                    filterTime={(time) => filterEndTimes(index, time)}
                  />
                </div>
              </TableCell>
              <TableCell>
                <Button
                  variant="common-btn"
                  onClick={() => onUpdate(id)}
                  disabled={isLoading || !from_hour || !to_hour}
                >
                  {t(
                    "dashboard.business.settings.businessProfile.tabs.restaurantTiming.list.button.update"
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <NoDataRow colSpan={TABLE_HEADINGS.length} />
        )}
      </tbody>
    </table>
  );
};

export default BusinessTimingList;
