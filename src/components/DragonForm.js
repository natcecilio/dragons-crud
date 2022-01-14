import React, { useState } from 'react';
import  {GlobalStyle,
                StyledFormWrapper,
                StyledForm,
                StyledInput,
                StyledError,
                StyledButton,
               } from './styles/DragonForm.style'
import api from '../services/api';
import { useNavigate } from 'react-router-dom'    

const DragonForm = (props) => {
  const [dragon, setDragon] =useState(() => {
    return {
      name: props.dragon ? props.dragon.name : '',
      type: props.dragon ? props.dragon.type : '',
      createdAt: props.dragon ? props.dragon.date : ''
    }
  })

  const [errorMsg, setErrorMsg] = useState('');
  const { name, type } = dragon;
  let navigate = useNavigate()

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const values = [name, type]
    let errorMsg = '';
    

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    })

    if (allFieldsFilled) {
      const dragon = {
        name,
        type,
        createdAt: new Date()
      }
      props.handleOnSubmit(dragon)
      await api.post('api/v1/dragon', dragon)
      console.log(dragon)
    } else {
      errorMsg = 'É necessário preencher todos os campos.'
    }
    setErrorMsg(errorMsg)

    navigate('/')
  }


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      
      case 'name':
        setDragon((prevState) => ({
          ...prevState,
          [name]: value
        }));
        break;
        case 'type':
        setDragon((prevState) => ({
          ...prevState,
          [name]: value
        }));
        break;
    }
  }

  return(
    <>
    <GlobalStyle />
      <StyledFormWrapper>
     
      <StyledForm onSubmit={handleOnSubmit}>
        <h2>Cadastro de Dragões</h2>     
        <label htmlFor='name'>Nome do Dragão</label>
        <StyledInput
        type='text' 
        name='name' 
        value={name}
        placeholder='Digite o nome do seu Dragão'
        onChange={handleInputChange}
        />

        <label htmlFor='type'>Tipo do Dragão</label>
        <StyledInput  
        type='text' 
        name='type' 
        value={type}
        placeholder='Digite o tipo do seu Dragão'
        onChange={handleInputChange}
        />

       
        <StyledError> {errorMsg && <p>{errorMsg}</p>}</StyledError>

        
        <StyledButton type='submit'>Enviar</StyledButton>   
       
      </StyledForm>
      </StyledFormWrapper>
    </>
  )
}



export default DragonForm;