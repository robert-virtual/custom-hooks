// import { useState } from "react";
import useStorage from "./hooks/useStorage";

function App() {
  // const [name, setName] = useState("");
  const { hola, sethola } = useStorage("", "hola");
  const { name, setname } = useStorage("", "name");
  const { lastname, setlastname } = useStorage("", "lastname");
  return (
    <div className="App">
      <h1>Custom hooks</h1>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={setname} />
      <hr />
      <h2>{hola}</h2>
      <input type="text" value={hola} onChange={sethola} />
      <hr />
      <h2>{lastname}</h2>
      <input type="text" value={lastname} onChange={setlastname} />
    </div>
  );
}

export default App;
