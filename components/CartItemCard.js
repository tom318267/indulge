import React from "react";
import { HiOutlineXCircle } from "react-icons/hi";

const CartItemCard = () => {
  return (
    <>
      <div className="flex justify-evenly items-center my-8">
        <div className="flex flex-col items-center">
          <img className="w-[105px]" src="/images/heaven.svg" alt="" />

          <div className="flex gap-2 mt-2">
            <label htmlFor="qty">Qty: </label>
            <select
              className="border border-black rounded-md"
              name="qty"
              id="qty"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        <div>
          <h2 className="font-regularSansita text-[30px]">$8.50</h2>
          <h2 className="font-sansita text-[21px]">Ice Cream Heaven</h2>
        </div>

        <div>
          <img className="cursor-pointer" src="/images/close.svg" alt="" />
        </div>
      </div>
      <hr className="w-11/12 mx-auto" />
    </>
  );
};

export default CartItemCard;
