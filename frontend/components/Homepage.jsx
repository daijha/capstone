import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1 className="pageName">Entries</h1>
      <h2 className="tagline">Share your thoughts and explore others</h2>
      <div className="options">
        <Link to="/create">
          <button>Create New Entry</button>
        </Link>
       
        <Link to ="/read">
          <button> Read Entries</button>
        </Link>
      
      </div>
    </>
  );
}
export default Homepage;
