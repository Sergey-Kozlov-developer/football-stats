import {NavLink, useLocation} from "react-router";
import styles from './NavigationWidget.module.scss';
import footballImg from '@assets/img/football.webp'
import {Menu, MenuItem, Sidebar} from "react-pro-sidebar";
import {getMenuItemStyles} from "@widgets/navigation/utils/getMenuItemStyles.ts";
import {useSidebarContext} from "@features/sidebar/hook/useSideBarContext.tsx";

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
	} = useSidebarContext()

	const menuItems =
		navItems.map((item) => (
			<MenuItem
				key={item.to}
				active={location.pathname === item.to}
				component={<NavLink to={item.to} className={getNavLinkClassName}/>}
			>
				{item.label}
			</MenuItem>
		))

	return (
		<>
			<Sidebar
				image={footballImg}
				transitionDuration={1000}
				onBackdropClick={closeSidebar}
				toggled={toggled}
				collapsed={collapsed}
				onToggle={toggleCollapse}
				breakPoint='md'
				className={`${styles.sidebar}`}
				collapsedWidth='80px'
				width='300px'
			>
				<div className={styles.toggleButtonWrapper}>
					<button
						onClick={toggleCollapse}
						className={styles.toggleButton}
						aria-label={collapsed ? 'Развернуть меню' : 'Свернуть меню'}
					>
						{collapsed ? '→' : '←'}
					</button>
				</div>
				<Menu menuItemStyles={{
					button: getMenuItemStyles
				}}>
					{menuItems}
				</Menu>
			</Sidebar>
			<button
				onClick={toggleSidebar}
				className={styles.mobileToggle}
				aria-label="Открыть меню"
			>
				☰
			</button>

		</>
	);
};
NavigationWidget.displayName = 'NavigationWidget';