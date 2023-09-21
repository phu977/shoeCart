import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { detail } = this.props;
    return (
      <div>
        <img width={200} src={detail.image} alt="" />
      </div>
    );
  }
}
