import {useGetTeamsQuery} from "@entities/teams/api/teamsApi.ts";

export const FootballTeams = () => {
	const {data, isLoading, isError} = useGetTeamsQuery()
	console.log(data)
	return (
		<div>
			<h1>FootballTeams</h1>
				{data?.map((item) => (
					<div key={item.id}>
						<h1>{item.name}</h1>
					</div>
					))}

		</div>
	);
};

