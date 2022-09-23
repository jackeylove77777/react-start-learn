import { createContext, useContext, useState } from "react";


const NoteContext = createContext()

export function useNoteContext() {
  return useContext(NoteContext)
}
export function NoteContextProvider({ children }) {
  
  const [data, setData] = useState([])
  return (
    <NoteContext.Provider value={{data,setData}}>
      {children}
    </NoteContext.Provider>
  )
};