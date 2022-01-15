import React from "react";
import styled from "styled-components";

const Input = ({ type, placeholder, register, name }) => {
  return (
    <Container>
      <input
        style={StyledInput}
        {...register(name)}
        placeholder={placeholder && placeholder}
        type={type ? type : "text"}
        required
        autoComplete="off"
      />
      {/*<Status />*/}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInput = {
  width: "80%",
  maxWidth: "350px",
  minWidth: "250px",
  height: "40px",
  border: "none",
  bordeRadius: "15px",
  margin: "0.5rem 0",
  backgroundColor: "#f5f5f5",
  boxShadow: "0px 14px 9px -15px rgba(0, 0, 0, 0.25)",
  padding: "0 1rem",
  transition: "all 0.2s ease-in",

  //&:hover {
  //transform: translateY(-3px);
  //}
};

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 1rem;

  ${StyledInput}:invalid + & {
    background: #9d9d9d;
  }

  ${StyledInput}:valid + & {
    background: #027502;
  }
`;

export default Input;
