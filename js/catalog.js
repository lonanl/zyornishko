let catalogEspresso = [
    {
        id: 0,
        title: 'Пиратский бленд',
        image: 'img/item-image/000.jpg',
        region: 'Эфиопия, Колумбия',
        description: 'Легендарная и на 100% органическая смесь эспрессо для настоящих разбойников',
        kislotnost: 70,
        gorech: 80,
        plotnost: 15,
        price_low: 1020,
        price_big: 3870,
    },
    {
        id: 1,
        title: 'Венская смесь',
        image: 'img/item-image/001.jpg',
        region: 'Колумбия, Гондурас, Гватемалла',
        description: 'Смелый европейскй бленд, пользующийся популярностью по всему миру. Во вкусе лимон, ягоды и шоколад.',
        kislotnost: 50,
        gorech: 60,
        plotnost: 20,
        price_low: 1070,
        price_big: 4100,
    },
    {
        id: 2,
        title: 'Колумбия Ла Ред Эколсиерра',
        image: 'img/item-image/002.jpg',
        region: 'Колумбия',
        description: 'Деликатный и хорошо читаемый кофе со вкусом лесных ягод, чая с цитрусами и цветочными нотами!',
        kislotnost: 30,
        gorech: 80,
        plotnost: 10,
        price_low: 1035,
        price_big: '---',
    },
    {
        id: 3,
        title: 'Сальвадор Ана Гонзалез',
        image: 'img/item-image/003.jpg',
        region: 'Сальвадор',
        description: 'Сладкий сбалансированный кофе с нотами запеченного яблока, фейхоа и ореховыми нотами.',
        kislotnost: 50,
        gorech: 85,
        plotnost: 15,
        price_low: 820,
        price_big: 2450,
    },
    {
        id: 4,
        title: 'Гондурас Комса',
        image: 'img/item-image/004.jpg',
        region: 'Гондурас',
        description: 'Яркий и искристый кофе со вкусом темных фруктов, ягод и портвейна!',
        kislotnost: 70,
        gorech: 60,
        plotnost: 15,
        price_low: 890,
        price_big: 3450,
    },
    {
        id: 5,
        title: 'Колумбия Дёзи Харт',
        image: 'img/item-image/005.jpg',
        region: 'Колумбия',
        description: 'Яркий кофе с букетом тропических фруктов: гуава, папайя, ананас, и арбузно-сливочным пломбиром во вкусе и характерной молочной ',
        kislotnost: 30,
        gorech: 60,
        plotnost: 70,
        price_low: 710,
        price_big: 2200,
    },
    {
        id: 12,
        title: 'Кения Рунгето PB',
        image: 'img/item-image/006.jpg',
        region: 'Кения',
        description: 'Сладкая и яркая Кения. Во вкусе: малина, вишня, лист черной смородины и леденцовая карамель!',
        kislotnost: 70,
        gorech: 80,
        plotnost: 15,
        price_low: 885,
        price_big: 3345,
    },
    {
        id: 13,
        title: 'Перу Томас Круз Гейша',
        image: 'img/item-image/007.jpg',
        region: 'Перу',
        description: 'Деликатный и хорошо читаемый кофе со вкусом лесных ягод, чая с цитрусами и цветочными нотами!',
        kislotnost: 25,
        gorech: 15,
        plotnost: 15,
        price_low: 2410,
        price_big: 9440,
    },
    {
        id: 14,
        title: 'Боливия Копакабана',
        image: 'img/item-image/008.jpg',
        region: 'Боливия',
        description: 'Сладкий сбалансированный кофе с нотами запеченного яблока, фейхоа и ореховыми нотами.',
        kislotnost: 55,
        gorech: 20,
        plotnost: 50,
        price_low: 935,
        price_big: 3355,
    },
    {
        id: 15,
        title: 'Колумбия Рафаэль Айя',
        image: 'img/item-image/009.jpg',
        region: 'Колумбия',
        description: 'Яркий и искристый кофе со вкусом темных фруктов, ягод и портвейна!',
        kislotnost: 45,
        gorech: 45,
        plotnost: 75,
        price_low: 1020,
        price_big: 3890,
    },
    {
        id: 16,
        title: 'Кения Мара',
        image: 'img/item-image/010.jpg',
        region: 'Кения',
        description: 'Яркий, сладкий кофе, с читаемым букетом темных ягод, сливы и вишни в шоколаде!',
        kislotnost: 15,
        gorech: 80,
        plotnost: 25,
        price_low: 955,
        price_big: 3625,
    },
    {
        id: 17,
        title: 'Эфиопия Лалиса',
        image: 'img/item-image/011.jpg',
        region: 'Эфиопия',
        description: 'Чистый, сочный кофе с умеренной кислотностью. Во вкусе цитрусовые и цветочные ноты :)',
        kislotnost: 75,
        gorech: 5,
        plotnost: 40,
        price_low: 900,
        price_big: 3400,
    }
]

let catalogFilter = [
    {
        id: 6,
        title: 'Кения Рунгето PB',
        image: 'img/item-image/006.jpg',
        region: 'Кения',
        description: 'Сладкая и яркая Кения. Во вкусе: малина, вишня, лист черной смородины и леденцовая карамель!',
        kislotnost: 70,
        gorech: 80,
        plotnost: 15,
        price_low: 885,
        price_big: 3345,
    },
    {
        id: 7,
        title: 'Перу Томас Круз Гейша',
        image: 'img/item-image/007.jpg',
        region: 'Перу',
        description: 'Деликатный и хорошо читаемый кофе со вкусом лесных ягод, чая с цитрусами и цветочными нотами!',
        kislotnost: 25,
        gorech: 15,
        plotnost: 15,
        price_low: 2410,
        price_big: 9440,
    },
    {
        id: 8,
        title: 'Боливия Копакабана',
        image: 'img/item-image/008.jpg',
        region: 'Боливия',
        description: 'Сладкий сбалансированный кофе с нотами запеченного яблока, фейхоа и ореховыми нотами.',
        kislotnost: 55,
        gorech: 20,
        plotnost: 50,
        price_low: 935,
        price_big: 3355,
    },
    {
        id: 9,
        title: 'Колумбия Рафаэль Айя',
        image: 'img/item-image/009.jpg',
        region: 'Колумбия',
        description: 'Яркий и искристый кофе со вкусом темных фруктов, ягод и портвейна!',
        kislotnost: 45,
        gorech: 45,
        plotnost: 75,
        price_low: 1020,
        price_big: 3890,
    },
    {
        id: 10,
        title: 'Кения Мара',
        image: 'img/item-image/010.jpg',
        region: 'Кения',
        description: 'Яркий, сладкий кофе, с читаемым букетом темных ягод, сливы и вишни в шоколаде!',
        kislotnost: 15,
        gorech: 80,
        plotnost: 25,
        price_low: 955,
        price_big: 3625,
    },
    {
        id: 11,
        title: 'Эфиопия Лалиса',
        image: 'img/item-image/011.jpg',
        region: 'Эфиопия',
        description: 'Чистый, сочный кофе с умеренной кислотностью. Во вкусе цитрусовые и цветочные ноты :)',
        kislotnost: 75,
        gorech: 5,
        plotnost: 40,
        price_low: 900,
        price_big: 3400,
    }
]

let cartSpisok = [
    {
        id: 0,
        count: 2,
        isBig: false,
    },
    {
        id: 1,
        count: 1,
        isBig: true,
    },
    {
        id: 3,
        count: 1,
        isBig: false,
    },
    {
        id: 4,
        count: 1,
        isBig: false,
    },
    {
        id: 5,
        count: 3,
        isBig: true,
    },
]