import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;

  img {
    height: 300px;
    width: 100%;
    max-width: 400px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  display: flex;

  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: #fff;
    font-size: 18px;
    color: #aaa;
    border-radius: 3px;

    border: ${props => (props.withError ? "2px solid #F00" : 0)};
  }

  button {
    width: 80px;
    height: 55px;
    padding: 0 20px;
    margin-left: 10px;
    background: #ed553b;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;
    text-align: center;

    &:hover {
      background: #cc6600;
    }
  }
`;
