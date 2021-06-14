import { IAPIService, IAPIResponse } from "../types";

class APIService implements IAPIService {
  
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