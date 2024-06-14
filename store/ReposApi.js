import { create } from "zustand";
import RepositoryApi from "../RepositoryApi";
const useRepoStore = create((set) => ({
  repository: [],
  error: null,
  isLoading: false,
  fetchRepos: async () => {
    set({ isLoading: true });
    try {
      const reposData = await RepositoryApi();
      console.log(reposData);
      set({ repository: reposData, isLoading: false });
    } catch (error) {
      set({ isLoading: false, error: error.message });
    }
  },
}));

export default useRepoStore;
