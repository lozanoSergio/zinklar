import PropTypes from "prop-types";
import styles from "./TableHeader.module.css";

export const TableHeader = ({ headerNames }) => {
  if (!headerNames) return null;

  return (
    <thead>
      <tr>
        {headerNames.map((name, idx) => (
          <th key={idx} className={styles.headerContent}>
            {name}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  headerNames: PropTypes.arrayOf(PropTypes.string),
};
