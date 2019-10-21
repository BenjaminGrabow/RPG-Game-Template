import React from "react";
import player from "../../character_one.png";

import tree1 from "../images/tree_one.png";
import tree2 from "../images/tree_two.png";
import tree3 from "../images/tree_three.png";
import grave1 from "../images/grave.png";
import gold1 from "../images/gold_one.png";
import exit from "../images/toStreet.png";


class Node extends React.Component {
  render() {
    const { i, j, start, treeOne, treeTwo, treeThree, grave, goldOne, toStreet } = this.props;

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
        ) : treeOne ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree1}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`
            }}
          />
        ) : treeTwo ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree2}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`
            }}
          />
        ) : treeThree ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${tree3}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`
            }}
          />
        ) : grave ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${grave1}')`,
              backgroundPosition: "0 0",
              width: `35px`,
              height: `40px`
            }}
          />
        ) : goldOne ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${gold1}')`,
              backgroundPosition: "0 0",
              width: `70px`,
              height: `63px`
            }}
          />
        ) : toStreet ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${exit}')`,
              backgroundPosition: "0 0",
              width: `90px`,
              height: `90px`
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

export default Node;
