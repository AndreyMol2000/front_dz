import { useFavourites } from "../hooks/useFavourites";
import ProductCard from "./ProductCard";

export const FavouritesPage = () => {
  const { favourites, removeFavourite } = useFavourites();

  if (!favourites.length) return <p>Избранное пусто</p>;

  return (
    <div>
      <h2>Избранное</h2>
      {favourites.map(product => (
        <ProductCard key={product.id} product={product} onRemove={() => removeFavourite(product.id)} />
      ))}
    </div>
  );
};
