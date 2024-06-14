import { create } from "zustand";
import UserApi from "../UserApi";

const useProfileStore = create((set) => ({
  profile: {},
  isLoading: false,
  error: null,
  fetchData: async () => {
    set({ isLoading: true });
    try {
      const profileData = await UserApi();
      console.log(profileData);
      set({ profile: profileData, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useProfileStore;
