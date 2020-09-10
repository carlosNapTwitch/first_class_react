import {
    DashboardPage,
    FavoritesPage,
    ProfilePage,
    SearchPage,
    FriendsPage
} from './vpages';

const base = '/dashboard';
const AppRoutes = [
    {
        label: 'Buscador',
        route: '/search',
        component: SearchPage,
    },
    {
        label: 'Favoritas',
        route: '/favorites',
        component: FavoritesPage,
    },
    {
        label: 'Perfil',
        route: '/profile',
        component: ProfilePage,
    },
    {
        label: 'Amigos',
        route: '/friends',
        component: FriendsPage,
    },
    {
        label: 'Dashboard',
        route: '/main',
        component: DashboardPage,
    },
].map(item => { item.route = `${base}${item.route}`; return item });

export default AppRoutes;