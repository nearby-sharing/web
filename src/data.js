export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Get started',
      links: [
        {
          text: 'Setup',
          href: '/docs/setup',
        },
        {
          text: 'Download',
          href: '/docs/download',
        },
        {
          text: 'FAQ',
          href: '/docs/faq',
        },
      ]
    },
    {
      text: 'Community',
      href: '/community',
    },
    {
      text: 'Protocol',
      href: '/protocol',
    }
  ],
  actions: [
    { type: 'ghost', text: 'Sponsor', href: '/sponsor' },
    { type: 'button', text: 'Download', href: '/docs/download' },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nearby-sharing' },
  ],
  footNote: `
    Made with <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind">AstroWind</a>.
  `,
};
