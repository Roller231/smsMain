const namesCountry: Record<string, Record<string, string>> = {
  '0': {
    name_en: 'Russia',
    name_ru: 'Россия',
  },
  '1': {
    name_en: 'Ukraine',
    name_ru: 'Украина',
  },
  '2': {
    name_en: 'Kazakhstan',
    name_ru: 'Казахстан',
  },
  '3': {
    name_en: 'China',
    name_ru: 'Китай',
  },
  '4': {
    name_en: 'Philippines',
    name_ru: 'Филиппины',
  },
  '5': {
    name_en: 'Myanmar',
    name_ru: 'Мьянма',
  },
  '6': {
    name_en: 'Indonesia',
    name_ru: 'Индонезия',
  },
  '7': {
    name_en: 'Malaysia',
    name_ru: 'Малайзия',
  },
  '8': {
    name_en: 'Kenya',
    name_ru: 'Кения',
  },
  '9': {
    name_en: 'Tanzania',
    name_ru: 'Танзания',
  },
  '10': {
    name_en: 'Vietnam',
    name_ru: 'Вьетнам',
  },
  '11': {
    name_en: 'Kyrgyzstan',
    name_ru: 'Кыргызстан',
  },
  '12': {
    name_en: 'USA (virtual)',
    name_ru: 'США (виртуальные)',
  },
  '13': {
    name_en: 'Israel',
    name_ru: 'Израиль',
  },
  '14': {
    name_en: 'Hong Kong',
    name_ru: 'Гонконг',
  },
  '15': {
    name_en: 'Poland',
    name_ru: 'Польша',
  },
  '16': {
    name_en: 'England',
    name_ru: 'Великобритания',
  },
  '17': {
    name_en: 'Madagascar',
    name_ru: 'Мадагаскар',
  },
  '18': {
    name_en: 'DCongo',
    name_ru: 'ДР Конго',
  },
  '19': {
    name_en: 'Nigeria',
    name_ru: 'Нигерия',
  },
  '20': {
    name_en: 'Macau',
    name_ru: 'Макао',
  },
  '21': {
    name_en: 'Egypt',
    name_ru: 'Египет',
  },
  '22': {
    name_en: 'India',
    name_ru: 'Индия',
  },
  '23': {
    name_en: 'Ireland',
    name_ru: 'Ирландия',
  },
  '24': {
    name_en: 'Cambodia',
    name_ru: 'Камбоджи',
  },
  '25': {
    name_en: 'Laos',
    name_ru: 'Лаос',
  },
  '26': {
    name_en: 'Ivory',
    name_ru: "Кот д'Ивуар",
  },
  '27': {
    name_en: 'Haiti',
    name_ru: 'Гаити',
  },
  '28': {
    name_en: 'Gambia',
    name_ru: 'Гамбия',
  },
  '29': {
    name_en: 'Serbia',
    name_ru: 'Сербия',
  },
  '30': {
    name_en: 'Yemen',
    name_ru: 'Емен',
  },
  '31': {
    name_en: 'Southafrica',
    name_ru: 'ЮАР',
  },
  '32': {
    name_en: 'Romania',
    name_ru: 'Румыния',
  },
  '33': {
    name_en: 'Colombia',
    name_ru: 'Колумбия',
  },
  '34': {
    name_en: 'Estonia',
    name_ru: 'Эстония',
  },
  '35': {
    name_en: 'Azerbaijan',
    name_ru: 'Азербайджан',
  },
  '36': {
    name_en: 'Canada',
    name_ru: 'Канада',
  },
  '37': {
    name_en: 'Morocco',
    name_ru: 'Марокко',
  },
  '38': {
    name_en: 'Ghana',
    name_ru: 'Гана',
  },
  '39': {
    name_en: 'Argentina',
    name_ru: 'Аргентина',
  },
  '40': {
    name_en: 'Uzbekistan',
    name_ru: 'Узбекистан',
  },
  '41': {
    name_en: 'Cameroon',
    name_ru: 'Камерун',
  },
  '42': {
    name_en: 'Chad',
    name_ru: 'Чад',
  },
  '43': {
    name_en: 'Germany',
    name_ru: 'Германия',
  },
  '44': {
    name_en: 'Lithuania',
    name_ru: 'Литва',
  },
  '45': {
    name_en: 'Croatia',
    name_ru: 'Хорватия',
  },
  '46': {
    name_en: 'Sweden',
    name_ru: 'Швеция',
  },
  '47': {
    name_en: 'Iraq',
    name_ru: 'Ирак',
  },
  '48': {
    name_en: 'Netherlands',
    name_ru: 'Нидерланды',
  },
  '49': {
    name_en: 'Latvia',
    name_ru: 'Латвия',
  },
  '50': {
    name_en: 'Austria',
    name_ru: 'Австрия',
  },
  '51': {
    name_en: 'Belarus',
    name_ru: 'Беларусь',
  },
  '52': {
    name_en: 'Thailand',
    name_ru: 'Таиланд',
  },
  '53': {
    name_en: 'Saudiarabia',
    name_ru: 'Саудовская Аравия',
  },
  '54': {
    name_en: 'Mexico',
    name_ru: 'Мексика',
  },
  '55': {
    name_en: 'Taiwan',
    name_ru: 'Тайвань',
  },
  '56': {
    name_en: 'Spain',
    name_ru: 'Испания',
  },
  '58': {
    name_en: 'Algeria',
    name_ru: 'Алжир',
  },
  '59': {
    name_en: 'Slovenia',
    name_ru: 'Словения',
  },
  '60': {
    name_en: 'Bangladesh',
    name_ru: 'Бангладеш',
  },
  '61': {
    name_en: 'Senegal',
    name_ru: 'Сенегал',
  },
  '62': {
    name_en: 'Turkey',
    name_ru: 'Турция',
  },
  '63': {
    name_en: 'Czechia',
    name_ru: 'Чехия',
  },
  '64': {
    name_en: 'Sri Lanka',
    name_ru: 'Шри-Ланка',
  },
  '65': {
    name_en: 'Peru',
    name_ru: 'Перу',
  },
  '66': {
    name_en: 'Pakistan',
    name_ru: 'Пакистан',
  },
  '67': {
    name_en: 'New Zealand',
    name_ru: 'Новая Зеландия',
  },
  '68': {
    name_en: 'Guinea',
    name_ru: 'Гвинея',
  },
  '70': {
    name_en: 'Venezuela',
    name_ru: 'Венесуэла',
  },
  '71': {
    name_en: 'Ethiopia',
    name_ru: 'Эфиопия',
  },
  '72': {
    name_en: 'Mongolia',
    name_ru: 'Монголия',
  },
  '73': {
    name_en: 'Brazil',
    name_ru: 'Бразилия',
  },
  '74': {
    name_en: 'Afghanistan',
    name_ru: 'Афганистан',
  },
  '75': {
    name_en: 'Uganda',
    name_ru: 'Уганда',
  },
  '76': {
    name_en: 'Angola',
    name_ru: 'Ангола',
  },
  '77': {
    name_en: 'Cyprus',
    name_ru: 'Кипр',
  },
  '79': {
    name_en: 'Papua New Guinea',
    name_ru: 'Папуа-Новая Гвинея',
  },
  '80': {
    name_en: 'Mozambique',
    name_ru: 'Мозамбик',
  },
  '81': {
    name_en: 'Nepal',
    name_ru: 'Непал',
  },
  '82': {
    name_en: 'Belgium',
    name_ru: 'Бельгия',
  },
  '83': {
    name_en: 'Bulgaria',
    name_ru: 'Болгария',
  },
  '84': {
    name_en: 'Hungary',
    name_ru: 'Венгрия',
  },
  '85': {
    name_en: 'Moldova',
    name_ru: 'Молдавия',
  },
  '86': {
    name_en: 'Italy',
    name_ru: 'Италия',
  },
  '87': {
    name_en: 'Paraguay',
    name_ru: 'Парагвай',
  },
  '88': {
    name_en: 'Honduras',
    name_ru: 'Гондурас',
  },
  '89': {
    name_en: 'Tunisia',
    name_ru: 'Тунис',
  },
  '90': {
    name_en: 'Nicaragua',
    name_ru: 'Никарагуа',
  },
  '92': {
    name_en: 'Bolivia',
    name_ru: 'Боливия',
  },
  '94': {
    name_en: 'Guatemala',
    name_ru: 'Гватемала',
  },
  '96': {
    name_en: 'Zimbabwe',
    name_ru: 'Зимбабве',
  },
  '97': {
    name_en: 'Puertorico',
    name_ru: 'Пуэрто-Рико',
  },
  '99': {
    name_en: 'Togo',
    name_ru: 'Того',
  },
  '100': {
    name_en: 'Kuwait',
    name_ru: 'Кувейт',
  },
  '101': {
    name_en: 'Salvador',
    name_ru: 'Сальвадор',
  },
  '103': {
    name_en: 'Jamaica',
    name_ru: 'Ямайка',
  },
  '104': {
    name_en: 'Trinidad and Tobago',
    name_ru: 'Тринидад и Тобаго',
  },
  '105': {
    name_en: 'Ecuador',
    name_ru: 'Эквадор',
  },
  '106': {
    name_en: 'Swaziland',
    name_ru: 'Эсватини',
  },
  '107': {
    name_en: 'Oman',
    name_ru: 'Оман',
  },
  '108': {
    name_en: 'Bosnia and Herzegovina',
    name_ru: 'Босния и Герцеговина',
  },
  '109': {
    name_en: 'Dominican Republic',
    name_ru: 'Доминиканская Республика',
  },
  '112': {
    name_en: 'Panama',
    name_ru: 'Панама',
  },
  '114': {
    name_en: 'Mauritania',
    name_ru: 'Мавритания',
  },
  '115': {
    name_en: 'Sierra Leone',
    name_ru: 'Сьерра-Леоне',
  },
  '116': {
    name_en: 'Jordan',
    name_ru: 'Иордания',
  },
  '117': {
    name_en: 'Portugal',
    name_ru: 'Португалия',
  },
  '118': {
    name_en: 'Barbados',
    name_ru: 'Барбадос',
  },
  '119': {
    name_en: 'Burundi',
    name_ru: 'Бурунди',
  },
  '120': {
    name_en: 'Benin',
    name_ru: 'Бенин',
  },
  '122': {
    name_en: 'Bahamas',
    name_ru: 'Багамы',
  },
  '123': {
    name_en: 'Botswana',
    name_ru: 'Ботсвана',
  },
  '124': {
    name_en: 'Belize',
    name_ru: 'Белиз',
  },
  '126': {
    name_en: 'Dominica',
    name_ru: 'Доминика',
  },
  '127': {
    name_en: 'Grenada',
    name_ru: 'Гренада',
  },
  '128': {
    name_en: 'Georgia',
    name_ru: 'Грузия',
  },
  '129': {
    name_en: 'Greece',
    name_ru: 'Греция',
  },
  '130': {
    name_en: 'Guinea-Bissau',
    name_ru: 'Гвинея-Бисау',
  },
  '131': {
    name_en: 'Guyana',
    name_ru: 'Гайана',
  },
  '133': {
    name_en: 'Comoros',
    name_ru: 'Коморы',
  },
  '134': {
    name_en: 'Saint Kitts and Nevis',
    name_ru: 'Сент-Китс и Невис',
  },
  '135': {
    name_en: 'Liberia',
    name_ru: 'Либерия',
  },
  '136': {
    name_en: 'Lesotho',
    name_ru: 'Лесото',
  },
  '137': {
    name_en: 'Malawi',
    name_ru: 'Малави',
  },
  '138': {
    name_en: 'Namibia',
    name_ru: 'Намибия',
  },
  '139': {
    name_en: 'Niger',
    name_ru: 'Нигер',
  },
  '140': {
    name_en: 'Rwanda',
    name_ru: 'Руанда',
  },
  '141': {
    name_en: 'Slovakia',
    name_ru: 'Словакия',
  },
  '142': {
    name_en: 'Suriname',
    name_ru: 'Суринам',
  },
  '143': {
    name_en: 'Tajikistan',
    name_ru: 'Таджикистан',
  },
  '145': {
    name_en: 'Bahrain',
    name_ru: 'Бахрейн',
  },
  '146': {
    name_en: 'Reunion',
    name_ru: 'Реюньон',
  },
  '147': {
    name_en: 'Zambia',
    name_ru: 'Замбия',
  },
  '148': {
    name_en: 'Armenia',
    name_ru: 'Армения',
  },
  '150': {
    name_en: 'Congo',
    name_ru: 'Конго',
  },
  '151': {
    name_en: 'Chile',
    name_ru: 'Чили',
  },
  '152': {
    name_en: 'Burkina Faso',
    name_ru: 'Буркина-Фасо',
  },
  '154': {
    name_en: 'Gabon',
    name_ru: 'Габон',
  },
  '155': {
    name_en: 'Albania',
    name_ru: 'Албания',
  },
  '156': {
    name_en: 'Uruguay',
    name_ru: 'Уругвай',
  },
  '157': {
    name_en: 'Mauritius',
    name_ru: 'Маврикий',
  },
  '158': {
    name_en: 'Bhutan',
    name_ru: 'Бутан',
  },
  '159': {
    name_en: 'Maldives',
    name_ru: 'Мальдивы',
  },
  '160': {
    name_en: 'Guadeloupe',
    name_ru: 'Гваделупа',
  },
  '161': {
    name_en: 'Turkmenistan',
    name_ru: 'Туркменистан',
  },
  '162': {
    name_en: 'French Guiana',
    name_ru: 'Французская Гвиана',
  },
  '163': {
    name_en: 'Finland',
    name_ru: 'Финляндия',
  },
  '164': {
    name_en: 'Saint Lucia',
    name_ru: 'Сент-Люсия',
  },
  '165': {
    name_en: 'Luxembourg',
    name_ru: 'Люксембург',
  },
  '167': {
    name_en: 'Equatorial Guinea',
    name_ru: 'Экваториальная Гвинея',
  },
  '168': {
    name_en: 'Djibouti',
    name_ru: 'Джибути',
  },
  '169': {
    name_en: 'Antigua and Barbuda',
    name_ru: 'Антигуа и Барбуда',
  },
  '170': {
    name_en: 'Cayman Islands',
    name_ru: 'Острова Кайман',
  },
  '171': {
    name_en: 'Montenegro',
    name_ru: 'Черногория',
  },
  '172': {
    name_en: 'Denmark',
    name_ru: 'Дания',
  },
  '173': {
    name_en: 'Switzerland',
    name_ru: 'Швейцария',
  },
  '174': {
    name_en: 'Norway',
    name_ru: 'Норвегия',
  },
  '175': {
    name_en: 'Australia',
    name_ru: 'Австралия',
  },
  '176': {
    name_en: 'Eritrea',
    name_ru: 'Эритрея',
  },
  '178': {
    name_en: 'Sao Tome and Principe',
    name_ru: 'Сан-Томе и Принсипи',
  },
  '179': {
    name_en: 'Aruba',
    name_ru: 'Аруба',
  },
  '180': {
    name_en: 'Montserrat',
    name_ru: 'Монтсеррат',
  },
  '181': {
    name_en: 'Anguilla',
    name_ru: 'Ангилья',
  },
  '182': {
    name_en: 'Japan',
    name_ru: 'Япония',
  },
  '183': {
    name_en: 'North Macedonia',
    name_ru: 'Северная Македония',
  },
  '185': {
    name_en: 'New Caledonia',
    name_ru: 'Новая Каледония',
  },
  '186': {
    name_en: 'Cape Verde',
    name_ru: 'Кабо-Верде',
  },
  '187': {
    name_en: 'USA',
    name_ru: 'США',
  },
  '196': {
    name_en: 'Singapore',
    name_ru: 'Сингапур',
  },
  '197': {
    name_en: 'Tonga',
    name_ru: 'Тонга',
  },
  '198': {
    name_en: 'Samoa',
    name_ru: 'Самоа',
  },
  '57': {
    name_ru: 'Иран',
    name_en: 'Iran',
  },
  '69': {
    name_ru: 'Мали',
    name_en: 'Mali',
  },
  '78': {
    name_ru: 'Франция',
    name_en: 'France',
  },
  '91': {
    name_ru: 'Восточный Тимор',
    name_en: 'Timorleste',
  },
  '93': {
    name_ru: 'Коста-Рика',
    name_en: 'Costarica',
  },
  '95': {
    name_ru: 'ОАЭ',
    name_en: 'Uae',
  },
  '98': {
    name_ru: 'Судан',
    name_en: 'Sudan',
  },
  '102': {
    name_ru: 'Ливия',
    name_en: 'Libyan',
  },
  '110': {
    name_ru: 'Сирия',
    name_en: 'Syrian',
  },
  '111': {
    name_ru: 'Катар',
    name_en: 'Qatar',
  },
  '113': {
    name_ru: 'Куба',
    name_en: 'Cuba',
  },
  '121': {
    name_ru: 'Бруней ',
    name_en: 'Brunei',
  },
  '125': {
    name_ru: 'Caf',
    name_en: 'Caf',
  },
  '132': {
    name_ru: 'Исландия',
    name_en: 'Iceland',
  },
  '144': {
    name_ru: 'Моноко',
    name_en: 'Monaco',
  },
  '149': {
    name_ru: 'Сомали',
    name_en: 'Somalia',
  },
  '153': {
    name_ru: 'Ливан',
    name_en: 'Lebanon',
  },
  '166': {
    name_ru: 'Сент-Винсент и Гренадины',
    name_en: 'Saintvincentgrenadines',
  },
  '177': {
    name_ru: 'Южный Судан',
    name_en: 'Southsudan',
  },
  '184': {
    name_ru: 'Сейшелы',
    name_en: 'Seychelles',
  },
  '188': {
    name_ru: 'Палестина',
    name_en: 'Palestine',
  },
  '189': {
    name_ru: 'Фиджи',
    name_en: 'Fiji',
  },
  '190': {
    name_ru: 'Южная Корея',
    name_en: 'Southkorea',
  },
  '191': {
    name_ru: 'Северная Корея',
    name_en: 'Northkorea',
  },
  '192': {
    name_ru: 'Западная Сахара',
    name_en: 'Westernsahara',
  },
  '193': {
    name_ru: 'Соломоновы о-ва',
    name_en: 'Solomonislands',
  },
  '194': {
    name_ru: 'Джерси',
    name_en: 'Jersey',
  },
  '195': {
    name_ru: 'Бермуды',
    name_en: 'Bermuda',
  },
  '199': {
    name_ru: 'Мальта',
    name_en: 'Malta',
  },
  '200': {
    name_ru: 'Лихтенштейн',
    name_en: 'Liechtenstein',
  },
};

export default namesCountry;
