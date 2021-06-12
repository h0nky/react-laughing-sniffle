interface IAPIService {
  getApiURL: (query: string, token: string) => string;
  fetchReleases: (query: string) => Promise<IAPIResponse>;
  token: string;
}

type TRelease = {
  [key: string]: string | number;
}

interface IAPIResponse {
  pagination: any;
  results: Array<TRelease>;
}

class APIService implements IAPIService {

  token = "YjPhWqeaySPvOdqqwfyXyCDBvHXhFptXruhtYfYo";

  getApiURL(query: string, token: string): string {
    return `https://api.discogs.com/database/search?q=${query}&token=${token}`;
  };

  async fetchReleases(query: string): Promise<IAPIResponse> {
    const response = await fetch(this.getApiURL(query, this.token), {
      method: "GET",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  }
}

export default new APIService();