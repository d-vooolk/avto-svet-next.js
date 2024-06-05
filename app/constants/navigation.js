const NAVIGATION_PAGE_NAMES = {
    general: 'Главная',
    services: 'Услуги',
    contacts: 'Контакты',
    price: 'Цены',
    polirovka: 'Полировка',
}

export const NAVIGATION_PROVIDERS = [
    {
        name: NAVIGATION_PAGE_NAMES.general,
        path: '/',
        children: [],
    },
    {
        name: NAVIGATION_PAGE_NAMES.services,
        path: '/',
        children: [
            {
                name: NAVIGATION_PAGE_NAMES.polirovka,
                path: '/',
                children: [],
            },
        ],
    },
    {
        name: NAVIGATION_PAGE_NAMES.price,
        path: '/',
        children: [],
    },
    {
        name: NAVIGATION_PAGE_NAMES.contacts,
        path: '/',
        children: [],
    },
]