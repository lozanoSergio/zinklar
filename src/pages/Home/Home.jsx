import useRecusriveQuery from "../../hooks/useRecursiveQuery";
import { formatTableData, generateGitQuery } from "../../helpers";
import { Table, LoadingError } from "../../components/molecules";
import { SearchInput } from "../../components/atoms";
import { useDataTableSearch } from "../../hooks/useDataTableSearch";
import { SEARCH_PLACEHOLDER } from "../../constants";
import { useParams } from "react-router-dom";

import styles from "./Home.module.css";

export const Home = () => {
  const { owner, repo } = useParams();

  const queryUrl = generateGitQuery(owner, repo);
  const [data, loaded, error] = useRecusriveQuery(queryUrl);

  const { rows, value, onChange } = useDataTableSearch({
    tableRows: formatTableData(data),
    searchOverFields: ["name", "count"],
  });

  const tableData = {
    headers: ["id", "file name", "count"],
    rowsData: rows,
  };

  return (
    <LoadingError loaded={loaded} error={error}>
      <SearchInput value={value} onChange={onChange} placeholder={SEARCH_PLACEHOLDER} />
      <div className={styles.tableWrapper}>
        <Table tableData={tableData} />
      </div>
    </LoadingError>
  );
};
