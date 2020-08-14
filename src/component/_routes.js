import {
    DashboardPage,
    FavoritesPage,
    ProfilePage,
    SearchPage,
    FriendsPage
} from './vpages';

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
        route: '/dashboard',
        component: DashboardPage,
    },
]

export default AppRoutes;