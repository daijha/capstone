import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <h1 className="pageName">Entries</h1>
      <div className="options">
        <Link to="/create">
          <button>create new entry</button>
        </Link>
       
        <Link to ="/read">
          <button> read entries</button>
        </Link>
      
      </div>
    </>
  );
}
export default Homepage;
