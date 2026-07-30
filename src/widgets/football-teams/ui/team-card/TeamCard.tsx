import type {ITeam} from "@entities/teams/model/types.ts";
import styles from "./TeamCard.module.scss";
import {Heart, HeartOff} from "lucide-react";

interface ITeamCardProps {
	team: ITeam;
	isFavorite?: boolean;
	onToggleFavorite: () => void;
}


const TeamCard = ({team, isFavorite = false, onToggleFavorite}: ITeamCardProps) => {


	return (
		<div className={styles.card}>
			<div className={styles.title}>
				<div className={styles.logo}>
					<img className={styles.flag} src={team.logoUrl} alt="Country"/>
					<h3 className={styles.name}>{team.name}</h3>
				</div>
				<button className={styles.buttonHeart} onClick={onToggleFavorite}>
					{isFavorite ? <HeartOff/> : <Heart/>}
				</button>
			</div>
			<button className={styles.button}>
				{team.country.code}
			</button>
		</div>
	);
};

export default TeamCard;