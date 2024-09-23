import React from "react";

const NoDataRow = ({ colSpan, message = "No Data Found" }) => {
  return (
    <tr>
      <td colSpan={colSpan}>{message}</td>
    </tr>
  );
};

export default NoDataRow;
