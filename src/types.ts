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

export interface IAPIResponse {
  pagination: any;
  results: Array<TRelease>;
};

export interface IAPIService {
  getApiURL: (query: string, token: string) => string;
  fetchReleases: (query: string) => Promise<IAPIResponse>;
};

export interface IMainPageState {
  pagination: any;
  results: Array<TRelease>;
};

export interface IReleasesListProps {
  data: Array<TRelease>;
  pages: any;
}

export interface ISearchBoxProps {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};