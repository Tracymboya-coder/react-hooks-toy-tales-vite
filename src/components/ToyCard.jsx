function ToyCard({ toy, onDelete, onLike }) {
  return (
    <div className="toy-card" data-testid="toy-card">
      <h5>{toy.name}</h5>

      <img src={toy.image} alt={toy.name} width="150" />

      <p>{toy.likes} Likes</p>

      <button onClick={() => onLike(toy)}>Like {"<3"}</button>

      <button onClick={() => onDelete(toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;