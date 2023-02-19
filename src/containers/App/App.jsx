import React from 'react'
import { Route, Routes } from 'react-router-dom'
import routesConfig from '@routes/routesConfig'

import Header from '@components/Header'

import sl from './App.module.scss'

const App = () => {
	return (
		<>
			<Header />
			<div className={sl.app_container}>
				<Routes>
					{routesConfig.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							exact={route.exact}
							element={route.element}
						/>
					))}
				</Routes>
			</div>
		</>
	)
}

export default App;
