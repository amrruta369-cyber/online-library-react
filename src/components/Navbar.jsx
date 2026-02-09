import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">Online Library</Link>
      <div>
        <Link className="btn btn-outline-light me-2" to="/">Home</Link>
        <Link className="btn btn-outline-light me-2" to="/books/all">Browse Books</Link>
        <Link className="btn btn-outline-light" to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;
