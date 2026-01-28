declare interface String {
  short(search: string): boolean;
}

declare interface String {
  comma(value?: string): string;
}

declare interface Number {
  comma(value?: string): string;
}

declare interface Array<T> {
  serviceFilter(search: string, price?: boolean): Array<T>;
}

declare interface Array<T> {
  countryFilter(search: string, multi?: boolean, price?: boolean): Array<T>;
}
