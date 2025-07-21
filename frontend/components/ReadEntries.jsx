import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

{
  /* this allows for navigation between pages */
}

function ReadEntries() {
  const [entries, setEntries] = useState([]); // list format must be in array
  const navigate = useNavigate();
  {
    /* allows me to go to another url when my buttons are clicked  */
  }
  const user = localStorage.getItem("userId");
  const [readOneUser, setReadOneUser] = useState(false); // for filtering the entries to username

  // toggle filter to read one writer, or to read everything.
  const entryDisplay = readOneUser
    ? entries.filter((entry) => entry.userId === user)
    : entries;

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
        {entryDisplay.length === 0 ? (
          <>
           <p>No entires yet. Go make one!</p>
          <button onClick={()=>navigate('/create')}> Create </button>
          </>
         
        ) : (
          <div>
            <div className="userBox">
              <p> User: {user} </p>
              <button onClick={() => setReadOneUser((prev) => !prev)}>
                {readOneUser? "Show All": "My Entries"} {/* ternary to change button's label */}
              </button>
              {/* this should toggle the button to activate filter toggle */}
            </div>
            <ul>
              {entryDisplay.map((entry) => (
                //making the entries link to another pg for full view
                <li key={entry._id} >
                  <h3 > {entry.name} </h3>
                  {new Date(entry.date).toLocaleDateString()}
                  {/*this is a simpler way to format the date... */}
      
                  <br />

                  {entry.content} <br />
                  {/* conditionally renders  the buttons on entries that match userid  with & operator */}
                  {entry.userId === user && (
                    <>
                      <button onClick={() => navigate(`/edit/${entry._id}`)}>
                        Edit
                      </button>
                      <button onClick={() => navigate(`/delete/${entry._id}`)}>
                        Delete
                      </button>
                    </>
                  )}
                   <br/>
                  <button onClick={()=> navigate(`/read1/${entry._id}`)}>Read</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
export default ReadEntries;
