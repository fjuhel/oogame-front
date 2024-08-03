import type { PossibleLanguages } from './languages';

const merge2Locales = <
  T extends Record<PossibleLanguages, Record<keyof T[keyof T], string>>,
  S extends Record<PossibleLanguages, Record<keyof S[keyof S], string>>,
>(
  t: T,
  s: S
) => {
  const mixedLocales = (Object.keys(t) as Array<PossibleLanguages>).reduce(
    (newLocales, language) => {
      newLocales[language] = Object.assign(s[language], t[language]);
      return newLocales;
    },
    {} as Record<PossibleLanguages, T[`fr_FR`] & S[`fr_FR`]>
  );
  return mixedLocales;
};
type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;
const mergeLocales = <
  T extends Record<PossibleLanguages, Record<keyof T[keyof T], string>>,
>(
  locales: Array<T>
) => {
  let mixedLocales = locales[0] as UnionToIntersection<T>;
  let localeKey = 1;
  while (localeKey < locales.length) {
    mixedLocales = merge2Locales(
      mixedLocales as T,
      locales[localeKey]
    ) as UnionToIntersection<T>;
    localeKey += 1;
  }
  return mixedLocales;
};
export default mergeLocales;
