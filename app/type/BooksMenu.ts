export interface BookVolumeInfo {
  title: string;
  authors: string[];
  publishedDate: number;
  imageLinks: {
    thumbnail: string;
  };
  description: string;
  language: string;
}

export interface ChooseBook {
  id: string;
  title: string;
  image: string;
  publishedDate: number;
  language: string;
  description: string;
  country: string;
  authors: string[];
}

export interface Book {
  id: string;
  volumeInfo: BookVolumeInfo;

  saleInfo: {
    country: string;
  };
}

export interface Cep {
  localidade?: string;
  bairro?: string;
  uf?: string;
}
