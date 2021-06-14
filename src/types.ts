import { ChangeEvent } from "react";

export type TRelease = {
  barcode: any;
  catno: string;
  community: {
    want: number,
    have: number
  };
  country: "UK" | string;
  cover_image: string;
  format: ("Vinyl" | "LP" | "Album")[];
  genre: ("Rock" | string)[];
  id: number;
  label: string[];
  master_id: number;
  master_url: string;
  resource_url: string;
  style: string[];
  thumb: string;
  title: string;
  type: string;
  uri: string;
  user_data: {
    in_wantlist: boolean,
    in_collection: boolean,
  };
  year: string;
};

export type TPages = {
  items: number,
  page: number,
  pages: number,
  per_page: number,
  urls: {
    last: string,
    next: string,
  }
};

export interface IState {
  pagination: TPages | null,
  results: TRelease[] | null,
  error: boolean,
};

export type TReleases = {
  fetchData: (searchValue: string) => Promise<void>;
}

export interface IAPIResponse {
  pagination: TPages | null;
  results: Array<TRelease>;
};

export interface IAPIService {
  fetchReleases: (query: string) => Promise<IAPIResponse>;
};

export interface IReleasesListProps {
  data: Array<TRelease>;
};

export interface ISearchBoxProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
