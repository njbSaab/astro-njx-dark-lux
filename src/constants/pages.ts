/**
 * All page copy lives here. One section — one object.
 * Fields ending in *Html are injected via set:html (they contain links/code) — edit carefully.
 */
import { SITE } from './components';

export const HOME = {
  hero: {
    title: 'Roasted in the dark.',
    text: 'Small-batch beans, barista-grade creamers and the hardware behind a serious cup — sealed at peak aroma and shipped the same week.',
    image: { src: '/products/hero.jpg', alt: 'Pour-over brewing on a wooden counter in warm light' },
  },
  // 6 category tiles overlap the hero in a staggered 2-1-2-1 layout
  categoryShelf: {
    images: {
      coffee: '/products/midnight-espresso.jpg',
      creamers: '/products/oat-cloud-creamer.jpg',
      merch: '/products/roast-mug.jpg',
      gear: '/products/precision-grinder.jpg',
      capsules: '/products/espresso-capsules.jpg',
      gifts: '/products/starter-gift-set.jpg',
    } as Record<string, string>,
  },
  // three product sliders, one per featured collection
  shelves: [
    { collection: 'coffee', title: 'Premium Coffee', eyebrow: 'Roasted weekly', allLabel: 'All coffee' },
    { collection: 'gear', title: 'Brewing Devices', eyebrow: 'The hardware', allLabel: 'All devices' },
    { collection: 'creamers', title: 'Premium Creamers', eyebrow: 'Barista grade', allLabel: 'All creamers' },
  ],
  services: [
    {
      icon: 'truck',
      title: 'Free delivery',
      text: 'Flat $4.99 shipping. Free on every order over $50.',
    },
    {
      icon: 'mail',
      title: 'Newsletter',
      text: 'One more cup? First word on new roasts and restocks.',
    },
    {
      icon: 'shield',
      title: 'Secure payment',
      text: 'Card or PayPal — every payment is encrypted end to end.',
    },
    {
      icon: 'chat',
      title: 'Real support',
      text: 'A question? A human roaster answers within a day.',
    },
  ],
  colophon: {
    eyebrow: 'astro-njx-dark-lux · free ecommerce theme for Astro',
    title: 'This roastery is a theme. Take it.',
    text: 'Cart, search, saved-for-later, the quick-view popup, checkout — all of it is astro-njx-dark-lux, a static storefront you can fork today. Point one env var at your Shopify store and these pages rebuild from your real catalog.',
    cta: { label: 'Get the theme on GitHub', href: SITE.repoUrl },
    image: { src: '/products/banner.jpg', alt: 'Portafilter and fresh grounds on a metal counter' },
  },
} as const;

export const COLLECTION = {
  metaSuffix: ` — ${SITE.name}`,
  // full-width banner per collection (owner's Carte Noire pulls, dark & moody)
  banners: {
    coffee: '/images/coffe_grain.avif',
    creamers: '/images/coffe-device2.webp',
    gear: '/images/coffe-device.webp',
    merch: '/images/coffe-cip.avif',
    capsules: '/images/milk-2.webp',
    gifts: '/images/2880x1834_hero_notre_qualite_deskop.jpg',
  } as Record<string, string>,
  allTag: 'All',
  sortLabel: 'Sort',
  sortOptions: [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: low to high' },
    { value: 'price-desc', label: 'Price: high to low' },
    { value: 'title', label: 'Name A–Z' },
  ],
  emptyCollection: 'Nothing here yet — the other shelves are fuller.',
  emptyFilter: 'No products match this filter.',
} as const;

export const PRODUCT = {
  breadcrumbHome: 'Home',
  optionsLegend: 'Options',
  addToCart: 'Add to cart',
  accordion: [
    {
      title: 'Freshness & storage',
      text: 'Roast date on every bag; we ship within the week of roasting. Keep it sealed, dark and away from the fridge — ground coffee is happiest used within three weeks.',
    },
    {
      title: 'Shipping & returns',
      text: 'Flat $4.99, free over $50, shipped in 1–2 days. Unopened products return free for 30 days — reply to your order email and we send a label.',
    },
  ],
  relatedTitle: 'Pairs well with',
  trust: {
    delivery: 'Ships in 1–2 days · Free over $50',
    returns: '30-day returns · Roast date on every bag',
  },
} as const;

