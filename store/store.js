import { create } from "zustand";
import fetchAllData from "../api";

const useStore = create((set) => ({
  people_followers: [],
  people_following: [],
  repository: [],
  profile: {},
  isLoading: false,
  error: null,

  fetchData: async (username) => {
    set({ isLoading: true });
    try {
      const { followers, following, repos, profile } =
        await fetchAllData(username);
      set({
        people_followers: followers,
        people_following: following,
        repository: repos,
        profile: profile,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useStore;
