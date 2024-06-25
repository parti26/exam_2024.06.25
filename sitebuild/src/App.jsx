const cats = [
  {
    id: 1,
    name: "Mittens",
    image: "https://cdn2.thecatapi.com/images/in-CD5LH5.jpg",
    description: "A very cute and fluffy cat.",
  },
  {
    id: 2,
    name: "Whiskers",
    image: "https://cdn2.thecatapi.com/images/5txKBK89Y.jpg",
    description: "Loves to play with yarn.",
  },
  {
    id: 3,
    name: "Shadow",
    image: "https://cdn2.thecatapi.com/images/Z5Wd0A-r_.jpg",
    description: "Enjoys napping in the sun.",
  },
];

function Header() {
  return (
    <header>
      <h1>Cat Adoption</h1>
    </header>
  );
}

function ShowCat() {
  const catData = cats;
  const numCats = catData.length;

  return (
    <div>
      <h2>Available Cats</h2>
      <ul>
        {catData.map((cat) => (
          <li key={cat.id}>
            <img src={cat.image} alt={cat.name}/>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </li>
        ))}
      </ul>
      <p>{numCats} cats available for adoption.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <ShowCat />
    </div>
  );
}

export default App;
