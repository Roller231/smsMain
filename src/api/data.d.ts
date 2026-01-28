/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

/**
 * Сущность пользователя системы bott
 * */
declare interface SystemUser {
  id: number;
  bot_id: number;
  user: {
    id: number;
    telegram_id: number;
    username: string;
    first_name: string;
    last_name: string;
    link: string;
    type: string;
  };
  ref: null;
  money: number;
  status: number;
  create_at: number;
  update_at: number;
  secret_user_key: string;
}

/**
 * Сущность пользователя для приложения
 * */
declare interface SMSUser {
  /**
   * идентификатор пользователя ( tg_id )
   * */
  id: number;
  /**
   * выбранный сервис
   * */
  service: string;
  /**
   * (ru или eng)
   * */
  language: string;
}

/**
 * Сущность страны для выбора
 * */
declare interface SMSCountry {
  /**
   * Уникальный идентификатор */
  org_id: number;
  /**
   * Название страны
   * */
  name_ru: string;
  /**
   * Название страны
   * */
  name_en: string;
  /**
   * Флаг страны(Если нет, то null)
   * */
  image: string | null;
}

/**
 * Сущность сервисов для покупки
 * */
declare interface SMSServices {
  longName: string;
  /**
   *
   * */
  cost: number;
  /**
   *
   * */
  count: number;
  /**
   *
   * */
  image: string;
  /**
   *
   * */
  name: string;
}

/**
 * Сущность заказа
 * */
declare interface SMSOrder {
  /**
   * Уникальный идентификатор заказа
   * */
  id: number;
  /**
   * номер телефона
   * */
  phone: string;
  /**
   * Коды
   * */
  codes: string | null;
  /**
   * Время в unix формате
   * */
  time: number;
  /**
   *
   * */
  service: string;
  /**
   *
   * */
  country: string;
  /**
   *
   * */
  cost: number;
  /**
   * Статус
   */
  status: 0 | 1 | 3 | 4 | 5 | 6 | 8 | 9 | 10;
}

declare interface SMSFavorite {
  service: SMSServices;
  country: SMSCountry;
}

declare interface Stages {
  label: string;

  caption?: string;

  search: 'services' | 'countries';
  condition: boolean;
  list: Array<any>;
  selected: any | null;
  itemComponent: any;
  price?: 'services';
  text?: string;
  selectedComponent?: any;
}
