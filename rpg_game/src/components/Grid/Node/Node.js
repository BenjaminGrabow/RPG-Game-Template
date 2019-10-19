import React from "react";
import player from "../player.png";
import treeOne from "../tree_one.png";
import treeTwo from "../tree_two.png";
import treeThree from "../tree_three.png";


class Node extends React.Component {
  render() {
    const { i, j, start } = this.props;

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
              height: `40px`,
            }}
          />
        ) : treeOne ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${treeOne}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`,
            }}
          />
        ) : treeTwo ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${treeTwo}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`,
            }}
          />
        ) : treeThree ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url('${treeThree}')`,
              backgroundPosition: "0 0",
              width: `60px`,
              height: `50px`,
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: `40px`,
              height: `40px`,
            }}
          />
        )}
      </td>
    );
  }
}

export default Node;