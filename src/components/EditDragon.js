import React, { useState, useEffect} from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import api from '../services/api'
import { StyledFormWrapper, 
         StyledForm, 
         StyledInput,
         StyledButton,
         StyledButtonCancel } from './styles/EditDragon.style'



const EditDragon = props => {
 
  let navigate = useNavigate()
  const params = useParams()
  const [dragon, setDragon] = useState([])

  

  const apiCall = async () => {
    
    const request = api.get(`api/v1/dragon/${params.id}`);
    const response = await request;
    setDragon(response.data);

  }

  useEffect(() => {
    apiCall()
  },[])

  const saveDragon = async (event) => {
   event.preventDefault()
   await api.put(`api/v1/dragon/${params.id}`, { 
        name:dragon.name,
        type:dragon.type,
        ...dragon
    })

   navigate('/')
  }

  const handleInputChange = event => {
    const { name, value } = event.target

    setDragon({ ...dragon, [name]: value })
  }
  
  

  
  return (
    <>
   
      <StyledFormWrapper >
          
      <StyledForm onSubmit={saveDragon} >
        <h1>Edite Seu Dragão</h1> <br/>
        <h3>Editando Dragão de nº {params.id}</h3> <br/>
        <label htmlFor='name'>Nome do Dragão</label>
        
      {dragon !== undefined &&
        <StyledInput
        type='text' 
        name='name' 
        value={dragon.name}
        placeholder='Edite o nome do seu Dragão'
        onChange={handleInputChange}
        />}

        <label htmlFor='type'>Tipo do Dragão</label>

        {dragon !== undefined &&
        <StyledInput  
        type='text' 
        name='type' 
        value={dragon.type}
        placeholder='Edite o tipo do seu Dragão'
        onChange={handleInputChange}
        />}

        <div>
        <StyledButton type='submit'>Salvar</StyledButton>
        <Link to='/'> 
        <StyledButtonCancel> Cancelar</StyledButtonCancel>   
        </Link> 
        </div>  
      </StyledForm>
      </StyledFormWrapper>
    </>

     
   
  )
}

export default EditDragon
