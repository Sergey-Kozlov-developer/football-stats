import {NavLink} from "react-router";
import styles from './NavigationWidget.module.scss';
import logo from '@assets/img/logo.png'

const navItems = [
	{to: "/", label: "Teams"},
	{to: "/leagues", label: "Leagues"},
	{to: "/players", label: "Players"},
]
export const NavigationWidget = () => {

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} container`}>
				<img className={styles.logo} src={logo} alt="Football"/>
				<ul className={styles.navList}>
					{navItems.map(navItem => (
						<li key={navItem.to}>
							<NavLink
								to={navItem.to}
								className={({isActive}) => isActive ? `${styles.active}` : ''}>
								{navItem.label}
							</NavLink>
						</li>
					))}

				</ul>
			</nav>
		</header>
	);
};
