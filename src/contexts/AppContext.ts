import React, { createContext, useContext } from 'react';
import { SoundItem } from '../services/types';

interface AppContextType {
  data: SoundItem[];
  updateData: (newData: SoundItem[]) => void;
  selectedItem: number;
  setSelectedItem: (newSelected: number) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export default AppContext;
