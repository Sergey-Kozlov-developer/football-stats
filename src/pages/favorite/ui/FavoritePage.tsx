import {useGetTeamsQuery} from "@entities/teams/api/teamsApi.ts";
import {useFavoritesContext} from "@features/favorite/hook/useFavoriteContext.tsx";
import TeamCard from "@widgets/football-teams/ui/team-card/TeamCard.tsx";
import {useMemo} from "react";

export const FavoritePage = () => {
	const {data, isLoading, isError} = useGetTeamsQuery();
	const {favoriteIds, toggleFavorite} = useFavoritesContext()

	const favorites = useMemo(() => data?.filter((item) => favoriteIds.includes(item.id)) || [], [favoriteIds,data]);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка загрузки</div>;

	return (
		<div>
			<h1>Favorite</h1>

			{favorites.length === 0 ? (
				<p>Not favorite teams</p>
			):(
				<section>
					{favorites.map((team) => (
						<TeamCard
							key={team.id}
							team={team}
							isFavorite={true}
							onToggleFavorite={() => toggleFavorite(team.id)}
						/>
					))}
				</section>
			)}
		</div>
	);
};
