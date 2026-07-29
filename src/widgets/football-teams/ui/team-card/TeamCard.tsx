import type {ITeam} from "@entities/teams/model/types.ts";
import styles from "./TeamCard.module.scss";

interface ITeamCardProps {
	team: ITeam;
}


const TeamCard = ({team}: ITeamCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.title}>
				<img className={styles.flag} src={team.logoUrl} alt="Country"/>
					<h3 className={styles.name}>{team.name}</h3>
					<span className={styles.code}>{team.country.code}</span>
			</div>
			<button className={styles.button} onClick={() => {}}>
				Info
			</button>
		</div>
	);
};

export default TeamCard;