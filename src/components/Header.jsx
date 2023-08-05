import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  //   const Hover = [{ name: "a" }, { name: "b" }, { name: "c" }];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <span className="name">1번</span>
      <span className="name">2번</span>
      <span className="name">3번</span>
      <span className="name">4번</span>
    </div>
  );
};

export default Header;
