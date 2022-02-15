import React from "react";

const CartItemCard = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div>
        <img className="w-[105px]" src="/images/heaven.svg" alt="" />
        <label htmlFor="qty">Qty</label>

        <select name="qty" id="qty">
          <option value="1">1</option>
        </select>
      </div>

      <div>
        <h2>$8.50</h2>
        <h2>Ice Cream Heaven</h2>
      </div>

      <div>
        <img src="/images/close.svg" alt="" />
      </div>
    </div>
  );
};

export default CartItemCard;
