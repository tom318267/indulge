import React from "react";
import CartItemCard from "../components/cartItemCard";
import Layout from "../components/Layout";

const Cart = () => {
  return (
    <Layout>
      <div className="pt-14">
        <h1 className="font-cherry text-[35px] mx-[16px] font-bold text-darkRed border-b-4 border-darkRed w-[177px]">
          Your Cart
        </h1>

        <div>
          <CartItemCard />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
