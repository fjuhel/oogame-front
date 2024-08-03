import rootStore from '../stores/RootStore';
import { LocalizeFactoryClass } from './localize-class-factory-singleton';

const createLocalizer = <
  P extends Record<string, Record<keyof P[keyof P], string>>,
>(
  locales: P
) => {
  const localizer = new LocalizeFactoryClass(
    locales,
    rootStore.userStore.language || 'fr_FR',
    !!rootStore.userStore.debugMode
  );
  return localizer.localize.bind(localizer);
};

export default createLocalizer;
