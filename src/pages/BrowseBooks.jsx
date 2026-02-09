import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector(state => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter(book =>
    (category === "all" || book.category === category) &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="container mt-4">
      <input
        className="form-control mb-3"
        placeholder="Search by title or author"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      {filteredBooks.map(book => (
        <div key={book.id} className="card mb-2 p-3">
          <h5>{book.title}</h5>
          <p>{book.author}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default BrowseBooks;
