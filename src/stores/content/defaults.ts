export const defaultService: SMSServices = {
  cost: 0,
  count: 0,
  image: '',
  name: '',
  longName: '',
};

export const defaultCountry: SMSCountry = {
  image: '',
  name_en: '',
  name_ru: '',
  org_id: 0,
};

export const defaultSystemUser: SystemUser = {
  id: 0,
  bot_id: 0,
  user: {
    id: 0,
    telegram_id: 0,
    username: '',
    first_name: '',
    last_name: '',
    link: '',
    type: '',
  },
  ref: null,
  money: 0,
  status: 0,
  create_at: 0,
  update_at: 0,
  secret_user_key: '',
};

export const defaultUser: SMSUser = {
  id: 0,
  language: '',
  service: '',
};

export const defaultOrder: SMSOrder = {
  id: 0,
  phone: '79963811573',
  time: 0,
  codes: '',
  service: '',
  country: '',
  cost: 0,
  status: 8,
};

export const defaultFavorite: SMSFavorite = {
  service: {
    cost: 0,
    count: 0,
    image: '',
    name: '',
    longName: '',
  },
  country: {
    image: '',
    name_en: '',
    name_ru: '',
    org_id: 0,
  },
};
