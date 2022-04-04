import { useState, useCallback } from "react";

export const useDataTableSearch = ({ tableRows, searchOverFields }) => {
  const [searchText, setSearchText] = useState("");
  const [rows, setRows] = useState([]);

  const requestSearch = useCallback(
    (searchValue) => {
      setSearchText(searchValue);
      const filteredRows = tableRows.filter((row) => {
        return Object.keys(row).some((field) => {
          if (!searchOverFields || searchOverFields.indexOf(field) !== -1) {
            return row[field]?.toString().toLowerCase().includes(searchValue.toLowerCase());
          }
        });
      });
      setRows(filteredRows);
    },
    [searchOverFields, tableRows]
  );

  return {
    rows: searchText ? rows : tableRows,
    value: searchText,
    onChange: (event) => requestSearch(event.target.value),
  };
};
