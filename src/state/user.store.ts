import { create } from 'zustand';

import jwt_decode from 'jwt-decode';
// import { User } from 'interfaces/user.interface';
// import { globalToken } from 'graphql/client/client';

const decodeToken = () => {
  const token =
    localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    // globalToken.accessToken = token;
    const decodedToken: any = jwt_decode(token);
    if (decodedToken) {
      return decodedToken;
    } else {
      return null;
    }
  } else {
    return null;
  }
};

const deleteToken = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
  return null;
};

interface TokenData {
  id: string;
  email: string;
}

interface UserStore {
  isAuth: TokenData | null;
  updateIsAuth: () => void;
  logout: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  isAuth: decodeToken(),
  updateIsAuth: () => set({ isAuth: decodeToken() }),
  logout: () => set({ isAuth: deleteToken() }),
}));
