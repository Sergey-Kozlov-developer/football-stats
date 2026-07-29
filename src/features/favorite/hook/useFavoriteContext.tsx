import {createContext, type ReactNode, useContext, useEffect, useState} from "react";


interface FavoritesContextType {
	favoriteIds: number[];
	toggleFavorite: (id: number) => void;
	isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({children}: { children: ReactNode }) => {
	const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
		const saved = localStorage.getItem('favoriteTeamId');
		return saved ? JSON.parse(saved) : [];
	});

	useEffect(() => {
		localStorage.setItem('favoriteTeamIds', JSON.stringify(favoriteIds));
	}, [favoriteIds]);

	const toggleFavorite = (id: number) => {
		setFavoriteIds((prev) => prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]);
	}
	const isFavorite = (id: number) => favoriteIds.includes(id);

	return (
		<FavoritesContext.Provider value={{favoriteIds, toggleFavorite, isFavorite}}>
			{children}
		</FavoritesContext.Provider>
	)

};

export const useFavorites = () => {
	const context = useContext(FavoritesContext);
	if (!context) {
		throw new Error('useFavorites должен использоваться внутри FavoritesProvider');
	}
	return context;
};