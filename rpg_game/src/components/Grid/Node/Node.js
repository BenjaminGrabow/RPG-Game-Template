import React from "react";
import player from "../player.png";
import tree1 from "../tree_one.png";
import tree2 from "../tree_two.png";
import tree3 from "../tree_three.png";
import grave1 from "../grave.png";
import gold1 from "../gold_one.png";


class Node extends React.Component {
  render() {
    const { i, j, start, treeOne, treeTwo, treeThree, grave, goldOne } = this.props;

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
