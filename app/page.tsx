import PokemonCarte from "@/components/PokemonCard/pokemonCarte";
import { TABLEAU } from "@/constants/tableauPokemon";

const Home = () => {

  return (
    <main className="flex flex-col w-full">
      <section className="max-w-screen-2xl mx-auto py-4 w-full">
        <div className="mb-16">
          <div className="p-8">
            <h2 className="text-5xl text-center mb-3 uppercase font-bold tracking-[1.5rem] text-blue-500">
              Cards collection
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 justify-center px-8">
            {TABLEAU.map((carte, index) => (
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
