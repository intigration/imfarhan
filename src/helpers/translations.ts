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
  ur: {
    // Page titles
    'pages.home': 'بازیچۂ اطفال ہے دنیا مرے آگے',
    'pages.blog': 'تیرے بارے میں جوب سوچا نہیں تھا ... میں تنہا تھا اگر اتنا نہیں تھا',
    'pages.about': 'زندگی اور کچھ بھی نہیں تیری میری کہانی ہے',
    'pages.contact': 'ڈرامہ',
    'pages.projects': 'میلہ گھومنی',

    // Blog page text
    'blog.sources-menu': 'Sources',
    'blog.sources-all': 'Tout sélectionner',
    'blog.sources-none': 'Tout déselectionner',
    'blog.read-more': ' مزید فیڈز',
    'blog.time-days-ago': 'jours passés',
    'blog.time-years-ago': 'ans passés',
    'blog.post-hover.read': 'Lire',
    'blog.post-hover.from': 'De',
    'blog.search.showing': 'Affichage de {{count}} résultats pour "{{query}}"',
    'blog.search.clear': 'Effacer',
    'blog.results.none': 'اپنی تلاش کی مدت کو وسعت دیں',
    'blog.results.none-1': "اپنی تلاش کی مدت کو وسعت دیں.",
    'blog.results.none-2':`
      'ڈراپ ڈاؤن مینو سے مزید فیڈز منتخب کرنے کی کوشش کریں ، یا اپنی تلاش کی مدت کو وسعت دیں۔
      'بلاگ.غلطی': 'اوہ نہیں، کچھ بہت برا ہوا ہے',`
  },
};

export const supportedLanguages: LanguageMeta[] = [
  {
    name: 'English',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    code: 'en',
    text: translations.en,
  },
  {
    name: 'Urdu',
    flag: '🏳️',
    code: 'ur',
    text: translations.ur,
  },
];

export default translations;
