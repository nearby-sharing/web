import slugify from 'limax';

import { SITE } from '~/config.mjs';
import { trim } from '~/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));
const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const BASE_PATHNAME = SITE.basePathname;

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');

/** */
export const getCanonical = (path = ''): string | URL => {
  const url = String(new URL(path, SITE.origin));
  if (SITE.trailingSlash == false && path && url.endsWith('/')) {
    return url.slice(0, -1)
  }
  else if (SITE.trailingSlash == true && path && !url.endsWith('/')) {
    return url + '/';
  }
  return url;
}

/** */
export const getPermalink = (slug = ''): string => {
  let permalink = createPath(slug);

  return definitivePermalink(permalink);
};

/** */
export const getHomePermalink = (): string => getPermalink('/');

/** */
export const getAsset = (path: string): string =>
  '/' +
  [BASE_PATHNAME, path]
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');

/** */
const definitivePermalink = (permalink: string): string => createPath(BASE_PATHNAME, permalink);
