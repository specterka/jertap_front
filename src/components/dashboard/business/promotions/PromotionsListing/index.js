import React from "react";
import { Table } from "react-bootstrap";
import { ListingDelete, ListingEditButton } from "@/assets/svgs";
import TableLoader from "@/components/shared/table/TableLoader";
import NoDataRow from "@/components/shared/table/NoDataRow";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { getLabelFromValue } from "@/utils/helper";
import { OFFER_TYPES } from "@/constants/keywords";
import { fDateTime, fDateTimeSuffix } from "@/utils/formatTime";

const PromotionsListing = ({
  data = [],
  isLoading = false,
  headerItems = [],
  onDelete = () => {},
  onEdit = () => {},
}) => {
  return (
    <Table responsive bordered>
      <TableHeader headerItems={headerItems} />
      <tbody>
        {isLoading ? (
          <TableLoader colSpan={headerItems.length} />
        ) : data?.length > 0 ? (
          data.map((product, index) => (
            <TableRow key={product.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{product?.title}</TableCell>
              <TableCell>
                {product?.offer_type
                  ? getLabelFromValue(OFFER_TYPES, product?.offer_type)
                  : "-"}
              </TableCell>
              <TableCell>{product?.discount}</TableCell>

              <TableCell>{product?.is_active ? "Yes" : "No"}</TableCell>
              <TableCell>{product?.apply_on_everyday ? "Yes" : "No"}</TableCell>
              <TableCell>
                {product?.created_at ? fDateTime(product?.created_at) : ""}
              </TableCell>

              <TableCell>
                <span onClick={() => onEdit(product?.id)}>
                  <ListingEditButton />
                </span>
                <small onClick={() => onDelete(product.id)}>
                  <ListingDelete />
                </small>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <NoDataRow
            colSpan={headerItems.length}
            message="No Promotions Found"
          />
        )}
      </tbody>
    </Table>
  );
};

export default PromotionsListing;
