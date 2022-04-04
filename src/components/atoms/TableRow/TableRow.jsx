import PropTypes from "prop-types";

import styles from "./TableRow.module.css";

export const TableRow = ({ rowData }) => {
  return (
    <tr>
      {Object.keys(rowData).map((key) => (
        <td key={key} className={styles.row}>
          {rowData[key]}
        </td>
      ))}
    </tr>
  );
};

TableRow.propTypes = {
  rowData: PropTypes.object,
};
