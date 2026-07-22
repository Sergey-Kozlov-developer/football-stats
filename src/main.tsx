import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '@shared/styles/main.scss'
import App from './app/App.tsx'
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</StrictMode>,
)
