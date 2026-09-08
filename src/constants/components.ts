/**
 * All copy for the theme "shell": header, footer, drawers, search, modal, product card.
 * Change the copy here — component markup stays untouched.
 */

export const SITE = {
  name: 'njX',
  defaultTitle: 'njX — coffee roasted in the dark',
  defaultDescription:
    'Demo storefront for astro-njx-dark-lux: a dark-luxury coffee theme for Astro. Mock data out of the box, Shopify with two env vars.',
  logoDark: '/logo/njx-shop-dark.png', // dark mark — shown on the light (latte) theme
  logoLight: '/logo/njx-shop-light.png', // light mark — shown on the dark theme
  repoUrl: 'https://github.com/njbSaab/astro-njx-dark-lux',
  authorUrl: 'https://njxui.dev',
} as const;

export const ANNOUNCEMENT = {
  text: 'Free shipping over $50 · −10% on your first order with code',
  promoCode: 'NJX10',
  copiedLabel: 'Copied ✓',
  linkLabel: 'If you star the theme, I’ll be happy ♡',
  linkHref: SITE.repoUrl,
} as const;

export const HEADER = {
  navLinks: [
    { label: 'Coffee', href: '/collections/coffee' },
    { label: 'Creamers', href: '/collections/creamers' },
    { label: 'Devices', href: '/collections/gear' },
    { label: 'Merch', href: '/collections/merch' },
  ],
  aria: {
    search: 'Search',
    account: 'Account',
    theme: 'Toggle theme',
    cart: 'Open cart',
    menu: 'Open menu',
  },
} as const;

export const SEARCH = {
  placeholder: 'Search the roastery…',
  escHint: 'Esc',
  emptyText: 'Nothing found — try “espresso”, “grinder” or “gift”.',
} as const;

export const FOOTER = {
  tagline:
    'Coffee roasted past midnight. A demo store for the astro-njx-dark-lux theme — every product here is fictional, the checkout is real.',
  columns: [
    {
      title: 'Shop',
      links: [
        { label: 'Premium coffee', href: '/collections/coffee' },
        { label: 'Creamers', href: '/collections/creamers' },
        { label: 'Brew gear', href: '/collections/gear' },
        { label: 'Merch & objects', href: '/collections/merch' },
        { label: 'Capsules', href: '/collections/capsules' },
        { label: 'Gift sets', href: '/collections/gifts' },
      ],
    },
    {
      title: 'Roastery',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contacts', href: '/contacts' },
        { label: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Theme',
      links: [
        { label: 'GitHub', href: SITE.repoUrl },
        { label: 'Made by njX', href: SITE.authorUrl },
        { label: 'Built with Astro', href: 'https://astro.build' },
      ],
    },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
} as const;

export const THANKS_MODAL = {
  emoji: '☕️',
  title: 'Thanks — the kettle is on!',
  text: 'This is a demo store, so nothing was charged. If the theme feels right, a star on GitHub would make my day ♡',
  starLabel: '⭐️ Star on GitHub',
  starHref: SITE.repoUrl,
  keepLabel: 'Keep browsing',
  madeByLabel: 'njX UI',
  madeByHref: SITE.authorUrl,
} as const;

export const CART = {
  ariaDrawer: 'Shopping cart',
  clearLabel: 'Clear all',
  ariaClear: 'Clear cart',
  ariaClose: 'Close cart',
  emptyLine1: 'Your cart is empty.',
  emptyLine2: 'Shipping is on us over $50.',
  subtotalLabel: 'Subtotal',
  shippingNote: 'Shipping and taxes calculated at checkout.',
  checkoutLabel: 'Checkout',
  checkoutPreparing: 'Preparing checkout…',
  checkoutFailedPrefix: 'Checkout failed: ',
  savedTitle: 'Saved for later',
  savedMove: 'Move to cart',
  savedRemoveAria: (title: string) => `Remove ${title} from saved`,
} as const;

export const NAV_DRAWER = {
  ariaDrawer: 'Site navigation',
  ariaClose: 'Close menu',
  home: { label: 'Home', href: '/' },
  collections: [
    { label: 'Premium coffee', href: '/collections/coffee' },
    { label: 'Creamers', href: '/collections/creamers' },
    { label: 'Brew gear', href: '/collections/gear' },
    { label: 'Merch & objects', href: '/collections/merch' },
    { label: 'Capsules', href: '/collections/capsules' },
    { label: 'Gift sets', href: '/collections/gifts' },
  ],
  pages: [
    { label: 'About', href: '/about' },
    { label: 'Contacts', href: '/contacts' },
    { label: 'FAQ', href: '/faq' },
  ],
  footer: {
    builtWithLabel: 'Built with',
    libLabel: 'njX UI',
    libHref: SITE.authorUrl,
    starLabel: '⭐ GitHub',
    starHref: SITE.repoUrl,
  },
} as const;

export const PRODUCT_CARD = {
  saleBadge: 'Sale',
  addToCart: 'Add to cart',
  goLabel: 'View ›',
  ariaFav: (title: string) => `Save ${title} for later`,
  ariaAdd: (title: string) => `Add ${title} to cart`,
} as const;
