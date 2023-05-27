import { useState } from "react";
import "./App.css";
import Display from "./Components/display";
import FormData from "./Components/form";

function App() {
  const [sendData, setSendData] = useState([]);
  const [Id, setId] = useState(0);
  const [displayData,setDisplayData] = useState([]);

  return (
    <div className="row">
      <FormData sendData={sendData} setSendData={setSendData} setDisplayData={setDisplayData} setId={setId} Id={Id}/>
      <Display sendData={sendData} setSendData={setSendData} displayData={displayData} setDisplayData={setDisplayData}/>
    </div>
  );
}

export default App;
