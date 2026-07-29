import {NavigationWidget} from "@widgets/navigation";
import {Outlet} from "react-router";
import styles from "./AppLayout.module.scss";
import {useSidebar} from "@features/sidebar/hook/useSideBarContext.tsx";

export default function AppLayout() {
	const {collapsed} = useSidebar();
	return (
		<div className={styles.layout}>
			<NavigationWidget/>
			<main className={styles.content} style={{marginLeft: collapsed ? '80px' : '300px'}}>
				<div className='container'>
					<Outlet/>
				</div>
			</main>
		</div>
	)
};