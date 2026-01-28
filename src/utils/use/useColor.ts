import config from 'src/config';
import { palette } from 'stores/content/colors';
import { colors, LocalStorage, setCssVar } from 'quasar';

import lighten = colors.lighten;
import getPaletteColor = colors.getPaletteColor;

export function useColor(id: number) {
  const color = palette[id];

  setCssVar('primary', color);

  setCssVar(
    'primary',
    lighten(getPaletteColor('primary'), config.dark ? 30 : 0)
  );

  LocalStorage.set('theme', id);
}

export function useLocalColor() {
  const color = LocalStorage.getItem('theme') ?? 1;

  useColor(<number>color);
}
