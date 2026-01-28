/**
 * Types for SMS-service bot-t.com
 * (c) 2023-present
 * */

declare interface PublicKey {
  /**
   * Публичный ключ модуля
   * */
  public_key: string;
}

declare interface SecretKey {
  /**
   * Приватный ключ пользователя(GET string)
   * */
  user_secret_key: string;
}

/**
 * Общие параметры запросов
 * */
declare type SMSCommonParams = SecretKey & PublicKey;

declare interface SMSUserIdParam {
  /**
   * Уникальный идентификатор пользователя (GET number)
   * */
  user_id: number;
}

declare interface SMSCountryParam {
  /**
   * Код страны
   * */
  country: string;
}

declare interface SMSServiceParam {
  /**
   * Код сервиса
   * */
  service: string;
}

declare interface SMSLanguageParam {
  /**
   * Язык ( eng или ru )
   * */
  language: string;
}

/**
 * Параметры для заказов
 *
 * Запросы:
 *   - /closeOrder
 *   - /secondSms
 *   - /confirmOrder
 *   - /closeRentOrder
 *   - /confirmRentOrder
 *   - /getContinuePrice
 *   - /getRentOrder
 * */
declare interface SMSOrderParams extends SMSUserIdParam, SMSCommonParams {
  /**
   * Уникальный идентификатор заказа0
   * */
  order_id: number;
}

/**
 * Запросы для получения данных
 * */
declare interface SMSCommonQueries {
  /**
   * Возвращает настройку модуля
   * */
  getSettings: PublicKey;

  /**
   * Получение пользователя
   * */
  getUser: SMSUserIdParam;

  /**
   * Задать язык
   * */
  setLanguage: SMSLanguageParam & SMSUserIdParam & SecretKey;
}
