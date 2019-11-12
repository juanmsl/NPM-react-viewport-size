import React from 'react';
import './index.css';

class ViewportSize extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCurrentSize();
  }

  static defaultProps = {
    className: "viewport-size-widget",
    corner: "top-right",
    enabledInProduction: false
  };

  getCurrentSize = () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  });

  updateSize = () => {
    this.setState(this.getCurrentSize());
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateSize);
  }

  render() {
    const { width, height } = this.state;
    const { className, corner, enabledInProduction } = this.props;

    if (!enabledInProduction && process.env.NODE_ENV === "production") return null;

    return (
      <section className={`${className} ${corner}`}>
        {width} x {height}
      </section>
    );
  }
}

export default ViewportSize;