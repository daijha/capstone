import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="bookname">Entries</div>
      <div className="options">
        <Link to="/create">
          <button>create new entry</button>
        </Link>
        <Link to ="/edit">
          <button>edit existing entry</button>
        </Link>
        <Link to ="/read">
          <button> read entries</button>
        </Link>
        <Link to= "/delete">
          <button>delete an entry</button>
        </Link>
      </div>
    </>
  );
}
export default Homepage;
