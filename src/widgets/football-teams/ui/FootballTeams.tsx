import TeamCard from "@widgets/football-teams/ui/team-card/TeamCard.tsx";
import {useGetTeamsQuery} from "@entities/teams/api/teamsApi.ts";

export const FootballTeams = () => {
	const {data, isLoading, isError} = useGetTeamsQuery()
	return (
		<div>
			<h1>FootballTeam</h1>
				{data?.map((team) => (
					<div key={team.id}>

					<TeamCard team={team} />
					</div>

					))}
		</div>
	);
};
