import React, { Component } from "react";

export default class ItemShoe extends Component {
  converNameShoe = (name) => {
    let maxLength = 12;
    if (name.length > maxLength) {
      return name.slice(0, maxLength) + "...";
    } else {
      return name;
    }
  };
  render() {
    let { image, name } = this.props.item;
    return (
      <div className="col-3">
        <div className="card text-left">
          <img className="card-img-top" src={image} alt />
          <div className="card-body">
            <h4 className="card-title">{this.converNameShoe(name)}</h4>
            <p className="card-text">
              <button
                className="btn btn-info mr-2"
                onClick={() => {
                  this.props.handleViewDetail(this.props.item);
                }}
              >
                View
              </button>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.handleAdd(this.props.item);
                }}
              >
                Add
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
