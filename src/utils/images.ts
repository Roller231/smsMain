import { h } from 'vue';
import { QImg } from 'quasar';
import { findCountryImage, findServiceImage } from 'src/utils/names/find';

const CountryImage = (country?: string) => {
  return h(QImg, {
    class: ' rounded-10 q-list--bordered',
    style: 'height:24px; width:24px',
    src: findCountryImage(country),
  });
};

const ServiceImage = (name?: string, crutch?: boolean) => {
  let link = findServiceImage(name);

  if (name === 'be' && crutch) link = '/megamarket.png';

  return h(QImg, {
    class: ' rounded-10 q-list--bordered',
    style: 'height:24px; width:24px',
    src: link,
  });
};

export { CountryImage, ServiceImage };
