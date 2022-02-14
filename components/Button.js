import Link from "next/link";
import React from "react";

const Button = ({ styleClass, value, onClick }) => {
  return (
    <Link href="/menu">
      <button className={`${styleClass}`} onClick={onClick}>
        {value}
      </button>
    </Link>
  );
};

export default Button;
