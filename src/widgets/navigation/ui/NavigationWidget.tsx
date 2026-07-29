import {NavLink, useLocation} from "react-router";
import styles from './NavigationWidget.module.scss';
import footballImg from '@assets/img/football.webp'
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {getMenuItemStyles} from "@widgets/navigation/utils/getMenuItemStyles.ts";
import {useSidebar} from "@features/sidebar/hook/useSideBarContext.tsx";

const navItems = [
	{to: "/", label: "Teams"},
	{to: "/leagues", label: "Leagues"},
	{to: "/players", label: "Players"},
]

const getNavLinkClassName = ({isActive}: { isActive: boolean }) =>
	isActive ? styles.active : styles.link;

export const NavigationWidget = () => {
	const location = useLocation();

	const {
		collapsed,
		toggled,
		toggleCollapse,
		toggleSidebar,
		closeSidebar,
	} = useSidebar()

	return (
		<>
			<Sidebar
				image={footballImg}
				transitionDuration={1000}
				onBackdropClick={closeSidebar}
				toggled={toggled}
				collapsedWidth={'80px'}
				breakPoint='all'
				className={`${styles.sidebar}`}
				width={'300px'}
			>
				<Menu menuItemStyles={{
					button: getMenuItemStyles
				}}>
					{navItems.map((item) => (
						<MenuItem
							key={item.to}
							active={location.pathname === item.to}
							component={<NavLink to={item.to} className={getNavLinkClassName}/>}
						>
							{item.label}
						</MenuItem>
					))}
				</Menu>
			</Sidebar>
			<div>
				<button onClick={toggleSidebar}>
					Toggle
				</button>
			</div>
		</>
	);
};
