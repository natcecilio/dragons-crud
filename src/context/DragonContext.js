import {createContext} from 'react'

const DragonContext = createContext({
  token: null,
  setToken: () => {},
});

export default DragonContext