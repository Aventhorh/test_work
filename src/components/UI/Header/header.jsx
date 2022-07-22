import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <h1 className={cl.header__title}>Bear</h1>
    </div>
  );
};

export default Header;
