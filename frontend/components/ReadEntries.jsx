import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'; {/* this allows for navigation between pages */}

function ReadEntries() {
  const [entries, setEntries] = useState([]); // list format must be in array
const navigate = useNavigate(); {/* allows me to go to another url when my buttons are clicked  */}

  useEffect(() => {
    async function loadEntries() {
      const response = await fetch("http://localhost:3000/");
      const entryList = await response.json();

      setEntries(entryList);

      console.log(entryList);
    }
    loadEntries();
  }, []);

  return (
    <>
      <h1 className="pageName">Read</h1>
      {/* conditional rendering with ternary */}
      <div className="pageBody">
        {entries.length === 0 ? (
          <p>No entires yet! Someone, go make one!</p>
        ) : (
          <ul>
            {entries.map((entry) => (
              <li key={entry._id}>
                <h3> {entry.name} </h3>{" "}
                {new Date(entry.date).toLocaleDateString()} {/*this is a simpler way to format the date... */}
                <br />
                {entry.content} <br /> <button onClick={()=> navigate(`/edit/${entry._id}`)}>Edit</button>
                <button onClick= {()=> navigate(`/delete/${entry._id}`)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
export default ReadEntries;
