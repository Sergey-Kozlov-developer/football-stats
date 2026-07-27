import type {ITeam} from "@entities/teams/model/types.ts";

interface ITeamCardProps {
	team: ITeam;
}


const TeamCard = ({team}: ITeamCardProps) => {
	return (
		<div>
			<h3>{team.name}</h3>
			<img src={team.logoUrl} alt="Country"/>
			<p>{team.country.name}</p>
		</div>
	);
};

export default TeamCard;