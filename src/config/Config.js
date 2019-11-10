export const CONFIG = {
    appName: "FoodStack",
    // baseRoute: 'http://localhost:8888',
    // baseRoute: 'https://d84d152d-a246-48af-8d75-31c8f0801813.mock.pstmn.io',
    baseRoute: 'http://localhost:3000',
    baseRouteImg: 'http://localhost:3000/imgs',
    primaryColor: '#F44336',
    mockLoadingTime: 2000,
    currencySymbol: '₦',
    isMock: true,
    navLinks: [
        {
            path: '/cart',
            icon: '',
            friendlyName: 'Cart',
            showInHeader: true,
            style: {},
        },
        {
            path: '/about',
            icon: '',
            friendlyName: 'About',
            showInHeader: false,
            style: {},
        },
        {
            path: '/recipes',
            icon: '',
            friendlyName: 'Recipes',
            showInHeader: true,
            style: {},
        },
        {
            path: '/login',
            icon: '',
            friendlyName: 'Login',
            showInHeader: true,
            style: {},
        },
    ],

}
