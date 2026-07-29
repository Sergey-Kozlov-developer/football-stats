import type {MenuItemStylesParams} from "react-pro-sidebar";

export const getMenuItemStyles = ({ active }: MenuItemStylesParams) => ({
	backgroundColor: active ? 'rgba(34, 160, 188, 0.15)' : 'transparent',
	borderRadius: '8px',
	margin: '4px 8px',
	padding: '8px 16px',
	color: active ? '#22A0BC' : '#161616',
	fontWeight: active ? '600' : '400',
	transition: 'all 0.3s ease',
	'&:hover': {
		backgroundColor: active
			? 'rgba(34, 160, 188, 0.15)'
			: 'rgba(34, 160, 188, 0.25)',
	},
});