import React from "react";
import player from "./images/character_one.png";

// FOREST
import tree1 from "./images/tree_one.png";
import tree2 from "./images/tree_two.png";
import tree3 from "./images/tree_three.png";
import grave1 from "./images/grave.png";
import gold1 from "./images/gold_one.png";
import exitStreet from "./images/toStreet.png";
// STREET
import goldStatueOne from "./images/goldStatue.png";
import skeletonOne from "./images/skeleton.png";
import exitForest from "./images/toForest.png";


class Node extends React.Component {
  render() {
    const { i, j, start, treeOne, treeTwo, treeThree, grave, goldOne, toStreet, goldStatue, skeleton, toForest } = this.props;

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
          // FOR FOREST
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
              backgroundImage: `url('${exitStreet}')`,
              backgroundPosition: "0 0",
              width: `90px`,
              height: `90px`
            }}
          />
        ) // FOR STREET
        : goldStatue ? (
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
              backgroundImage: `url('${exitForest}')`,
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

export default Node;
