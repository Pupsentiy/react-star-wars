import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import NotFoundPage from '@containers/NotFoundPage'

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
        path: '*',
        element: <NotFoundPage/>
    },
    {
        path: '/not-found',
        element: <NotFoundPage/>
    },
];

export default routesConfig;