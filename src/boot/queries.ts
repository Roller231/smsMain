import config from 'src/config';
import { sms, bott } from 'boot/instances';

import { getHash } from 'src/utils/helpers/string';

import { useDataStore } from 'stores/data/dataStore';
import { useStatesStore } from 'stores/states/statesStore';

import { useNotify } from 'src/utils/use/useNotify';
import { useColor } from 'src/utils/use/useColor';
import { LocalStorage } from 'quasar';

export async function fetchSMS<Q extends keyof SMSQueries>(
  query: Q,
  params?: SMSParams<Q>,
  open?: boolean
) {

  // 🔹 DEV MODE (не Telegram)
  if (!window.Telegram?.WebApp?.initData) {
    console.warn('[DEV MODE] fetchSMS skipped:', query);
    return;
  }

  const data = useDataStore();
  const states = useStatesStore();


  try {
    return await sms({
      url: query,
      params: params,
    }).then((response) => {
      if (query === 'services') {
        /** */

        data.setServices(response.data.data);

        /** */
      } else if (query === 'countries') {
        /** */

        data.countries.value = response.data.data;
        data.setLastCountry();

        /** */
      } else if (query === 'getSettings') {
        /** */

        const setting = { color: 1, is_saved: false };

        if (typeof response.data.data === 'object') {
          const { color, is_saved } = response.data.data;

          setting.color = color;
          setting.is_saved = is_saved;
        } else {
          setting.color = response.data.data || 1;
        }

        useColor(setting.color);
        data.isSaved = setting.is_saved;

        /** */
      } else if (query === 'setLanguage') {
        /** */

        data.userValue = response.data.data;

        /** */
      } else if (query === 'createOrder') {
        /** */

        data.setOrder(response.data.data);
        states.openDialog('order');

        /** */
      } else if (query === 'orders') {
        /** */
        data.orders.value = response.data.data;

        if (open) useNotify('', true);

        /** */
      } else if (
        query === 'closeOrder' ||
        query === 'confirmOrder' ||
        query === 'secondSms'
      ) {
        /** */

        data.updateOrder(response.data.data);

        fetchSMS('orders', {
          user_id: data.user?.id ?? 0,
          user_secret_key: data.systemUser?.secret_user_key ?? '',
          public_key: config.public_key,
        });

        /** */
      } else if (query === 'getOrder') {
        /** */

        data.updateOrder(response.data.data);
        if (open) states.openDialog('order');

        /** */
      } else if (query === 'getUser') {
        const user = response.data.data;
        data.userValue = user;
      
        // ВАЖНО: чтобы startApp получил id
        const userId = user?.id ?? user?.user_id ?? user?.telegram_id;
      
        if (!userId) {
          console.error('[getUser] userId not found in response:', user);
          return;
        }
      
        const secret = data.systemUser?.secret_user_key ?? data.systemUserValue?.secret_user_key;
      
        if (!secret) {
          console.error('[getUser] secret_user_key not found:', {
            systemUser: data.systemUser,
            systemUserValue: data.systemUserValue,
          });
          return;
        }
      
        startApp(Number(userId), secret).then(() => (states.loadings.init = false));
      }
      
    });
  } catch (e) {
    console.error('[fetchSMS error]', query, params, e);
    throw e; // важно, чтобы ошибка не терялась
  }
  
}

export async function fetchUser() {
  const data = useDataStore();

  // 🔹 НЕ в Telegram
  if (!window.Telegram?.WebApp?.initData) {
    console.warn('[DEV MODE] Telegram WebApp not found');

    data.systemUserValue = {
      id: 1,
      bot_id: 1,
      user: {
        id: 1,
        telegram_id: 1,
        username: 'dev_user',
        first_name: 'Dev',
        last_name: 'User',
        link: 'https://t.me/dev_user',
        type: 'telegram',
      },
      ref: null,
      money: 0,
      status: 1,
      create_at: Date.now(),
      update_at: Date.now(),
      secret_user_key: 'DEV_SECRET',
    };
    const states = useStatesStore();
    states.loadings.init = false;

    return;
  }

  // 🔹 В Telegram — нормальный flow
  const response = await bott({
    url: 'module/bot/check-hash',
    data: {
      bot_id: config.bot_id,
      userData: getHash(),
    },
  });

  if (!response.data?.data) {
    throw new Error('Bot API error');
  }

  data.systemUserValue = response.data.data;
}


async function startApp(id: number, secret: string) {

  if (!window.Telegram?.WebApp?.initData) {
    console.warn('[DEV MODE] startApp skipped');
    return;
  }
  

  return await Promise.all([
    fetchSMS(
      'services',
      {
        public_key: config.public_key,
        country: LocalStorage.getItem('last-country') ?? 'ru',
      },
      true
    ),
    fetchSMS('countries', {
      public_key: config.public_key,
      user_id: id,
    }),
    fetchSMS(
      'orders',
      {
        user_id: id,
        user_secret_key: secret,
        public_key: config.public_key,
      },
      true
    ),
  ]);
}
