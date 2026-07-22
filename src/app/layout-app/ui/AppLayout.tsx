import {NavigationWidget} from "@widgets/navigation";
import {Outlet} from "react-router";


export default function AppLayout() {
	return (
		<>
			<NavigationWidget/>
			<main className='container'>
				<Outlet/>
			</main>
		</>
	)
};