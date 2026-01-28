import { useDataStore } from 'stores/data/dataStore';

import ruScheme from 'src/utils/lang/ru';
import enScheme from 'src/utils/lang/en';

export function useLang() {
  const data = useDataStore();

  return data.user.language === 'ru' ? ruScheme : enScheme;
}
