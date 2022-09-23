import { useContext, useState } from "react";
import { v4 } from "uuid";
import { NoteContext } from "..";
import { useNoteContext } from "../context/NoteContext";

const Edit = () => {
  const [thing, setThing] = useState("");
  function onThingInput(e) {
    setThing(e.target.value);
  }

  // let {setData} = useContext(NoteContext)
  let {setData} = useNoteContext()
  function addItem() {
    setData(function (prev) {
      let t = thing;
      setThing("");
      return [
        ...prev,
        {
          id: v4(),
          thing: t,
        },
      ];
    });
  }
  return (
    <div className="edit">
      <input
        type="text"
        className="text-input"
        value={thing}
        onInput={onThingInput}
      />
      <button onClick={addItem} className="edit-button">
        保存
      </button>
    </div>
  );
};
export default Edit;
