import { TABLEAU } from "@/constants/tableauPokemon";
import Link from "next/link";

interface PokemonDetailsProps {
    params: {
        id: string;
    };
}

export default function PokemonDetails({ params }: PokemonDetailsProps) {
    const { id } = params;

    const pokemon = TABLEAU.find(p => p.name === id);

    if (!pokemon) {
        return <p>Pokémon non trouvé.</p>;
    }

    return (
        <>
            <main className="layout flex flex-col w-full">
                <header className="layout__header bg-blue-500 text-white flex items-center justify-between h-24 p-6">
                    <h1 className="layout__header__title text-3xl leading-8 pl-5">{pokemon.name}</h1>
                    <ul className="layout__header__menu">
                        <li className="layout__header__menu__item pr-5"><Link href="/">Accueil</Link></li>
                    </ul>
                </header>

                <section className="layout__body max-w-screen-xl mx-auto py-4 w-full mt-20">
                    <div className="details flex gap-4">
                        <div className="details__information bg-blue-500 text-white rounded-xl shadow-md flex-1 box-border">
                            <div className="details__information__header p-8">
                                <h2 className="details__information__header__title text-3xl px-2">{pokemon.name}</h2>
                            </div>
                            <div className="details__information__body px-8">
                                <dl className="details__information__information-list grid grid-cols-2 max-w-[24rem]">
                                    <dt className="details__information__information-list__item--name font-semibold px-4 py-2">Niveau</dt>
                                    <dd className="details__information__information-list__item--value px-4 py-2">{pokemon.niveau || 'N/A'}</dd>
                                    <dt className="details__information__information-list__item--name font-semibold px-4 py-2">HP</dt>
                                    <dd className="details__information__information-list__item--value px-4 py-2">{pokemon.hp || 'N/A'}</dd>
                                    <dt className="details__information__information-list__item--name font-semibold px-4 py-2">Types</dt>
                                    {/* <dd className="details__information__information-list__item--value px-4 py-2">{pokemon.types.join(', ')}</dd> */}
                                    <dt className="details__information__information-list__item--name font-semibold px-4 py-2">Faiblesses</dt>
                                    {/* <dd className="details__information__information-list__item--value px-4 py-2">{pokemon.weaknesses.join(', ')}</dd> */}
                                </dl>
                            </div>
                        </div>
                        <div className="details__illustration bg-blue-500 rounded-xl shadow-md box-border p-8">
                            <img src={`/images/${pokemon.name}.png`} alt={`Image de ${pokemon.name}`} width={300} />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
