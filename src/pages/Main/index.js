import React from "react";
import { Container, Form } from "./styles";

import ragnarok from "../../assets/assasin.jpg";

import CompareList from "../../components/CompareList";

const Main = () => (
  <Container>
    <img src={ragnarok} alt="ragnarok assasin" />

    <Form>
      <input type="text" placeholder="user/repository" />
      <button type="submit">OK</button>
    </Form>

    <CompareList />
  </Container>
);

export default Main;
