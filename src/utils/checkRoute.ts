const publicRoutes = [
    '/logout',
    '/login',
    '/signup',
];


export const checkRoute = (route: string) => {
    const isPublicRoute = publicRoutes.includes(route);
    if (isPublicRoute) {
        return { auth: 'public', redirect: '/' };
    }
    else {
        return { auth: 'private', redirect: '/login' };
    }
}