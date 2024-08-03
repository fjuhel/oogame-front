export enum LanguagesEnum {
  fr_FR = 'Français',
  en_GB = 'English',
}
export type PossibleLanguages = keyof typeof LanguagesEnum;
