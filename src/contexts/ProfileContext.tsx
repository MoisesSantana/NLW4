import {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';


interface ContextProviderProps {
  children: ReactNode;
}

interface ProfileContextData {
  handleProfileData: (imrgUrl: string, name: string) => void;
}

export const ProfileContext = createContext({} as ProfileContextData);

export function ProfileProvider({ children }: ContextProviderProps) {
  function handleProfileData(imageUrl: string, name: string) {
    if (name !== '' && imageUrl !== '') {
      Cookies.set('profileName', name);
      Cookies.set('profilePic', imageUrl);
    }
  }

  return (
    <ProfileContext.Provider value={ {
      handleProfileData,
    } }>
      { children }
    </ProfileContext.Provider>
  )
}
