import React from "react";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { DATA } from "../data";

const Menu = () => {
  return (
    <Layout>
      <div className="Menu font-cherry pt-14">
        <h1 className="text-[35px] mx-[16px] border-b-4 font-bold leading-[46px] text-darkRed border-darkRed w-[177px] mb-20">
          Our Menu
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 text-center">
          {DATA.map((item) => (
            <div className="flex flex-col items-center justify-end mb-10">
              <img className="w-1/2" src={item.image} alt="" />
              <h2 className="text-[21px] font-cherry mb-4">{item.name}</h2>
              <Button
                styleClass="Button bg-darkPink w-[178px] text-white rounded-full h-[47px] p-[5px] font-varela text-[20px]"
                value="Add to Cart"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Menu;

export async function getServerSideProps() {
  const res = await fetch("https://indulge-api.herokuapp.com/ice-cream");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
