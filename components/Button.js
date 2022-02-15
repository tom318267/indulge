import Link from "next/link";
import React from "react";

const Button = ({ styleClass, value, onClick, params }) => {
  return (
    <Link href={`/${params}`}>
      <button className={`${styleClass}`} onClick={onClick}>
        {value}
      </button>
    </Link>
  );
};

export default Button;
