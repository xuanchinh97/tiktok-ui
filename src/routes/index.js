import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import Upload from '~/pages/Upload';
import Home from '~/pages/Home';
import { HeaderOnly } from '~/components/Layout';

const publicRoutes = [
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/', component: Home },
];

const privateRoutes = [];
    
export { publicRoutes, privateRoutes };
