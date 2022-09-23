
import React, { createContext, useState } from 'react'
import './index.css'
import Edit from './components/Edit';
import List from './components/List';
import { NoteContextProvider } from './context/NoteContext';
export const NoteContext = createContext();
export default function ContextHome() {
  let [data,setData] = useState([])
  return (
    <div className="container">
      <div className="title">备忘录</div>
      {/* <NoteContext.Provider value={{data,setData}}>
        <Edit  />
        <hr />
        <List  />
      </NoteContext.Provider> */}
      <NoteContextProvider>
        <Edit />
        <hr />
        <List />
      </NoteContextProvider>
    </div>
  );
}
