import React, { useContext, useEffect } from 'react';
import Dragon from './Dragon';
import DragonContext from '../context/DragonContext'
import api from '../services/api'
import { Card } from "./styles/Card.style"

const DragonList = () => {
  const { dragons, setDragons } = useContext(DragonContext);

  const apiCall = async () => {
    
    const request = api.get("api/v1/dragon");

    const response = await request;

    const sortDragon = response.data.sort((a, b) => {
      let da = a.name.toLowerCase(),
          db = b.name.toLowerCase();
  
      if (da < db) {
          return -1;
      }
      if (da > db) {
          return 1;
      }
      return 0;
  }); 
    setDragons(sortDragon);
  }


  useEffect(() => {
    apiCall()
  },[])

  const handleRemoveDragon = async (id) => {
   await api.delete(`api/v1/dragon/${id}`)
    apiCall()
  }


  return (
    <Card>
     {dragons && dragons.map((dragon) => (
            <Dragon key={dragon.id} {...dragon} handleRemoveDragon={handleRemoveDragon} />
          ))}
    </Card>
  )
}

export default DragonList
