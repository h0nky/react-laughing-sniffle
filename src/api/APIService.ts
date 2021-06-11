interface IAPIService {
  URL: string;
  fetchReleases: () => void;
}

class APIService implements IAPIService {

  token = "YjPhWqeaySPvOdqqwfyXyCDBvHXhFptXruhtYfYo";
  URL = `https://api.discogs.com/database/search?q=Nirvana&token=${this.token}`;

  async fetchReleases() {
    const response = await fetch(this.URL, {
      method: "GET",
      cache: "no-cache",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  }
}

export default new APIService();