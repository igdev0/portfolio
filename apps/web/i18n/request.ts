import {getRequestConfig} from 'next-intl/server';
import {Formats} from 'next-intl';

export const formats = {
  dateTime: {
    short: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  number: {
    precise: {
      maximumFractionDigits: 5
    }
  },
  list: {
    enumeration: {
      style: 'long',
      type: 'conjunction'
    }
  },
  displayName: {
    region: {
      type: 'region'
    }
  }
} satisfies Formats;

export default getRequestConfig(async () => {
  // Static for now, we'll change this later
  const locale = 'en';

  return {
    locale,
    messages: (await import(`../content/${locale}.json`)).default
  };
});