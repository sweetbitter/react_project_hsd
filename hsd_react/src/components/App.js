import React, { Component } from "react";
import PropTypes from "prop-types";
const propTypes = {};
const defaultProps = {};
class hsdComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>hsdComponent</div>;
  }
}
hsdComponent.propTypes = propTypes;
hsdComponent.defaultProps = defaultProps;
export default hsdComponent;
