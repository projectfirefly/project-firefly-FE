import React from "react";
import Icon from "../../assets/icons";

const svgNames = [
  "LambdaHatSM",
  "NerdGlassesSM",
  "PinkHeadphoneSM",
  "SunGlassesSM"
];
const containerStyles = {
  margin: "0 auto",
  height: "100%",
  marginTop: "100px",
  width: "30%",
  background: "#FFF"
};
const pickerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};
class Accessories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      curSVGindex: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  previous() {
    const lastIndex = svgNames.length - 1;
    const { curSVGindex } = this.state;
    const shouldResetIndex = curSVGindex === 0;
    const index = shouldResetIndex ? lastIndex : curSVGindex - 1;

    this.setState({
      curSVGindex: index
    });
  }

  next() {
    const lastIndex = svgNames.length - 1;
    const { curSVGindex } = this.state;
    const shouldResetIndex = curSVGindex === lastIndex;
    const index = shouldResetIndex ? 0 : curSVGindex + 1;

    this.setState({
      curSVGindex: index
    });
  }

  render() {
    return (
      <div style={containerStyles}>
        <div className="carousel" style={pickerStyles}>
          <Arrow
            direction="left"
            clickFunction={this.previous}
            name="LeftArrow"
          />
          <SvgImage iconName={svgNames[this.state.curSVGindex]} />
          <Arrow
            direction="right"
            clickFunction={this.next}
            name="RightArrow"
          />
        </div>
      </div>
    );
  }
}

const Arrow = ({ direction, clickFunction, name }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    <Icon name={name} height="60px" />
  </div>
);

const SvgImage = ({ iconName }) => {
  const styles = {
    height: "100px"
  };

  return <Icon name={iconName} className="svg-icon" style={styles} />;
};

export default Accessories;
