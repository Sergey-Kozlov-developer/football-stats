import {createContext, type ReactNode, useContext, useState} from "react";
// import {SidebarContext} from "react-pro-sidebar";


export interface ISideBarContextType {
	toggled: boolean;
	collapsed: boolean;
	toggleCollapse: () => void;
	toggleSidebar: () => void;
	closeSidebar: () => void;
}

const SideBarContext = createContext<ISideBarContextType | undefined>(undefined)

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const [toggled, setToggled] = useState(false);
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapse = () => setCollapsed(!collapsed);
	const toggleSidebar = () => setToggled(!toggled);
	const closeSidebar = () => setToggled(false);


	return (
		<SideBarContext.Provider value={{
		collapsed,
			toggled,
			toggleCollapse,
			toggleSidebar,
			closeSidebar,
	}}>
	{children}
	</SideBarContext.Provider>
);

}

export const useSidebar = () => {
	const context = useContext(SideBarContext);
	if (!context) {
		throw new Error('useSidebar must be used within SidebarProvider');
	}
	return context;
};