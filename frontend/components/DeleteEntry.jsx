import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function DeleteEntry() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userId, setUserId] = useState("null"); // intentionally blank
  const currentUserId = localStorage.getItem("userId"); // grabs the  user id given from localstorage

  useEffect(() => {
    // i need to load the  entry properly to  check user id for "deletion auth"

    async function getThatEntry() {
      try {
        const response = await fetch(`http://localhost:3000/entries/${id}`);
        const data = await response.json();
        setUserId(data.userId);
      } catch (error) {
        console.log(error);
      }
    }
    getThatEntry();
  }, [{ id }]); // id is the dependency 4 this 2 run

  async function handleDelete() {
    try {
      const response = await fetch(`http://localhost:3000/entries/${id}`, {
        method: "DELETE",
        headers: {
          // need to include the header so the backend knows its getting json
          "Content-type": "application/json",
        },
        body: JSON.stringify({ userId: currentUserId }),
      });

      // .ok is a built in success detector for fetch responses.
      if (response.ok) {
        alert("Entry Deleted.");
        navigate("/read"); // should redirect user back to read page after deletion
      } else {
        alert("Deletion Failed!");
      }
    } catch (error) {
      alert("Error!");
    }
  }
  return (
    <>
    <h1 className="pageName"> Delete Entry</h1>
      <div className="pageBody">
        <p>Are you sure you want to delete this entry?</p>
        <button onClick={handleDelete}>Confirm Delete </button>
      </div>
    </>
  );
}
export default DeleteEntry;
