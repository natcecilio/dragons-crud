import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
  font-family: "Roboto", sans-serif;
  background: linear-gradient(to left, #abbaab, #ffffff);
  height: 100%;
  margin: 0;
  padding: 0;
  color: #707070;
  min-height: 100vh;
  }

  header {
  text-align: center;
  margin: 10px 0 10px 0;
}

button {
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
}

`









