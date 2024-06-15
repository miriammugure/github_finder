import { create } from "zustand";

const useFollowingStore = create((set) => ({
  people_following: [],
  isLoading: false,
  error: null,
  fetchFollowing: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch(
        "https://api.github.com/users/miriammugure/following",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      set({ people_following: data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useFollowingStore;
