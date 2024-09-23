import React from "react";
import { Spinner } from "react-bootstrap";

const TableLoader = ({ colSpan }) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <Spinner />
      </td>
    </tr>
  );
};

export default TableLoader;
