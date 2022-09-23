import { useContext } from "react";
import { NoteContext } from "..";
import { useNoteContext } from "../context/NoteContext";
import Item from "./Item";
export default function List() {
  // let {data} = useContext(NoteContext)
  let {data} = useNoteContext()
  return (
    <div className="list">
      {data.map((i) => {
        return <Item  id={i.id} thing={i.thing} key={i.id} />;
      })}
    </div>
  );
}
