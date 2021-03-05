import {
  createContext,
  ReactNode,
  SetStateAction,
  useState,
  Dispatch,
} from 'react';


interface ContextProviderProps {
  children: ReactNode;
}

interface StyleContextData {
  darkContainer: boolean;
  setDarkContainer: Dispatch<SetStateAction<boolean>>;
}

export const StyleContext = createContext({} as StyleContextData);

export function StyleProvider({ children }: ContextProviderProps) {
  const [darkContainer, setDarkContainer] = useState(false);

  return (
    <StyleContext.Provider value={ {
      darkContainer,
      setDarkContainer,
    } }>
      { children }
    </StyleContext.Provider>
  )
}
