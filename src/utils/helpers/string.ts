export function getHash(): string {
  const url = new URL(window.location.href);

  url.searchParams.delete('service');

  const index =
    url.search.indexOf('&tgWebAppPlatform') === -1
      ? url.search.length
      : url.search.indexOf('&tgWebAppPlatform');

  const currentString = url.search.slice(1, index);

  return window.Telegram.WebApp.initData === ''
    ? currentString
    : window.Telegram.WebApp.initData;
}

export function getQueryParam(name: string, str?: string) {
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(str ?? window.location.href);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
