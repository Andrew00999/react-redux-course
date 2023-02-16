import React from 'react'
import sl from './App.module.scss'

import PeoplePage from '@containers/PeoplePage';

const App = () => {
	return (
		<div className={sl.app}>
			<PeoplePage />
		</div>
	)
}

export default App;
