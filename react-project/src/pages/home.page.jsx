import React, { useState } from "react";
import { MainLayout } from "../components";

export function HomePage() {
  const [text, setText] = useState("");
  const [list, setList] = useState(["ready", "set", "GO"]);

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  function onDblClick(idx) {
    let newList = list.filter((_, i) => i !== idx);
    setList(newList);
  }

  return (
    <MainLayout>
      <h1>Learning React</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="listitem"
          id="listitem"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, idx) => {
          return (
            <li key={idx} onDoubleClick={() => onDblClick(idx)}>
              {item}
            </li>
          );
        })}
      </ul>
    </MainLayout>
  );
}