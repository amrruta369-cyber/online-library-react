import { Link } from "react-router-dom";

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi"];

  return (
    <div className="container mt-4">
      <h2>Welcome to the Online Library</h2>

      <h4>Categories</h4>
      {categories.map(cat => (
        <Link key={cat} to={`/books/${cat}`} className="btn btn-primary me-2">
          {cat}
        </Link>
      ))}

      <h4 className="mt-4">Popular Books</h4>
      <p>Explore our most popular books 📚</p>
    </div>
  );
}

export default Home;
