import React from "react";
import player from "../../character_one.png";

import goldStatueOne from "../images/goldStatue.png";
import skeletonOne from "../images/skeleton.png";
import exit from "../images/toForest.png";
// import grave1 from "../images/grave.png";
// import gold1 from "../images/gold_one.png";


class StreetNode extends React.Component {
  render() {
    const { i, j, start, goldStatue, skeleton, toForest } = this.props;

    return (
      <td className="node" id={`${i} ${j}`}>
        {start ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${player}')`,
              backgroundPosition: "0 0",
              width: `40px`,
              height: `40px`
            }}
          />
        ) : goldStatue ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${goldStatueOne}')`,
              backgroundPosition: "0 0",
              width: `40px`,
              height: `65px`
            }}
          />
        ) : skeleton ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${skeletonOne}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `35px`
            }}
          />
        ) : toForest ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${exit}')`,
              backgroundPosition: "0 0",
              width: `35px`,
              height: `40px`
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: `40px`,
              height: `40px`
            }}
          />
        )}
      </td>
    );
  }
}

export default StreetNode;
