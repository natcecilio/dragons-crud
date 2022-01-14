import React from 'react'

import {CardWrapper, 
        CardHeader, 
        CardHeading,
        CardBody,
        ButtonEdit,
        ButtonTrash} from "./styles/Card.style"
import {Link} from 'react-router-dom'        

const Dragon =({ 
  id,
  name,
  type,
  createdAt,
  handleRemoveDragon
}) => {
  
  return (
    <>
    <CardWrapper>
      <CardHeader>
          <CardHeading>Detalhes do seu Dragão</CardHeading>
      </CardHeader>

      <CardBody>
        <h3>Data: {new Date(createdAt).toLocaleDateString()}</h3>
        <h3>Nome: {name}</h3>
        <h3>Tipo: {type}</h3>

        <Link to={`/edit/${id}`}>
        <ButtonEdit >Editar</ButtonEdit >
        </Link>
        <ButtonTrash  onClick={() => handleRemoveDragon(id)}>Excluir</ButtonTrash> 
      </CardBody>
    </CardWrapper>
    </>
  )
}

export default Dragon