export const ABOUT = {
  meta: {
    title: 'About — njX',
    description: 'Who roasts njX: a night-shift roastery obsessed with peak aroma.',
  },
  hero: {
    title: 'We roast when the city sleeps.',
    paragraphs: [
      'njX started with a five-kilo roaster in a rented garage and a habit of working after midnight — the only time the phone stops ringing and you can hear the first crack properly. The habit stuck; the garage grew into a roastery.',
      'We buy from farms we can name, roast in small batches, and seal every bag the same day. When a lot runs out, the coffee changes with the season — that is the point.',
    ],
    image: { src: '/products/hero.jpg', alt: 'The roastery counter at night' },
  },
  numbers: [
    { num: '2019', label: 'first batch roasted' },
    { num: '5 kg', label: 'roaster we still use' },
    { num: '38', label: 'farms we buy from' },
    { num: '0', label: 'bags older than a week' },
  ],
  themeBlock: {
    eyebrow: 'The honest part',
    title: 'This roastery is a demo. The theme is real.',
    textHtml:
      'The garage, the night shifts, the 38 farms — all invented to show <strong class="font-semibold text-ink">astro-njx-dark-lux</strong>, a free dark-luxury ecommerce theme for Astro, working at full speed. Fork it, swap the catalog, and you have a store of your own. An extended Pro version is on the way.',
    cta: { label: 'Get it on GitHub', href: SITE.repoUrl },
    howTitle: 'How the integration works',
    howItemsHtml: [
      '<strong class="font-medium text-ink">Astro 5 renders everything statically.</strong> A Node.js build fetches the catalog once and ships pure HTML — no client framework, fast by default.',
      '<strong class="font-medium text-ink">Two data providers, one switch.</strong> <code class="rounded bg-tile px-1.5 py-0.5 font-mono text-[13px]">COMMERCE_PROVIDER=mock</code> uses the bundled JSON catalog; <code class="rounded bg-tile px-1.5 py-0.5 font-mono text-[13px]">shopify</code> pulls real products over the Shopify Storefront API (GraphQL).',
      "<strong class=\"font-medium text-ink\">Checkout stays on Shopify.</strong> The cart lives in localStorage; at checkout the theme creates a Shopify cart and hands off to their hosted, PCI-compliant checkout.",
      '<strong class="font-medium text-ink">Hosted on Cloudflare Pages.</strong> Static output deploys in seconds and runs comfortably on the free tier.',
    ],
  },
  cta: {
    title: 'Questions about a roast?',
    text: 'Write to us — the person who roasted it will probably answer.',
    button: { label: 'Contact the roastery', href: '/contacts' },
  },
} as const;

export const CONTACTS = {
  meta: {
    title: 'Contacts — njX',
    description: 'Orders, wholesale, brew advice — write to the njX roastery.',
  },
  title: 'Talk to the roastery',
  text: 'Orders, wholesale, or which grind fits your machine — ask. A human answers within a day.',
  cards: {
    email: {
      title: 'Email',
      address: 'hello@njx.demo',
      note: 'Add your order number for the fastest reply.',
    },
    warehouse: {
      title: 'Roastery',
      lines: ['Unit 9, 4 Furnace Lane', 'Rotterdam — visits by appointment'],
    },
    elsewhere: {
      title: 'Elsewhere',
      links: [
        { label: 'GitHub — this theme', href: SITE.repoUrl },
        { label: 'njX UI — the library', href: SITE.authorUrl },
      ],
    },
  },
  form: {
    nameLabel: 'Name',
    namePlaceholder: 'Sam Brewer',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Which roast, which brewer, which grind?',
    submitLabel: 'Send message',
    demoNote: "Demo mode — the form isn't wired to a backend. Point it at your email service or an API route.",
  },
} as const;

