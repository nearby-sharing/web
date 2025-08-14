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
          href: '/setup',
        },
        {
          text: 'Download',
          href: '/download',
        },
        {
          text: 'FAQ',
          href: '/faq',
        },
      ]
    },
    {
      text: 'Community',
      href: '/community',
    },
    {
      text: 'Technical',
      href: '/technical',
      links: [
        {
          text: 'Technical',
          href: '/technical'
        },
        {
          text: "Logging",
          href: "/technical/logging"
        }
      ]
    }
  ],
  actions: [
    { type: 'ghost', text: 'Sponsor', href: '/sponsor' },
    { type: 'button', text: 'Download', href: '/download' },
  ]
};

export const footerData = {
  secondaryLinks: [
    { text: 'Privacy Policy', href: '/privacy' },
  ],
  socialLinks: [
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/nearby-sharing' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: 'https://mastodon.social/@shortdev/tagged/nearshare' },
    { ariaLabel: 'Google Play', icon: 'tabler:brand-google-play', href: 'https://play.google.com/store/apps/details?id=de.shortdev.nearby_sharing_windows' }
  ],
  footNote: `
    Made with <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/onwidget/astrowind">AstroWind</a>.
  `,
};
