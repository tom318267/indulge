import React from "react";
import Button from "../components/Button";
import CartItemCard from "../components/CartItemCard";
import Layout from "../components/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className="pt-14">
        <h1 className="font-cherry text-[35px] mx-[16px] font-bold text-darkRed border-b-4 border-darkRed w-[177px] mb-20">
          Your Cart
        </h1>

        <div>
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </div>

        <div className="flex flex-col justify-center items-center gap-4 my-10">
          <h1 className="text-[30px] font-regularSansita font-bold">
            Total: $26.50
          </h1>

          <Button
            styleClass="Button bg-darkPink w-4/5 text-white rounded-full h-[47px] p-[8px] font-varela text-[20px]"
            value="Checkout"
            params="checkout"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
