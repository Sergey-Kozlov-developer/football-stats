import {NavigationWidget} from "@widgets/navigation";
import {Outlet} from "react-router";
import styles from "./AppLayout.module.scss";


export default function AppLayout() {

	return (
		<div className={styles.layout}>
			<NavigationWidget/>
			<main className={styles.content}

			>
				<div className='container'>
					<Outlet/>
				</div>
			</main>
		</div>
	)
};