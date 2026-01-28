import axios from 'axios';
import config from 'src/config';

import { useStatesStore } from 'stores/states/statesStore';
import { useLang } from 'src/utils/use/useLang';
import { useDialog } from 'src/utils/use/useDialog';
import { LoadingNames } from 'stores/states/models';

/**
 * -----------------------
 * SMS (старый backend)
 * -----------------------
 */
const sms = axios.create({
  baseURL: config.domain,
  method: 'get',
});

sms.interceptors.request.use((config) => {
  const states = useStatesStore();
  states.load(<LoadingNames>config.url ?? '', true);
  return config;
});

sms.interceptors.response.use(
  (response) => {
    const states = useStatesStore();
    const lang = useLang();

    states.load(<LoadingNames>response.config.url ?? '');

    // Старый API ожидает result === true
    if (response.data?.result === true) {
      return response;
    }

    const message =
      lang.order_status_text?.[response.data?.message] ??
      response.data?.message ??
      lang.errors.undefined_message;

    useDialog(message, true);
    return Promise.reject(new Error(message));
  },
  (error) => {
    const states = useStatesStore();
    const lang = useLang();

    states.load(error.config?.url ?? '', true);
    useDialog(lang.errors.connection, true);

    return Promise.reject(error);
  }
);

/**
 * -----------------------
 * BOT API
 * -----------------------
 */
const bott = axios.create({
  baseURL: config.domain_bott,
  method: 'post',
});

bott.interceptors.request.use((config) => {
  const states = useStatesStore();
  states.load(<LoadingNames>config.url ?? '', true);
  return config;
});

bott.interceptors.response.use(
  (response) => {
    const states = useStatesStore();
    states.load(<LoadingNames>response.config.url ?? '');

    // ❗ Bot API НЕ ИМЕЕТ result === true
    // Просто возвращаем ответ как есть
    console.log('[BOT RESPONSE]', response.data);

    return response;
  },
  (error) => {
    const lang = useLang();
    console.error('[BOT ERROR]', error);

    useDialog(lang.errors.connection, true);
    return Promise.reject(error);
  }
);

export { sms, bott };
