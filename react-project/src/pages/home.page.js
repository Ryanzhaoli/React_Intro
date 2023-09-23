import '../App.css';
import React, {useState} from 'react';


export default function HomePage() {
  const [list, setList] = useState(["ready", "set", "GO!"]);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setList([...list, text]);
    setText("");
  }

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <div className="appDiv">
      <h1>Learning React</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
      <ul className="itemList">
        {list.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}