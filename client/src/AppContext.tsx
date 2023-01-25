import { useState, createContext } from 'react';
import { MilkData } from './types';

export interface ContextData {
  milkData: MilkData | undefined,
  setMilkData: React.Dispatch<React.SetStateAction<MilkData | undefined>>,
  isFilterOpen: boolean | undefined,
  setIsFilterOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>,
}

const AppContext = createContext<ContextData | null>(null);

const AppProvider = ({ children }: any) => {
  const [milkData, setMilkData] = useState<MilkData | undefined>();
  const [isFilterOpen, setIsFilterOpen] = useState<boolean | undefined>(false);

  return (
    <AppContext.Provider value={{
      milkData,
      setMilkData,
      isFilterOpen,
      setIsFilterOpen,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export { AppContext, AppProvider };
