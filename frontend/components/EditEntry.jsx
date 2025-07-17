import { useState, useEffect } from "react";
// another hook that is used to read values in the url from the client side
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditEntry() {
  //this grabs the parameter( in this case the id# ) has to be called inside of a function
  const { id } = useParams();
  const navigate = useNavigate()

  const [userId, setUserId]= useState("")
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [entrySaved, setEntrySaved] = useState(false);



  useEffect(() => {
    async function loadData() {
      // fetch('/entries/${id}') //searches for the entry that matches that id
      const response = await fetch(`http://localhost:3000/entries/${id}`); // should add the id into the url
      const data = await response.json(); // convert the response to json

      /* FORMATTING THE DATE:
     creates a new js data object from data.date toISOstring shortens the date. 
     splitting at T (array method)makes the date string into an array which then the first index is accessed.*/
      const formatDate = new Date(data.date).toISOString().split("T")[0];

      console.log(data); // the data is being pulled
      console.log(data.date); // this is in a different format than yyyy-mm-dd must convert...
      setName(data.name);
      setContent(data.content);
      setDate(formatDate);
      setUserId(data.userId)
    }


    loadData(); // actually call the function
  }, [id]); // depends on the id

  async function handleSave(event) {
    event.preventDefault(); //don't reload the page
    const editedEntry = {
      name,
      date,
      content,
      userId
    };

    try {
      /* fetch does get requests by default so it needs additional configurations. 
    it also needs to be set to a string  using json stringify sot the browser understands... 
    a header needs to be added with they type of content which is json*/
      const response = await fetch(`http://localhost:3000/entries/${id}`, {
        method: "PUT",
        body: JSON.stringify(editedEntry),
        headers: {
          "Content-Type": "application/json",
        },
      });
console.log(editedEntry)

      // .ok is a built in success detector for fetch responses.
      if (response.ok) {
        setEntrySaved(true)
        alert("Edit Saved!");
      } else {
        alert("Save Failed!");
      }
    } catch (error) {
      alert("Update Error!");
    }
  }

  return (
    <>
      <h1 className="pageName">Edit</h1>

      <div className="pageBody">
        <div className="nameDate">
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>{" "}
            {/* should render the  inputs and allow for changing them   */}
          </label>
          <label>
            Date
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
        {entrySaved && <button
            onClick={() => {
              navigate("/read");
            }}
          > Go Read Entries</button>}
      </div>
    </>
  );
}
export default EditEntry;
