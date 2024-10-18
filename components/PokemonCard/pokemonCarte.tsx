import Link from "next/link";

export default function PokemonCarte({
  name,
  hp,
  prix,
  date,
}: {
  name: string;
  hp: number;
  prix: number;
  date: Date;
}) {
  return (
    <div className="text-white px-8 py-2 bg-blue-500 rounded-lg shadow-xl transition-all border-4 border-blue-400 hover:border-blue-600 w-80">
      <div className="my-4 grid grid-cols-2">
        <h1 className="text-2xl">{name}</h1>
        <p className="self-center justify-self-end">{hp} HP</p>
      </div>

      <div className="mb-4">
        <div className="m-auto mb-4">
          <Link href={`/details/${name}`}>
            <img
              className="shadow-lg m-auto mb-4"
              src={`/images/${name}.png`}
              alt={`${name} image`}
            />
          </Link>
        </div>
      </div>

      <div className="my-4 mt-3 grid grid-cols-2">
        <p>{prix} $</p>
        <p className="justify-self-end">{date.toLocaleDateString()}</p>
      </div>

      <button className="bg-purple-100 rounded border-none text-blue-500 cursor-pointer transition-all inline-block text-base font-bold leading-6 mb-4 min-h-[44px] py-2 px-5 text-center w-full hover:bg-purple-500">
        Add to wishlist
      </button>
    </div>
  );
}
