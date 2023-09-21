import React, { Component } from "react";
import Cart from "./Cart";
import ListShoe from "./ListShoe";
import DetailShoe from "./DetailShoe";
import { ShoeArr } from "./Data";
import { message } from "antd";

export default class App_Shoe extends Component {
  state = {
    shoeArr: ShoeArr,
    detail: ShoeArr[0],
    cart: [],
  };
  handleAdd = (shoe) => {
    let cloneCart = [...this.state.cart];
    var index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      var newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleDelete = (shoeId) => {
    let cloneCart = [...this.state.cart];
    var index = cloneCart.findIndex((item) => {
      return item.id == shoeId;
    });
    cloneCart.splice(index, 1);
    this.setState({
      cart: cloneCart,
    });
    message.success("xóa thành công");
  };
  handleViewDetail = (shoe) => {
    this.setState({ detail: shoe });
  };
  handleChangeQuantity = (id, option) => {
    // option : +1 , -1
    // shoe.soLuong = shoe.soLuong + option
    let cloneCart = [...this.state.cart];
    let index = cloneCart.findIndex((item) => {
      return item.id === id;
    });
    if (index !== -1) {
      let shoe = cloneCart[index];
      shoe.soLuong += option;
      if (shoe.soLuong < 1) {
        cloneCart.splice(index, 1);
        message.success("xóa thành công");
      }
    }
    // cloneCart[index].soLuong = cloneCart[index].soLuong + option;
    // // nếu số lượng sau khi thay đổi = 0 thì xóa
    // cloneCart[index].soLuong == 0 && cloneCart.splice(index, 1);
    this.setState({ cart: cloneCart });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-7">
            <Cart
              cart={this.state.cart}
              handleDelete={this.handleDelete}
              handleChangeQuantity={this.handleChangeQuantity}
            />
          </div>
          <div className="col-5">
            <ListShoe
              shoeArr={this.state.shoeArr}
              handleAdd={this.handleAdd}
              handleViewDetail={this.handleViewDetail}
            />
          </div>
        </div>
        <DetailShoe detail={this.state.detail} />
      </div>
    );
  }
}
