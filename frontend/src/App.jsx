import { useEffect } from "react";
import "./App.css";

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

  return <> hello world </>;
  
}

export default App;
