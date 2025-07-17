import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function CreateEntry() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [entrySaved, setEntrySaved] = useState(false);

  const navigate = useNavigate();

  {
    /**i need to have 3 use states for each input because  each area is being tracked for holding the text to submit later */
  }

  async function handleSave(event) {
    event.preventDefault(); //don't reload the page
    const newEntry = {
      userId,
      name,
      date,
      content,
    };

    try {
      const response = await fetch(`http://localhost:3000/create`, {
        method: "POST",
        body: JSON.stringify(newEntry),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // .ok is a built in success detector for fetch responses.
      if (response.ok) {
        setEntrySaved(true);

        alert("Entry Saved!");
      } else {
        alert("Save Failed!");
      }
    } catch (error) {
      alert("Update Error!");
    }
  }
  {
    /* the  value={name} onChange={(event) => setName(event.target.value)}
     is needed to track the letters used in inputs */
  }

  return (
    <>
      <h1 className="pageName">Create</h1>

      <div className="pageBody">
        <div className="nameDate">
          <label>
            {" "}
            UserID:
            <input
              type="text"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            ></input>
          </label>
          <label>
            {" "}
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
          </label>
          <label>
            {" "}
            Date:
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            ></input>
          </label>
        </div>
        <div>
          <textarea
            rows="20"
            cols="80"
            value={content}
            onChange={(event) => setContent(event.target.value)}
          ></textarea>
          {/* this allows for a bigger text box */}
        </div>
        <button onClick={handleSave}> Save Entry </button>
        {entrySaved && (
          <button
            onClick={() => {
              navigate("/read");
            }}
          > Go Read Entries</button>
        )}
      </div>
    </>
  );
}
export default CreateEntry;
