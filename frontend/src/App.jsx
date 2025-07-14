import { useEffect } from "react";
import "./App.css";

import Homepage from "../components/Homepage";
import CreateEntry from "../components/CreateEntry";
import ReadEntries from "../components/ReadEntries";
import EditEntry from "../components/EditEntry";
import DeleteEntry from "../components/DeleteEntry";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // useEffect runs and fetches the JSON from the backend
  useEffect(() => {
    async function fetchData() {
      try{
 const response = await fetch("http://localhost:3000");
      const data = await response.json();
      console.log('fetchData', data)
      }catch(error){
        console.log(error)
      }
     
    }
    fetchData()// call the fetch 
  }, []);

  return <> 
    <Routes>
      <Route path = "/" element={<Homepage/>}/>
      <Route path = "/create" element={<CreateEntry/>}/>
      <Route path = "/read" element={<ReadEntries/>}/>
      <Route path = "/edit" element={<EditEntry/>}/>
      <Route path = "/delete" element={<DeleteEntry/>}/>
  
    </Routes>

  
  
   </>;
  
}

export default App;
