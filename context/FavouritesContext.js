import { createContext, useState, useEffect, useCallback } from "react";

export const FavouritesContext = createContext();

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favourites");
    if (saved) setFavourites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addFavourite = useCallback((product) => {
    setFavourites(prev => [...prev, product]);
  }, []);

  const removeFavourite = useCallback((id) => {
    setFavourites(prev => prev.filter(p => p.id !== id));
  }, []);

  return (
    <FavouritesContext.Provider value={{ favourites, addFavourite, removeFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};
