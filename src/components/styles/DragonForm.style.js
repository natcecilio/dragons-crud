import {createGlobalStyle, css} from 'styled-components';
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    font-family: 'Libre Baskerville', serif;
    background: linear-gradient(to left, #abbaab, #ffffff); 
    height: 100%;
    margin: 0;
    color: #ffbd31;
  }

  label {
    color: #757575;
    font-size: 14px;
  }

`
export const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 20px;
`

export const StyledForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);

  h2 {
    margin-bottom: 15px;
  }
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  ${sharedStyles}
`
export const StyledButton = styled.button`
  width: 100%;
    max-width: 350px;
    min-width: 135px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #ffbd31;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
`


export const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`