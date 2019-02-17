import React, { Component } from "react";
import { Container, Form } from "./styles";
import api from "../../services/api";

import ragnarok from "../../assets/assasin.jpg";

import CompareList from "../../components/CompareList";

export default class Main extends Component {
  state = {
    repositoryInput: "",
    repositories: []
  };

  handleAddRepository = async e => {
    e.preventDefault();

    try {
      const response = await api.get(`/repos/${this.state.repositoryInput}`);

      this.setState({
        repositoryInput: "",
        repositories: [...this.state.repositories, response.data]
      });
    } catch (err) {}
  };

  render() {
    return (
      <Container>
        <img src={ragnarok} alt="ragnarok assasin" />

        <Form onSubmit={this.handleAddRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={this.state.repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={this.state.repositories} />
      </Container>
    );
  }
}
