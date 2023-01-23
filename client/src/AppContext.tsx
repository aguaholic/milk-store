import { useState, createContext } from 'react';
import { MilkData } from './types';

export interface ContextData {
  milkData: MilkData | undefined,
  setMilkData: React.Dispatch<React.SetStateAction<MilkData | undefined>>,
}

const AppContext = createContext<ContextData | null>(null);

const AppProvider = ({ children }: any) => {
  const [milkData, setMilkData] = useState<MilkData | undefined>();

  // {
  //   "count": 99,
  //   "results": [
  //     {
  //       "name": "Dillion's unequaled cashew milk",
  //       "type": "Cashew milk",
  //       "storage": 99,
  //       "id": "301d5dcf-a2a8-4a34-b26b-efcaa103963c"
  //     },
  //     {
  //       "name": "Dillion's unequaled cashew milk",
  //       "type": "Cashew milk",
  //       "storage": 99,
  //       "id": "301d5dcf-a2a8-4a34-b26b-efcaa103963c"
  //     },
  //   ]
  // }

  return (
    <AppContext.Provider value={{
      milkData,
      setMilkData,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export { AppContext, AppProvider };
