import type { Translations, LanguageMeta } from '$src/types/Language';

const translations: Translations = {
  en: {
    // Page titles
    'pages.home': 'Home',
    'pages.blog': 'Blog',
    'pages.about': 'About',
    'pages.contact': 'Contact',
    'pages.projects': 'Projects',

    // Blog page text
    'blog.sources-menu': 'Sources',
    'blog.sources-all': 'Select All',
    'blog.sources-none': 'Clear Checked',
    'blog.read-more': 'Read more',
    'blog.time-days-ago': 'days ago',
    'blog.time-years-ago': 'years ago',
    'blog.post-hover.read': 'Read',
    'blog.post-hover.from': 'From',
    'blog.search.showing': 'Showing {{count}} results for "{{query}}"',
    'blog.search.clear': 'Clear',
    'blog.results.none': 'No Results',
    'blog.results.none-1': 'There were no results returned.',
    'blog.results.none-2':
      'Try selecting more feeds in the dropdown, or broadening your search term',
    'blog.error': 'Oh no, something real bad happened',
  },
  fr: {
    // Page titles
    'pages.home': 'Accueil',
    'pages.blog': 'Blog',
    'pages.about': 'À propos',
    'pages.contact': 'Contact',
    'pages.projects': 'Projets',

    // Blog page text
    'blog.sources-menu': 'Sources',
    'blog.sources-all': 'Tout sélectionner',
    'blog.sources-none': 'Tout déselectionner',
    'blog.read-more': 'Lire la suite',
    'blog.time-days-ago': 'jours passés',
    'blog.time-years-ago': 'ans passés',
    'blog.post-hover.read': 'Lire',
    'blog.post-hover.from': 'De',
    'blog.search.showing': 'Affichage de {{count}} résultats pour "{{query}}"',
    'blog.search.clear': 'Effacer',
    'blog.results.none': 'Aucun résultat',
    'blog.results.none-1': "Aucun résultat n'a été trouvé.",
    'blog.results.none-2':`
      'ڈراپ ڈاؤن مینو سے مزید فیڈز منتخب کرنے کی کوشش کریں ، یا اپنی تلاش کی مدت کو وسعت دیں۔
      'بلاگ.غلطی': 'اوہ نہیں، کچھ بہت برا ہوا ہے',`
  },
};

export const supportedLanguages: LanguageMeta[] = [
  {
    name: 'English',
    flag: '🇵🇰',
    code: 'en',
    text: translations.en,
  },
  {
    name: 'Urdu',
    flag: '🇵🇰',
    code: 'ur',
    text: translations.ur,
  },
];

export default translations;
