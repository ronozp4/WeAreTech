import React, { ReactNode, useEffect, useState } from "react";
import AppContext from "./AppContext";
import { SoundItem } from "../services/types";
import api from "../services/api";
import { COLORS } from "../assets/constansts";

interface AppProviderProps {
    children: ReactNode;
  }
  
  const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [data, setData] = useState<SoundItem[]>([])
    const [selectedItem, setSelectedItem] = useState<number>(-1)
  
    const fetchData = async () => {
      try {
          const sounds = await api.getDrumSound();
          const soundItems = sounds.slice(0, 8)?.map((item, index) => {return {...item, isLoaded: false, color: COLORS[index]  }});
          updateData(soundItems) // we need only 8 items
      } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
      }
  }
    // Fetch the data
    useEffect(() => {
        fetchData();
    }, [])
    
    const updateData = (newData: SoundItem[]) => {
      setData(newData);
    };
  
    return (
      <AppContext.Provider value={{ data, updateData, selectedItem, setSelectedItem}}>
        {children}
      </AppContext.Provider>
    );
  };

  export default AppProvider;
  