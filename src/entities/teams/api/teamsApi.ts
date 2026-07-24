import {baseApi} from "@shared/api/baseApi.ts";
import type {ITeam, ITeamsResponse} from "@entities/teams/model/types.ts";


export const teamsApi = baseApi.injectEndpoints({
	endpoints: (build) => ({
		getTeams: build.query<ITeam[], void>({
			query: () => `/teams/list`,
			transformResponse: (response: ITeamsResponse)=> response.data
		})
	})
})




export const {
	useGetTeamsQuery,
} = teamsApi;