import React, { Component } from "react";
import ItemShoe from "./ItemShoe";

export default class ListShoe extends Component {
  renderList = () => {
    let { shoeArr } = this.props;
    return shoeArr.map((item, index) => {
      return (
        <ItemShoe
          item={item}
          key={index}
          handleAdd={this.props.handleAdd}
          handleViewDetail={this.props.handleViewDetail}
        />
      );
    });
  };
  render() {
    return <div className="row">{this.renderList()}</div>;
  }
}
