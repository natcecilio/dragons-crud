import React from 'react'
import styled from 'styled-components'

const Main = () => {
  return (
    <Container>
      <h1>Escolha o <br /> seu Dragão</h1>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Griffy', cursive;
    font-size: 5rem;
    font-weight: 900;
    color: #fff;
    text-shadow: 2px 2px #7a4444;

    @media (max-width: 900px) {
      display: none;
    }
    
  }
`

export default Main
