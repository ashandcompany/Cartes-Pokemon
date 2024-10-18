import PokemonCarte from "@/components/PokemonCard/pokemonCarte";
import "@/components/PokemonCard/PokemonCard.css";

const Home = () => {
  const pokemonCartes = [
    {
      name: "Pikachu",
      hp: 40,
      date: new Date(2024, 9, 18),
      prix: 1001,
    },
    {
      name: "Bulbasaur",
      hp: 40,
      date: new Date(2024, 9, 18),
      prix: 7,
    },
    {
      name: "Charizard",
      hp: 120,
      date: new Date(2024, 9, 18),
      prix: 2039,
    },
  ];

  return (
    <main className="layout">
      <section className="layout__body">
        <div className="cards-collection">
          <div className="cards-collection__header">
            <h2 className="cards-collection__header__title">
              Cards collection
            </h2>
          </div>

          <div className="cards-collection__body">
            {pokemonCartes.map((carte, index) => (
              <PokemonCarte
                key={index}
                name={carte.name}
                hp={carte.hp}
                date={carte.date}
                prix={carte.prix}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
