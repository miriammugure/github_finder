import { create } from "zustand";
import FollowersApi from "../FollowersApi";

const useFollowersStore = create((set) => ({
  people_followers: [],
  isLoading: false,
  error: null,
  fetchFollowers: async () => {
    set({ isLoading: true });
    try {
      const followersData = await FollowersApi();
      // console.log("Fetched followers data:", followersData);
      set({ people_followers: followersData, isLoading: false });
    } catch (error) {
      // console.error("Error fetching followers:", error);
      set({ error: error.message, isLoading: false });
    }
  },
}));
export default useFollowersStore;
