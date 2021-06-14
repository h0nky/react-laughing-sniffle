import { IAPIService, IAPIResponse } from "../types";

class APIService implements IAPIService {

  private token = "YjPhWqeaySPvOdqqwfyXyCDBvHXhFptXruhtYfYo";

  getApiURL(query: string, token: string): string {
    return `https://api.discogs.com/database/search?artist=${query}&per_page=10&page=1&token=${token}`;
  };

  async fetchReleases(query: string): Promise<IAPIResponse> {
    let response;
    try {
      response = await fetch(query, {
        method: "GET",
        cache: "no-cache",
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      response = error;
    }

    return response?.json();
  }
}

export default new APIService();