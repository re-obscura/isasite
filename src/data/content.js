// ═══════════════════════════════════════════════════════
// ISA — Content Data
// ═══════════════════════════════════════════════════════

import heroBg from '../assets/hero-bg.png';
import portfolioArch from '../assets/portfolio-arch.png';
import portfolioDesign from '../assets/portfolio-design.png';
import portfolioLandscape from '../assets/portfolio-landscape.png';
import portfolioGates from '../assets/portfolio-gates.png';
import teamPhoto from '../assets/team-photo.png';

export const capsuleMessages = [
    {
        text: 'Новый проект: Вилла «Грозный» — скоро открытие',
        details: 'Эксклюзивная резиденция в стиле модерн с панорамными окнами и авторским ландшафтным дизайном. Площадь участка — 25 соток.',
        cta: 'Подробнее'
    },
    {
        text: 'Собственное производство ворот — от эскиза до монтажа',
        details: 'Полный цикл: проектирование, ковка, покраска, установка. Используем только высоколегированную сталь. Гарантия — 25 лет.',
        cta: 'Смотреть каталог'
    },
    {
        text: 'Весеннее предложение — проект благоустройства в подарок',
        details: 'При заказе архитектурного проекта дома площадью от 300 м² — ландшафтный дизайн участка в подарок.',
        cta: 'Узнать условия'
    }
];

export const directions = [
    {
        id: 'architecture',
        name: 'Villa «Sochi»',
        category: 'Архитектура',
        image: portfolioArch,
        title: 'Архитектура',
        description: 'Проектируем дома и виллы, которые становятся архитектурными доминантами. Каждый проект — это синтез функциональности, эстетики и инженерной точности. От концепции до авторского надзора.',
        cta: 'Смотреть проекты'
    },
    {
        id: 'design',
        name: 'Penthouse «Moscow»',
        category: 'Дизайн',
        image: portfolioDesign,
        title: 'Дизайн интерьеров',
        description: 'Создаём пространства, в которых хочется жить. Премиальные материалы, авторская мебель, продуманный свет. Каждый интерьер — отражение характера владельца.',
        cta: 'Смотреть проекты'
    },
    {
        id: 'landscape',
        name: 'Парк «Patriot»',
        category: 'Благоустройство',
        image: portfolioLandscape,
        title: 'Благоустройство',
        description: 'Превращаем территорию в продолжение дома. Ландшафтный дизайн, мощение, системы освещения и полива. Создаём ощущение приватного парка.',
        cta: 'Смотреть проекты'
    },
    {
        id: 'gates',
        name: 'Metal Gate',
        category: 'Ворота',
        image: portfolioGates,
        title: 'Ворота',
        description: 'Собственное производство. Кованые и автоматические ворота из высоколегированной стали. Каждое изделие — ручная работа с гарантией 25 лет. Фактура металла, которую хочется трогать.',
        cta: 'Смотреть каталог'
    }
];

export const portfolioItems = [
    {
        id: 1,
        name: 'Резиденция «Эльбрус»',
        category: 'architecture',
        image: portfolioArch,
        size: 'large'
    },
    {
        id: 2,
        name: 'Пентхаус «Москва-Сити»',
        category: 'design',
        image: portfolioDesign,
        size: 'normal'
    },
    {
        id: 3,
        name: 'Кованые ворота «Крепость»',
        category: 'gates',
        image: portfolioGates,
        size: 'normal'
    },
    {
        id: 4,
        name: 'Парк «Патриот»',
        category: 'landscape',
        image: portfolioLandscape,
        size: 'wide'
    },
    {
        id: 5,
        name: 'Вилла «Сочи»',
        category: 'architecture',
        image: heroBg,
        size: 'normal'
    },
    {
        id: 6,
        name: 'Лофт «Грозный»',
        category: 'design',
        image: portfolioDesign,
        size: 'normal'
    }
];

export const philosophyData = {
    tag: 'Наша философия',
    title: 'Мы строим то, что\nбудет стоять\nвеками.',
    texts: [
        'Наш подход — фундаментальный. За каждым проектом стоит мужское слово, команда профессионалов и безупречный вкус. Мы не гонимся за трендами — мы создаём то, что будет актуально через десятилетия.',
        'Прозрачность на каждом этапе. Вы всегда знаете, что происходит с вашим проектом, и можете быть уверены в результате.'
    ],
    image: teamPhoto,
    values: [
        { number: '150+', label: 'Проектов' },
        { number: '12', label: 'Лет опыта' },
        { number: '98%', label: 'Довольных клиентов' },
        { number: '25', label: 'Лет гарантии' }
    ]
};

export const footerData = {
    ctaTag: 'Начнём сотрудничество',
    ctaTitle: 'Обсудим ваш\nпроект?',
    contacts: [
        { label: 'Телефон', value: '+7 (928) 000-00-00' },
        { label: 'Email', value: 'info@isa-design.ru' },
        { label: 'Адрес', value: 'г. Грозный, пр. Путина, 1' }
    ],
    socials: ['telegram', 'whatsapp', 'instagram'],
    copyright: '© 2026 ISA Architecture & Design. Все права защищены.'
};

export const navLinks = [
    { label: 'Главная', href: '#hero' },
    { label: 'Направления', href: '#stories' },
    { label: 'Портфолио', href: '#portfolio' },
    { label: 'О нас', href: '#philosophy' },
    { label: 'Контакты', href: '#footer' }
];
