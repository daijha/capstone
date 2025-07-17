import {Link} from 'react-router-dom'

function NavBar(){

    return(
 <nav className="navbar">
      <Link to="/home"> Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/read">Read</Link>
    </nav>

    )
}
export default NavBar