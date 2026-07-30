import {Route, Routes} from "react-router";
import {TeamsPage} from "@pages/teams";
import AppLayout from "@app/layout-app/ui/AppLayout.tsx";
import {FootballPlayers} from "@pages/players";
import {FootballLeague} from "@pages/league";


function App() {


	return (
		<>
			<Routes>
				<Route path='/' element={<AppLayout/>}>
					<Route index element={<TeamsPage/>}/>
					<Route path="/leagues" element={<FootballLeague/>}/>
					<Route path="/players" element={<FootballPlayers/>}/>
				</Route>
			</Routes>
		</>
	)
}

export default App
