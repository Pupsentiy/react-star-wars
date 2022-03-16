import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import NotFoundPage from '@containers/NotFoundPage'

const routesConfig = [
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/people',
        element: <PeoplePage/>
    },{
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