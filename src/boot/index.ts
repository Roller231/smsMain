import config from 'src/config';

import { boot } from 'quasar/wrappers';
import { createPinia } from 'pinia';

import { Dark } from 'quasar';

import { fetchSMS, fetchUser } from 'boot/queries';
import { useLocalColor } from 'src/utils/use/useColor';

export default boot(({ app }) => {
  console.log('[ இ௰இ ]');

  const pinia = createPinia();
  app.use(pinia);

  Dark.set(config.dark);

  useLocalColor();

  window.Telegram.WebApp.enableClosingConfirmation();
  window.Telegram.WebApp.expand();

  fetchSMS('getSettings', { public_key: config.public_key }).then();

  fetchUser().then();
});
