import React from "react";
import ReactMinimalPieChart from "react-minimal-pie-chart";

/**
 * 
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
export default class PieChart extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <ReactMinimalPieChart
        animate
        animationDuration={1200}
        animationEasing="ease-out"
        cx={50}
        cy={50}
        data={this.props.data}
        label
        labelPosition={60}
        labelStyle={{
          fontFamily: "Montserrat Alternates",
          fontSize: "6px",
          fontWeight: "bold"
        }}
        lengthAngle={360}
        lineWidth={20}
        onClick={undefined}
        onMouseOut={undefined}
        onMouseOver={undefined}
        paddingAngle={18}
        radius={50}
        rounded
        startAngle={0}
        viewBoxSize={[100, 100]}
      />
    );
  }
}
