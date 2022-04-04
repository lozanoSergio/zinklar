import PropTypes from "prop-types";

import { NO_TABLE_DATA } from "../../../constants";
import { TableHeader, TableRow } from "../../atoms";

import styles from "./Table.module.css";

export const Table = ({ tableData }) => {
  const { headers, rowsData } = tableData;

  return (
    <table role="data-table">
      <TableHeader headerNames={headers} />
      <tbody className={styles.table}>
        {rowsData && rowsData.length ? (
          rowsData.map((rowData, idx) => <TableRow key={idx} rowData={rowData} />)
        ) : (
          <tr>
            <td>
              <p>{NO_TABLE_DATA}</p>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  tableData: PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.string),
    rowsData: PropTypes.arrayOf(PropTypes.object),
  }),
};
