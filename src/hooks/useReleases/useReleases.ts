import { useCallback } from "react";
import { TReleases } from "../../types";
import APIService from "../../api/APIService";


const useReleases = (updateState = (state: any) => {}): TReleases => {

  const fetchData = useCallback(async (searchQuery) => {
    let response;
    try {
      response = await APIService.fetchReleases(searchQuery);
      updateState({ ...response, error: false });
    } catch (e) {
      updateState({ pagination: null, results: null, error: true });
    }
  }, []);

  return { fetchData };
}

export default useReleases;