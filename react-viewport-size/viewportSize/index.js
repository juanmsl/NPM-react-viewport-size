function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import './index.css';

class ViewportSize extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "getCurrentSize", () => ({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight
    }));

    _defineProperty(this, "updateSize", () => {
      this.setState(this.getCurrentSize());
    });

    this.state = this.getCurrentSize();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
  }

  render() {
    const {
      width,
      height
    } = this.state;
    const {
      className,
      corner,
      enabledInProduction
    } = this.props;
    if (!enabledInProduction && process.env.NODE_ENV === "production") return null;
    return React.createElement("section", {
      className: `${className} ${corner}`
    }, width, " x ", height);
  }

}

_defineProperty(ViewportSize, "defaultProps", {
  className: "viewport-size-widget",
  corner: "top-right",
  enabledInProduction: false
});

export default ViewportSize;