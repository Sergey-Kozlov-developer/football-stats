export interface ITeam {
	id: number;
	name: string;
	flashId: string;
	logoUrl: string;
	country: {
		code: string;
		name: string;
	}
	count: number;
	totalCount: number;
}

export interface ITeamsResponse {
	count: number;
	totalCount: number;
	data: ITeam[];
};

export interface ITeamsParams {
	country?: string;
	name?: string;
}