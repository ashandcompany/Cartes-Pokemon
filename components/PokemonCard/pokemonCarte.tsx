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
    <div className="card">
      <div className="card__header">
        <h1 className="card__header__title">{name}</h1>
        <p className="card__header__subtitle">{hp} HP</p>
      </div>
      <div className="card__body">
        <div className="card__body__illustration">
          {/* <a href="./details_pikachu.html"> */}
            <img src={`/images/${name}.png`} alt={`${name} image`} />
          {/* </a> */}
        </div>
      </div>
      <div className="card__footer">
        <div className="card__footer__prices-information">
          <p className="card__footer__prices-information__average-price">
            {prix} $
          </p>
          <p className="card__footer__prices-information__updated-date">
            {date.toLocaleDateString()}
          </p>
        </div>
        <button role="button" type="button" className="button-31">
          Add to wishlist
        </button>
      </div>
    </div>
  );
}
