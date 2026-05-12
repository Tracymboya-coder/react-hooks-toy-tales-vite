import { useEffect, useState } from "react";
import Header from "./Header";
import ToyContainer from "./ToyContainer";
import ToyForm from "./ToyForm";

function App() {
  const [toys, setToys] = useState([]);

  // GET all toys
  useEffect(() => {
    fetch("http://localhost:6001/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
   
<div className="App">
      <Header />

      <ToyForm toys={toys} setToys={setToys} />

      <ToyContainer toys={toys} setToys={setToys} />
    </div>
  );
}

export default App;  