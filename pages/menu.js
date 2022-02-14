import React from "react";
import Layout from "../components/Layout";

const Menu = ({ data }) => {
  return (
    <Layout>
      <div className="Menu font-cherry pt-14">
        <h1 className="text-[35px] mx-[16px] border-b-4 font-bold leading-[46px] text-darkRed border-darkRed w-[177px]">
          Our Menu
        </h1>
        <img src={data[0].image} alt="" />
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
