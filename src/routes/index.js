import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Home from '~/pages/Home';
import { HeaderOnly } from '~/components/Layout';
import routesConfig from '~/config/routes';

const publicRoutes = [
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.search, component: Search },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.home, component: Home },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
