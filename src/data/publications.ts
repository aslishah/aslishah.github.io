// Your publications, one object per item. Edit this file to add or correct
// entries — the Publications page renders it automatically, grouped by `type`
// and sorted by year (newest first).

export type PublicationType =
  | 'book'
  | 'article'
  | 'thesis'
  | 'dataset'
  | 'essay';

export interface Publication {
  type: PublicationType;
  title: string;
  authors?: string; // omit if sole author
  venue: string;
  year: number | 'forthcoming';
  url?: string;
  note?: string;
}

export const publications: Publication[] = [
  {
    type: 'book',
    title:
      'Memories, Books, Communities: Making and Re-making the Past in the Arabic Textual Tradition',
    authors:
      'M. Barber, L. Nigst, A. Qurboniev, S. B. Savant, G. Van Den Bossche, and P. Verkinderen',
    venue: 'Edinburgh University Press',
    year: 'forthcoming',
  },
  {
    type: 'article',
    title:
      'The Writing of Munāẓarāt in Times of Turmoil: Disputations in Fatimid Ifrīqiya',
    venue:
      'The Medieval Globe 5.2 — Medieval Sicily, al-Andalus, and the Maghrib: Writing in Times of Turmoil, ed. N. Carpentieri and C. Symes (Arc Humanities Press)',
    year: 2020,
    url: 'https://doi.org/10.1515/9781641893862-005',
  },
  {
    type: 'thesis',
    title:
      'Traditions of Learning in Fāṭimid Ifrīqiya (296–362/909–973): Networks, Practices, and Institutions',
    venue: 'PhD thesis, University of Cambridge',
    year: 2019,
    url: 'https://doi.org/10.17863/CAM.46654',
  },
  {
    type: 'dataset',
    title: 'DigIT 1.0 — Digital Ismaili Texts: A Corpus of Arabic and Persian Ismaili Texts',
    venue: 'AlamutLibrary, GitHub',
    year: 2024,
    url: 'https://github.com/AlamutLibrary',
  },
  {
    type: 'essay',
    title:
      'First Five Hundred Years of the Arabic Book: The Native Origin of the Authors',
    venue: 'KITAB Project blog',
    year: 2022,
    url: 'https://kitab-project.org/b/',
  },
  {
    type: 'essay',
    title:
      'Between Manuscripts and Digital Texts: Commentaries on Hadith Raʾs al-Jālūt',
    venue: 'KITAB Project blog',
    year: 2021,
    url: 'https://kitab-project.org/Between-Manuscripts-and-Digital-Texts-Commentaries-on-Hadith-Ra%CA%BEs-al-Jalut/',
  },
  {
    type: 'essay',
    title:
      'Algorithmic Reading of Shiʿi Hadith Collections: Direct Borrowing and Common Sources',
    venue: 'KITAB Project blog',
    year: 2021,
    url: 'https://kitab-project.org/Algorithmic-Reading-of-Shi%CA%BFi-Hadith-Collections-Direct-Borrowing-and-Common-Sources/',
  },
];

export const typeLabels: Record<PublicationType, string> = {
  book: 'Books',
  article: 'Articles & Chapters',
  thesis: 'Thesis',
  dataset: 'Datasets & Corpora',
  essay: 'Essays & Blog Posts',
};
