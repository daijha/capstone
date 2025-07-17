import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router-dom';

function DeleteEntry(){
      const navigate = useNavigate()
    const {id} = useParams();

   async function handleDelete(){
  
            try {
      const response = await fetch(`http://localhost:3000/entries/${id}`, {
        method: "DELETE",
    
      });

      // .ok is a built in success detector for fetch responses.
      if (response.ok) {

        alert("Entry Deleted.");
        navigate("/read");// should redirect user back to read page after deletion 
      } else {
        alert("Deletion Failed!");
      }
    } catch (error) {
      alert("Error!");
    }

    }
    return(
        <>
        <h1> Delete Entry</h1>
        <p>Are you sure you want to delete this entry?</p>
        <button onClick={handleDelete}>Confirm Delete </button>
        </>

    )
}
export default DeleteEntry

