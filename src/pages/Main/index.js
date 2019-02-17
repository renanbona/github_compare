import React, { Component } from "react";
import { Container, Form } from "./styles";

import ragnarok from "../../assets/assasin.jpg";

const Main = () => (
  <Container>
    <img src={ragnarok} alt="ragnarok assasin" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">OK</button>
    </Form>
  </Container>
);

export default Main;
