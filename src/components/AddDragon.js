import React, { useContext } from 'react'
import DragonForm from './DragonForm'
import DragonContext from '../context/DragonContext'

const AddDragon = ( { navigate }) => {
  const { dragons, setDragons } = useContext(DragonContext)

  const handleOnSubmit = (dragon) => {
    setDragons([dragon, ...dragons]);
    
  }

  return (
    <>
      <DragonForm handleOnSubmit={handleOnSubmit} />
    </>
  )
}

export default AddDragon