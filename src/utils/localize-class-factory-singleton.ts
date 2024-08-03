import { IntlMessageFormat } from 'intl-messageformat';
/* .js there to be imported in mjml */
import type { PossibleLanguages } from './languages.js';

export class LocalizeFactoryClass<
  P extends Record<string, Record<keyof P[keyof P], string>>,
> {
  public constructor(
    private locales: P,
    private language: PossibleLanguages,
    private debugMode: boolean
  ) {
    this.locales = locales;
    this.language = language;
    this.debugMode = debugMode;
  }

  public localize(
    key: keyof P[keyof P],
    args?: Record<string, string | number>
  ) {
    return this.localizer()(key, args);
  }

  private localizer() {
    if (this.language) {
      const locale = this.locales[this.language];
      return (s: keyof P[keyof P], args?: Record<string, string | number>) => {
        if (this.debugMode) {
          return s.toString();
        }
        if (locale[s] || locale[s] === '') {
          const translatedMessage: IntlMessageFormat = new IntlMessageFormat(
            locale[s]
          );
          return translatedMessage.format(args) as string;
        }
        console.warn(new Error(`Unknown locale key ${s.toString()}`));
        return '';
      };
    }
    return () => '';
  }
}
