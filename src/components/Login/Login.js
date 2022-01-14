import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DragonContext from "../../context/DragonContext";
import styled from "styled-components";
import logo from "../../assets/logo-finale.png";
import Input from "./Input";
import { useAuth } from "../../context/AuthContext";
import { useForm } from "react-hook-form";

function initialState() {
  return { user: "", password: "" };
}

const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data);
  };

  const [values, setValues] = useState(initialState);
  const { setToken } = useContext(DragonContext);
  const navigate = useNavigate();

  function onChange(event) {
    const { value, name } = event.target;

    setValues([...values, [name], value]);
  }

  return (
    <Container>
      <Logo>
        <img src={logo} alt="dragon land" />
      </Logo>

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Faça seu Cadastro</h3>

        <input type="password" {...register("user", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.user && <span>This field is required</span>}

        <input type="password" {...register("password", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}

        {/*<Input
          type="text"
          id="user"
          placeholder="Digite seu Nome"
          onChange={(e) =>
            setUser((user) => {
              return { ...user, user: e.target.value };
            })
          }
          value={values.user}
        />

        <Input
          type="password"
          id="password"
          placeholder="Digite sua Senha"
          onChange={(e) =>
            setUser((user) => {
              console.log("teste", e.target.value);
              return { ...user, password: e.target.value };
            })
          }
          value={values.password}
        />*/}

        <button type="submit">Logar</button>
      </form>
    </Container>
  );
};

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    color: #7d4066;
    margin-bottom: 2rem;
  }

  button {
    width: 35%;
    max-width: 350px;
    min-width: 135px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #d8a421;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &*:hover* {
      transform: translateY(-3px);
    }
  }

  a {
    text-decoration: none;
  }
`;

const Container = styled.div`
  min-width: 360px;
  backdrop-filter: blur(35px);
  background-color: rgba(255, 255, 255, 0.8);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

const Logo = styled.div`
  img {
    height: 6rem;
  }
`;

export default Login;
