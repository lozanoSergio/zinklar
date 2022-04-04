import PropTypes from "prop-types";

import styles from "./SearchInput.module.css";

export const SearchInput = ({ value, onChange, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};
