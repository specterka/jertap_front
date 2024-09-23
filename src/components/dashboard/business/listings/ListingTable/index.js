import React from "react";
import { Table } from "react-bootstrap";
import { ListingDelete, ListingEditButton } from "@/assets/svgs";
import TableLoader from "@/components/shared/table/TableLoader";
import NoDataRow from "@/components/shared/table/NoDataRow";
import TableHeader from "@/components/shared/table/TableHeader";
import TableRow from "@/components/shared/table/TableRow";
import TableCell from "@/components/shared/table/TableCell";
import { getTranslatedData } from "@/utils/helper";
import { useLocales } from "@/locales";

const ListingTable = ({
  data = [],
  isLoading = false,
  headerItems = [],
  onDelete = () => {},
  onEdit = () => {},
}) => {
  // Hooks
  const { currentLang } = useLocales();
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
              <TableCell>{product?.Item_name}</TableCell>
              <TableCell>{product?.price || "-"}</TableCell>
              <TableCell>
                {product?.menu_type
                  ? getTranslatedData(currentLang, product?.menu_type, "type")
                  : "-"}
              </TableCell>

              <TableCell>{product?.description}</TableCell>
              <TableCell>{product?.is_veg ? "Yes" : "No"}</TableCell>
              <TableCell>
                <div className="food-img">
                  <figure>
                    <img
                      src={product?.cover_image}
                      alt="food-img1"
                      width={50}
                      height={50}
                    />
                  </figure>
                </div>
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
          <NoDataRow colSpan={headerItems.length} message="No Menus Found" />
        )}
      </tbody>
    </Table>
  );
};

export default ListingTable;
