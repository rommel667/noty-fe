import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface Setting {
  rememberToken: string;
  setRememberToken: (payload: any) => void;
}

export const useSettingStore = create(
  persist<Setting>(
    (set, get) => ({
      rememberToken: 'off',
      setRememberToken: (payload: string) => set({ rememberToken: payload }),
    }),
    // (set: any, get: any) => ({
    //   name: 'setting',
    //   storage: createJSONStorage(() =>
    //     get().rememberToken ? localStorage : sessionStorage
    //   ),
    // })
    {
      name: 'setting',
      //   storage: createJSONStorage(
      //     (get: any) =>
      //       (get().rememberToken ? localStorage : sessionStorage) as StateStorage
      //   ),
      onRehydrateStorage(state) {
        createJSONStorage(() => sessionStorage);
      },
    }
  )
);
