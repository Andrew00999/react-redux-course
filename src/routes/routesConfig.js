import HomePage from '@containers/HomePage'
import PeoplePage from '@containers/PeoplePage'
import PersonPage from '@containers/PersonPage'
import NotFoundPage from '@containers/NotFoundPage'
import FavoritePage from '@containers/FavoritePage'

const routesConfig = [
    {
        path: '/',
        exact: true,
        element: <HomePage />
    },
    {
        path: '/people',
        exact: true,
        element: <PeoplePage />
    },
    {
        path: '/people/:id',
        exact: true,
        element: <PersonPage />
    },
    {
        path: '/favorite',
        exact: true,
        element: <FavoritePage />
    },
    {
        path: '/not-found',
        exact: true,
        element: <NotFoundPage />
    },
    {
        path: '*',
        exact: false,
        element: <NotFoundPage />
    }
]

export default routesConfig
