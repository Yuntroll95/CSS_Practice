import React from "react";
import Header from "../components/Header";
import "./Main.css";

const Main = () => {
  return (
    <div className="main_container">
      <Header />
      <div className="box">
        <span>안녕하세요</span>
        <input type="text" className="inputName" />
      </div>
    </div>
  );
};

export default Main;
