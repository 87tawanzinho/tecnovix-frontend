export interface BookVolumeInfo {
  title: string;
  authors: string[];
  publishedDate: number;
  imageLinks: {
    thumbnail: string;
  };
}

export interface ChooseBook {
  title: string;
  image: string;
  publishedDate: number;
  authors: string[];
}

export interface Book {
  id: string;
  volumeInfo: BookVolumeInfo;
}

export interface Cep {
  localidade?: string;
  bairro?: string;
  uf?: string;
}
