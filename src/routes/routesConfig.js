import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import NotFoundPage from '@containers/NotFoundPage'
import FavoritePage from '@containers/FavoritePage'

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },
    {
        path: '/favorites',
        element: <FavoritePage/>
    },
    {
        path: '/people/:id',
        element: <PersonPage/>
    },
    {
        path: '*',
        element: <NotFoundPage/>
    },
    {
        path: '/not-found',
        element: <NotFoundPage/>
    },
];

export default routesConfig;