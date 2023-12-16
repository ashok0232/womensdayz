import React from "react";
import { useSelector } from "react-redux";

export default function CartBill({ item }) {
  const data = useSelector((state) => state.cart);

  const findCartItem = (itemId) => {
    return data.find((bitem) => bitem.id === itemId);
  };

  const calculateTotalPrice = (cartItem) => {
    if (cartItem.offer <= 0) {
      return cartItem.quantity * item.price;
    } else {
      return Math.abs(
        cartItem.quantity * (Math.floor((item.offer / 100) * item.price) - item.price)
      );
    }
  };

  return (
    <div className="card-body d-flex p-4 pb-1 pt-3">
      <p className="card-text w-75">
        {findCartItem(item.id) && findCartItem(item.id).name}
      </p>
      <p className="card-text w-25 ms-5 mt-1">
        <b>₹ {findCartItem(item.id) && calculateTotalPrice(findCartItem(item.id))}</b>
      </p>
    </div>
  );
}
