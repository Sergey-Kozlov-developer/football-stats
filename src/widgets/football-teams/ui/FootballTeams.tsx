import TeamCard from "@widgets/football-teams/ui/team-card/TeamCard.tsx";
import {useGetTeamsQuery} from "@entities/teams/api/teamsApi.ts";
import styles from "./FootballTeams.module.scss";


export const FootballTeams = () => {
	const {data, isLoading, isError} = useGetTeamsQuery()
	return (
		<div>
			<h1>FootballTeam</h1>
			<div  className={styles.wrapper}>
				{data?.map((team) => (
					<TeamCard key={team.id} team={team}/>
				))}
			</div>
		</div>
	);
};
