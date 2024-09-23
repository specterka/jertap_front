import React from "react";
import { Table } from "react-bootstrap";
import { ListingDelete, ListingEditButton } from "@/assets/svgs";
import TableLoader from "@/components/shared/table/TableLoader";
import NoDataRow from "@/components/shared/table/NoDataRow";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { format } from "date-fns";

const EventsList = ({
  data = [],
  isLoading = false,
  headerItems = [],
  onDelete = () => {},
  onEdit = () => {},
  handleSort = () => {},
  tableConfig = null,
}) => {
  // Hooks
  return (
    <Table responsive bordered>
      <TableHeader
        headerItems={headerItems}
        onSort={handleSort}
        tableConfig={tableConfig}
      />
      <tbody>
        {isLoading ? (
          <TableLoader colSpan={headerItems.length} />
        ) : data?.length > 0 ? (
          data.map((event, index) => (
            <TableRow key={event.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{event?.name}</TableCell>
              <TableCell>{event?.description}</TableCell>

              <TableCell>
                <div className="food-img">
                  <figure>
                    <img
                      src={event?.event_image}
                      alt="food-img1"
                      width={50}
                      height={50}
                    />
                  </figure>
                </div>
              </TableCell>
              <TableCell>
                {event?.is_approved_by_restaurant ? "Yes" : "No"}
              </TableCell>
              <TableCell>
                {event?.date_time
                  ? format(new Date(event?.date_time), "dd-MM-yyyy HH:mm:ss a")
                  : "No"}
              </TableCell>
              <TableCell>
                <span onClick={() => onEdit(event?.id)}>
                  <ListingEditButton />
                </span>
                <small onClick={() => onDelete(event.id)}>
                  <ListingDelete />
                </small>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <NoDataRow colSpan={headerItems.length} message="No Events Found" />
        )}
      </tbody>
    </Table>
  );
};

export default EventsList;
