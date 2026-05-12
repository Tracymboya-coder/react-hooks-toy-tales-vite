
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  // DELETE toy
  function handleDelete(id) {
    fetch(`http://localhost:6001/toys/${id}`, {
      method: "DELETE",
    }).then(() => {
      setToys(toys.filter((toy) => toy.id !== id));
    });
  }

  // PATCH like toy
  function handleLike(toy) {
    fetch(`http://localhost:6001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ likes: toy.likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) => {
        setToys(
          toys.map((t) => (t.id === toy.id ? updatedToy : t))
        );
      });
  }

  return (
    <div className="toy-container">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          onDelete={handleDelete}
          onLike={handleLike}
        />
      ))}
    </div>
  );
}

export default ToyContainer;