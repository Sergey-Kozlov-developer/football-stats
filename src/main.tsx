import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@shared/styles/main.scss'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "@app/store/store.ts";
import {SidebarProvider} from "@features/sidebar/hook/useSideBarContext.tsx";
import {FavoritesProvider} from "@features/favorite/hook/useFavoriteContext.tsx";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<FavoritesProvider>
		<SidebarProvider>
			<Provider store={store}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</Provider>
		</SidebarProvider>
		</FavoritesProvider>
	</StrictMode>,
)
