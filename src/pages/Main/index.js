import React, { Component } from "react";
import ragnarok from "../../assets/assasin.jpg";

const Main = () => (
  <div>
    <img src={ragnarok} alt="ragnarok assasin" />

    <form>
      <input type="text" placeholder="userr/repository" />
      <button>OK</button>
    </form>
  </div>
);

export default Main;