export const FAQ_PAGE = {
  meta: {
    title: 'FAQ — njX',
    description: 'Freshness, grind, shipping, returns — answers to the questions the roastery hears most.',
  },
  title: 'Asked often',
  introHtml:
    'Short answers, no legal fog. Missing something? <a href="/contacts" class="text-brand underline underline-offset-2">Write to us.</a>',
  items: [
    {
      q: 'How fresh is the coffee, really?',
      a: 'We roast Monday to Wednesday and ship the same week. The roast date is printed on every bag — if yours arrives older than two weeks, write to us; it should not happen.',
    },
    {
      q: 'Whole bean or ground?',
      a: 'Every coffee ships whole bean by default. Need it ground? Leave a note at checkout with your brewer and we grind to match, free.',
    },
    {
      q: 'How long does shipping take?',
      a: 'Orders leave within 1–2 business days. EU: 2–4 days. Everywhere else: 5–10. Flat $4.99, free over $50, tracked always.',
    },
    {
      q: 'Do the capsules fit my machine?',
      a: 'They are Nespresso Original compatible, aluminium and fully recyclable. Vertuo machines are the one exception — those capsules are a different shape entirely.',
    },
    {
      q: 'Do you do wholesale?',
      a: 'For cafés and offices — yes, from 5 kg a month. Email hello@njx.demo with your volumes and machine setup.',
    },
    {
      q: 'Is this a real roastery?',
      a: 'It is a demo for the astro-njx-dark-lux theme: the products are fictional, but everything else works — cart, quick view, checkout flow, search. Grab the theme on GitHub and make it your real store.',
    },
  ],
} as const;

export const ACCOUNT = {
  meta: {
    title: 'Account — njX',
    description: 'Sign in to your njX account or create a new one.',
  },
  tabs: { login: 'Sign in', register: 'Create account' },
  login: {
    title: 'Welcome back',
    sub: 'Orders, subscriptions and faster checkout.',
    submit: 'Sign in',
    demoNote: 'Demo mode — sign-in is a stub. Connect Shopify Customer Accounts or your own backend here.',
  },
  register: {
    title: 'Join njX',
    sub: 'One account for orders and first word on new roasts.',
    submit: 'Create account',
    demoNote: 'Demo mode — account creation is a stub. Connect Shopify Customer Accounts or your own backend here.',
  },
  fields: {
    nameLabel: 'Name',
    namePlaceholder: 'Sam Brewer',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    passwordLabel: 'Password',
    passwordPlaceholder: '••••••••',
    remember: 'Remember me',
    forgot: 'Forgot password?',
  },
  pageNote: 'Demo page — wire it to Shopify Customer Accounts or your own auth backend.',
} as const;

export const NOT_FOUND = {
  meta: { title: 'Page not found — njX' },
  title: 'Nothing brewing here.',
  text: 'This page moved, sold out, or never existed. The good stuff is one click away.',
  ctaPrimary: { label: 'Back to the roastery', href: '/' },
  ctaSecondary: { label: 'Get coffee instead', href: '/collections/coffee' },
} as const;

export const PRIVACY = {
  meta: {
    title: 'Privacy Policy — njX',
    description: 'How njX handles your data: what we collect, why, and what we never do.',
  },
  title: 'Privacy Policy',
  updated: 'Last updated: September 2026 · Demo content — replace with your own policy.',
  sections: [
    {
      h: 'What we collect',
      p: "Order details (what you bought, where to send it), your email for order updates, and basic analytics about how the store is used. That's the whole list.",
    },
    {
      h: 'What we never do',
      p: "We don't sell your data, we don't run third-party ad trackers, and we don't email you unless it's about an order or you explicitly asked for news of new roasts.",
    },
    {
      h: 'Payments',
      p: 'Card details never touch our servers — checkout is processed by our payment provider. We see the order, not the card.',
    },
    {
      h: 'Your rights',
      p: "Want your data exported or deleted? Email us and it's done within 30 days — usually much faster.",
    },
  ],
} as const;

export const TERMS = {
  meta: {
    title: 'Terms of Service — njX',
    description: 'The short, honest terms for shopping at njX: orders, shipping, returns and refunds.',
  },
  title: 'Terms of Service',
  updated: 'Last updated: September 2026 · Demo content — replace with your own terms.',
  sections: [
    {
      h: 'Orders',
      p: 'An order is confirmed when you get the confirmation email. If a roast sells out after you paid, we refund it the same day and tell you when the next batch lands.',
    },
    {
      h: 'Shipping',
      p: 'We ship within 2 business days. Tracking arrives by email. If a package goes missing, we deal with the carrier — not you.',
    },
    {
      h: 'Returns & refunds',
      p: '30 days for unopened products. Opened coffee is the honest exception — for obvious reasons. Refunds go back to the original payment method.',
    },
    {
      h: 'The fine print',
      p: 'Prices can change, typos happen, and we may update these terms — the date above always tells you when. Questions? The contacts page is one click away.',
    },
  ],
} as const;
