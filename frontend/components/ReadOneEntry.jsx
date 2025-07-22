import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ReadOneEntry() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);
  useEffect(() => {
    async function loadEntry() {
      const response = await fetch(`http://localhost:3000/entries/${id}`);
      const data = await response.json();
      setEntry(data);
    }
    loadEntry();
  }, [id]);

  // apparently the data is not loaded on the first render its only after that  that my data will display
  //  it starts at null, the default use state. i have to conditionally render
  return (
    <>
      {!entry ? (
        <p> Entry Loading</p>
      ) : (
        <>
          <div className="pageBody">
            {entry && <h1>{entry.name}</h1>}
            <p>{new Date(entry.date).toLocaleDateString()}</p>

            <p>{entry.content}</p>
            <button onClick={() => navigate(`/read`)}>Go Back</button>
          </div>
        </>
      )}
    </>
  );
}
export default ReadOneEntry;
