import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector(state =>
    state.books.find(b => b.id === Number(id))
  );

  return (
    <div className="container mt-4">
      <h3>{book.title}</h3>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.description}</p>
      <p><b>Rating:</b> {book.rating}</p>

      <Link to="/books/all" className="btn btn-secondary">
        Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;
