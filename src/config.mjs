import defaultImage from './assets/images/hero.svg';

const CONFIG = {
  name: 'NearShare',

  origin: 'https://nearshare.shortdev.de/',
  basePathname: '/',
  trailingSlash: false,

  title: 'NearShare — Free and open source file sharing for Windows',
  description:
    'Free and open source implementation of the windows built-in nearby sharing feature (Project Rome).',
  defaultImage: defaultImage,

  defaultTheme: 'system', // Values: "system" | "light" | "dark" | "light:only" | "dark:only"

  language: 'en',
  textDirection: 'ltr',

  dateFormatter: new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })
};

export const SITE = { ...CONFIG, blog: undefined };
export const DATE_FORMATTER = CONFIG.dateFormatter;
