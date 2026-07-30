import {createContext, type ReactNode, useCallback, useContext, useMemo, useState} from "react";



export interface ISideBarContextType {
	toggled: boolean;
	collapsed: boolean;
	toggleCollapse: () => void;
	toggleSidebar: () => void;
	closeSidebar: () => void;
}

const SideBarContext = createContext<ISideBarContextType | undefined>(undefined)

export const SidebarProvider = ({children}: { children: ReactNode }) => {
	const [toggled, setToggled] = useState(false);
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapse = useCallback(() => setCollapsed((prev) => !prev), []);
	const toggleSidebar = useCallback(() => setToggled((prev) => !prev), []);
	const closeSidebar = useCallback(() => setToggled(false), []);

	const value = useMemo(() => ({
		toggled, collapsed, toggleCollapse, toggleSidebar,closeSidebar
	}), [toggled, collapsed, toggleCollapse, toggleSidebar,closeSidebar]);


	return (
		<SideBarContext.Provider value={value}>
			{children}
		</SideBarContext.Provider>
	);

}

export const useSidebarContext = () => {
	const context = useContext(SideBarContext);
	if (!context) {
		throw new Error('useSidebar must be used within SidebarProvider');
	}
	return context;
};