import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`You typed ${name}`);
    };
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <p>Preview: {name}</p>
    </form>
  );
}

export default App;
