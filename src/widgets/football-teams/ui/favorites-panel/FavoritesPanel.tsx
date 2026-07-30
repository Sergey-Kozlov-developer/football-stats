import type {ITeam} from "@entities/teams/model/types.ts";
import {HeartOff} from "lucide-react";
import styles from "./FavoritesPanel.module.scss";

interface FavoritesPanelProps {
	favorites: ITeam[];
	onRemove: (id: number) => void;
}

export const FavoritesPanel = ({favorites, onRemove}: FavoritesPanelProps) => {
	return (
		<aside className={styles.panel}>
			<div className={styles.header}>
				<span className={styles.title}>Избранное</span>
				<span className={styles.count}>{favorites.length}</span>
			</div>

			{favorites.length === 0 ? (
				<p className={styles.empty}>Пока нет избранных команд</p>
			) : (
				<ul className={styles.list}>
					{favorites.map((team) => (
						<li key={team.id} className={styles.item}>
							<img
								className={styles.logo}
								src={team.logoUrl}
								alt={team.name}
							/>
							<div className={styles.info}>
								<span className={styles.name}>{team.name}</span>
								<span className={styles.code}>{team.country.code}</span>
							</div>
							<button
								type="button"
								className={styles.removeButton}
								onClick={() => onRemove(team.id)}
								aria-label={`Убрать ${team.name} из избранного`}
							>
								<HeartOff size={18}/>
							</button>
						</li>
					))}
				</ul>
			)}
		</aside>
	);
};
