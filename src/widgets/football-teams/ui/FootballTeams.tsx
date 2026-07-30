import TeamCard from "@widgets/football-teams/ui/team-card/TeamCard.tsx";
import {FavoritesPanel} from "@widgets/football-teams/ui/favorites-panel/FavoritesPanel.tsx";
import {useGetTeamsQuery} from "@entities/teams/api/teamsApi.ts";
import styles from "./FootballTeams.module.scss";
import {useFavoritesContext} from "@features/favorite/hook/useFavoriteContext.tsx";
import {useMemo} from "react";


export const FootballTeams = () => {
	const {data, isLoading, isError} = useGetTeamsQuery()
	const {toggleFavorite, isFavorite, favoriteIds} = useFavoritesContext()

	const favorites = useMemo(
		() => data?.filter((item) => favoriteIds.includes(item.id)) ?? [],
		[favoriteIds, data],
	);

	if (isLoading) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка загрузки</div>;

	return (
		<div className={styles.page}>
			<h1 className={styles.title}>Football Team</h1>

			<FavoritesPanel
				favorites={favorites}
				onRemove={toggleFavorite}
			/>

			<section>
				<h2 className={styles.sectionTitle}>Все команды</h2>
				<div className={styles.wrapper}>
					{data?.map((team) => (
						<TeamCard
							key={team.id}
							team={team}
							isFavorite={isFavorite(team.id)}
							onToggleFavorite={() => toggleFavorite(team.id)}
						/>
					))}
				</div>
			</section>
		</div>
	);
};
