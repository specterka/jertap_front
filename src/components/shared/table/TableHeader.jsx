import { DownArrow, UpArrow } from "@/assets/svgs";
import React from "react";

const TableHeader = ({
  headerItems = [],
  onSort = null,
  tableConfig = null,
}) => {
  return (
    <thead>
      <tr>
        {headerItems?.map(({ id, label, isSort = false, key }) => (
          <th
            key={id}
            className={isSort ? "cursor-pointer-block" : ""}
            onClick={() =>
              isSort
                ? onSort(
                    key,
                    tableConfig.sortBy === key
                      ? tableConfig.sortOrder === "desc"
                        ? "asc"
                        : "desc"
                      : "asc"
                  )
                : null
            }
          >
            {label}
            {onSort && isSort ? (
              <>
                {tableConfig.sortBy === key &&
                  tableConfig.sortOrder === "desc" && <DownArrow />}
                {tableConfig.sortBy === key &&
                  tableConfig.sortOrder === "asc" && <UpArrow />}
              </>
            ) : null}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
