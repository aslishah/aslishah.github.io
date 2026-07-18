// Your publications, one object per item. Edit this file to add or correct
// entries — the Publications page renders it automatically, grouped by `type`
// and sorted by year (newest first).

export type PublicationType =
  | 'book'
  | 'chapter'
  | 'article'
  | 'encyclopedia'
  | 'thesis'
  | 'dataset'
  | 'translation'
  | 'essay';

export interface Publication {
  type: PublicationType;
  title: string;
  authors?: string; // omit if sole author
  venue: string;
  year: number | 'forthcoming';
  url?: string;
  note?: string;
  // For essays featured on the Blog page: a short teaser and a thumbnail
  // (path under /public).
  excerpt?: string;
  image?: string;
}

export const publications: Publication[] = [
  // --- Books ---------------------------------------------------------------
  {
    type: 'book',
    title:
      'The Making of the Arabic Book, Volume 2: Writerly Practices, Memory and Communities',
    authors:
      'Matthew Barber, Lorenz Nigst, Aslisho Qurboniev, Sarah Savant, Peter Verkinderen, and Gowaart Van Den Bossche',
    venue: 'Edinburgh: Edinburgh University Press',
    year: 2026,
  },

  // --- Book chapters ---------------------------------------------------------
  {
    type: 'chapter',
    title:
      'A Scholarly Copyist: Early Ilkhanid Intellectual Networks through the Prism of Two Colophons, Part 2',
    authors: 'A. Qurboniev and Gowaart Van Den Bossche',
    venue:
      'Literary Snippets: A Colophon Reader, ed. Sabine Schmidtke and George A. Kiraz, pp. 181–189. Gorgias Press',
    year: 2024,
    url: 'https://doi.org/10.31826/9781463244019-020',
  },
  {
    type: 'chapter',
    title:
      'A Scholarly Copyist: Early Ilkhanid Intellectual Networks through the Prism of Two Colophons',
    authors: 'A. Qurboniev and Gowaart Van Den Bossche',
    venue:
      'Literary Snippets: Colophons Across Space and Time, ed. Sabine Schmidtke and George A. Kiraz, pp. 431–455. Gorgias Press',
    year: 2023,
  },
  {
    type: 'chapter',
    title: 'Studying Hadith Commentaries in the Digital Age',
    authors: 'M. Bednarkiewicz, A. Qurboniev, and G. Van Den Bossche',
    venue:
      'Hadith Commentaries: Continuity and Change, ed. Joel Blecher et al., pp. 263–280. Edinburgh: Edinburgh University Press',
    year: 2023,
    url: 'https://doi.org/10.1515/9781474461061-014',
  },
  {
    type: 'chapter',
    title: 'Project Identity',
    venue:
      'Identity, History and Trans-Nationality in Central Asia: The Mountain Communities of Pamir, ed. D. Dagiev and C. Faucher, pp. 227–248. London & New York: Routledge',
    year: 2018,
    url: 'https://doi.org/10.4324/9781351124263',
  },
  {
    type: 'chapter',
    title: 'A Short Historical Introduction to Tajikistan',
    venue:
      'Trekking in Tajikistan: The Northern Ranges, Pamirs and Afghanistan’s Wakhan Corridor, by Jan Bakker and Christine Oriol, pp. 66–69. Milnthorpe: Cicerone Press',
    year: 2018,
  },

  // --- Journal articles --------------------------------------------------------
  {
    type: 'article',
    title:
      'The Writing of Munāẓarāt in Times of Turmoil: Disputations in Fatimid Ifrīqiya',
    venue: 'The Medieval Globe 5.2, pp. 59–86',
    year: 2020,
    url: 'https://doi.org/10.1515/9781641893862-005',
  },

  // --- Encyclopedia entries ------------------------------------------------------
  {
    type: 'encyclopedia',
    title: 'al-Shahrastani (ca. 1086–1153)',
    venue: 'Routledge Resources Online — Medieval Studies. Routledge',
    year: 2025,
    url: 'https://doi.org/10.4324/9780415791182-RMEO495-1',
  },
  {
    type: 'encyclopedia',
    title: 'ʿAbd Allah al-Mahdi (874–934)',
    venue: 'Routledge Resources Online — Medieval Studies. Routledge',
    year: 2023,
    url: 'https://doi.org/10.4324/9780415791182-RMEO309-1',
  },
  {
    type: 'encyclopedia',
    title: 'al-Muʿizz li-Din Allah (931–975)',
    venue: 'Routledge Resources Online — Medieval Studies. Routledge',
    year: 2023,
    url: 'https://doi.org/10.4324/9780415791182-RMEO308-1',
  },

  // --- Thesis ---------------------------------------------------------------
  {
    type: 'thesis',
    title:
      'Traditions of Learning in Fāṭimid Ifrīqiya (296–362/909–973): Networks, Practices, and Institutions',
    venue: 'PhD thesis, University of Cambridge',
    year: 2019,
    url: 'https://www.repository.cam.ac.uk/items/89caf9c3-e782-4d7a-a9a3-0d9dfd9ac4f1',
  },

  // --- Datasets & corpora -----------------------------------------------------
  {
    type: 'dataset',
    title: 'DigIT 2.0 — Digital Ismaili Texts: A Corpus of Arabic and Persian Ismaili Texts',
    venue: 'AlamutLibrary, GitHub',
    year: 2024,
    url: 'https://alamutlibrary.github.io/DigIT.2.0/',
  },

  // --- Translations -------------------------------------------------------------
  {
    type: 'translation',
    title: 'M. A. Salakhetdinova, ‘On Historical Toponymy of Balkh Province’',
    venue:
      'Translated from Russian. Originally in Palestinskii Sbornik 21(84), 1970, pp. 222–228; in Early Islamic Balkh: History, Landscape and Material Culture, ed. Robert Hoyland et al.',
    year: 'forthcoming',
  },

  // --- Essays & blog posts ------------------------------------------------------
  {
    type: 'essay',
    title:
      'First Five Hundred Years of the Arabic Book: The Native Origin of the Authors',
    venue: 'KITAB Project Research Blog',
    year: 2021,
    url: 'https://kitab-project.org/first-five-hundred-years',
    excerpt:
      'What do we know about the authors of the earliest Arabic books in terms of their native origins and linguistic and cultural backgrounds? Were the majority of them Arabic-speaking Muslims from imperial capitals, or non-Arab converts or even non-Muslims?',
    image: '/images/threemen.png',
  },
  {
    type: 'essay',
    title:
      'Between Manuscripts and Digital Texts: Commentaries on Hadith Raʾs al-Jālūt',
    venue: 'KITAB Project Research Blog',
    year: 2020,
    url: 'https://kitab-project.org/Between-Manuscripts-and-Digital-Texts-Commentaries-on-Hadith-Ra%CA%BEs-al-Jalut/',
    excerpt:
      'For us as digital historians and corpus curators, faced with the complex history of reception and transmission as well as the distinct approach to learning and authorship, attributing authors to premodern Islamicate texts and representing this complexity within our corpus metadata is often a challenging task.',
    image: '/images/fatimids.jpg',
  },
  {
    type: 'essay',
    title:
      'Algorithmic Reading of Shiʿi Hadith Collections: Direct Borrowing and Common Sources',
    venue: 'KITAB Project Research Blog',
    year: 2020,
    url: 'https://kitab-project.org/Algorithmic-Reading-of-Shi%CA%BFi-Hadith-Collections-Direct-Borrowing-and-Common-Sources/',
    excerpt:
      'It is not accidental that a large number of books in the OpenITI corpus belong to one important genre, prophetic Hadith — the sayings of the Prophet Muhammad and accounts of his practice. As a repository of the prophetic tradition (sunna), they are considered an authoritative source of law and moral guidance in Islam.',
    image: '/images/imagenetwork.png',
  },
];

export const typeLabels: Record<PublicationType, string> = {
  book: 'Books',
  chapter: 'Book Chapters',
  article: 'Journal Articles',
  encyclopedia: 'Encyclopedia Entries',
  thesis: 'Thesis',
  dataset: 'Datasets & Corpora',
  translation: 'Translations',
  essay: 'Essays & Blog Posts',
};
