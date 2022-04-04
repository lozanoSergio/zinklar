import PropTypes from "prop-types";

import { DEFAULT_LOADING, DEAFULT_ERROR } from "../../../constants";

export const LoadingError = ({ children, error, loaded }) => {
  return <>{error ? <p>{DEAFULT_ERROR}</p> : !loaded ? <p>{DEFAULT_LOADING}</p> : children}</>;
};

LoadingError.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.instanceOf(Error),
  loaded: PropTypes.bool.isRequired,
};
