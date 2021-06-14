// API config for default fetch request
export const getApiURL = (query: string): string => `https://api.discogs.com/database/search?artist=${query}&per_page=10&page=1&token=YjPhWqeaySPvOdqqwfyXyCDBvHXhFptXruhtYfYo`;
