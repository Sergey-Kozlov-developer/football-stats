import {NavLink, useLocation} from "react-router";
import styles from './NavigationWidget.module.scss';
import footballImg from '@assets/img/football.webp'
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {useState} from "react";

const navItems = [
	{to: "/", label: "Teams"},
	{to: "/leagues", label: "Leagues"},
	{to: "/players", label: "Players"},
]
export const NavigationWidget = () => {
	const location = useLocation();
	const [toggled, setToggled] = useState(false);
	const handleBoolean = () => {
		setToggled(false);
	}
	const handleClickToggle = () => {
		setToggled(!toggled);
	}

	return (
		<>
			<Sidebar
				image={footballImg}
				transitionDuration={1000}
				onBackdropClick={handleBoolean}
				toggled={toggled}
				breakPoint='all'
				className={`${styles.sidebar}`}
			>
				<Menu>
					{navItems.map((item) => (
						<MenuItem
							key={item.to}
							active={location.pathname === item.to}
						>
							<NavLink
								to={item.to}
								className={({ isActive }) =>
									isActive
										? `${styles.active}`
										: ''
								}
							>
								{item.label}
							</NavLink>
						</MenuItem>
					))}
				</Menu>
			</Sidebar>
			<div>
				<button onClick={handleClickToggle}>
					Toggle
				</button>
			</div>
		</>
	);
};
