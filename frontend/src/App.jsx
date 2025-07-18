import { useEffect } from "react";
import "./App.css";

import Homepage from "../components/Homepage";
import CreateEntry from "../components/CreateEntry";
import ReadEntries from "../components/ReadEntries";
import EditEntry from "../components/EditEntry";
import DeleteEntry from "../components/DeleteEntry";
import NavBar from "../components/NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  // useEffect runs and fetches the JSON from the backend
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3000");
        const data = await response.json();
        console.log("fetchData", data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData(); // call the fetch
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/create" element={<CreateEntry />} />
        <Route path="/read" element={<ReadEntries />} /> {/* read all */}
        <Route path="/read1" element={<ReadEntries />} /> {/* read one */}
        <Route path="/edit/:id" element={<EditEntry />} />
        <Route path="/delete/:id" element={<DeleteEntry />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  );
}

export default App;
