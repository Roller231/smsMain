import { Dialog } from 'quasar';
import { useLang } from './useLang';

export function useDialog(message: string, error?: boolean, codes?: boolean) {
  const lang = useLang();

  const buttons = error
    ? {
        ok: {
          noCaps: true,
          label: 'OK',
          class: 'rounded-10',
          unelevated: true,
          color: 'primary',
        },
      }
    : {
        ok: {
          noCaps: true,
          label: lang.confirm,
          class: 'rounded-10',
          color: 'red',
          unelevated: true,
        },
        cancel: {
          noCaps: true,
          label: lang.cancel,
          class: 'rounded-10',
          color: 'primary',
          unelevated: true,
        },
      };

  return Dialog.create({
    title: codes ? '' : lang.errors.titles.notify,
    message: decodeURI(message),
    class: 'rounded-10',
    style: { whiteSpace: 'pre-wrap' },
    html: true,
    ...buttons,
  });
}
