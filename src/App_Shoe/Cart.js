import React, { Component } from "react";

export default class Cart extends Component {
  renderTbody = () => {
    let { cart, handleDelete, handleChangeQuantity } = this.props;
    return cart.map((item) => {
      return (
        <tr>
          <td>{item.name}</td>
          <td>{item.price}$</td>
          <td>
            <img style={{ width: "100px" }} src={item.image} alt="" />
          </td>
          <td>
            <button
              className="btn btn-danger mx-3"
              onClick={() => {
                handleChangeQuantity(item.id, -1);
              }}
            >
              -
            </button>
            <strong>{item.soLuong}</strong>
            <button
              className="btn btn-dark mx-3"
              onClick={() => {
                handleChangeQuantity(item.id, 1);
              }}
            >
              +
            </button>
          </td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  totalProduct = () => {
    let { cart } = this.props;
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      total += cart[index].price * cart[index].soLuong;
    }
    return total;
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderTbody()}
          <tr>
            <th colSpan="4">Tổng tiền </th>
            <th>{this.totalProduct()}$</th>
          </tr>
        </tbody>
      </table>
    );
  }
}
