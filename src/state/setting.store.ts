import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface SettingStore {
  mode: string;
  toggleMode: () => void;
}

// const getSavedMode = () => {
//   console.log(localStorage.getItem('setting'));
//   const setting = localStorage.getItem('setting');
//   return setting?.state?.mode
// };

export const useSettingStore = create(
  persist<SettingStore>(
    (set) => ({
      mode: '',
      toggleMode: () => set((state) => ({ mode: state.mode ? '' : 'dark' })),
    }),
    {
      name: 'setting',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
