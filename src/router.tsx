import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Speed, Sound, SoundResult, Aim } from './settings/pages';
import { Home } from './pages/home/home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/speed-checker',
                element: <Speed />,
            },
            {
                path: '/hearing-ability',
                element: <Sound />,
            },
            {
                path: '/hearing-ability/result',
                element: <SoundResult />,
            },
            {
                path: '/aim-ability',
                element: <Aim />,
            },
        ],
    },
]);

export default router;
