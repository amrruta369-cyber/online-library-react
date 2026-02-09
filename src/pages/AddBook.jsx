import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(book).includes("")) {
      alert("All fields are required");
      return;
    }

    dispatch(addBook({ ...book, id: Date.now() }));
    navigate("/books/all");
  };

  return (
    <div className="container mt-4">
      <h3>Add New Book</h3>

      <form onSubmit={handleSubmit}>
        {Object.keys(book).map(field => (
          <input
            key={field}
            className="form-control mb-2"
            placeholder={field}
            value={book[field]}
            onChange={e => setBook({ ...book, [field]: e.target.value })}
          />
        ))}

        <button className="btn btn-success">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
