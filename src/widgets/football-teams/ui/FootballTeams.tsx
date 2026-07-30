import TeamCard from "@widgets/football-teams/ui/team-card/TeamCard.tsx";
import {useGetTeamsQuery} from "@entities/teams/api/teamsApi.ts";
import styles from "./FootballTeams.module.scss";
import {useFavoritesContext} from "@features/favorite/hook/useFavoriteContext.tsx";


export const FootballTeams = () => {
	const {data, isLoading, isError} = useGetTeamsQuery()
	const {toggleFavorite, isFavorite} = useFavoritesContext()

	if (isLoading) return <div>Загрузка...</div>;
	if (isError) return <div>Ошибка загрузки</div>;

	return (
		<div>
			<h1>FootballTeam</h1>
			<div  className={styles.wrapper}>
				{data?.map((team) => (
					<TeamCard
						key={team.id}
						team={team}
						isFavorite={isFavorite(team.id)}
						onToggleFavorite={() => toggleFavorite(team.id)}
					/>
				))}
			</div>
		</div>
	);
};
