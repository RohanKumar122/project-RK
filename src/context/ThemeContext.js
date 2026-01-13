import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('materials');

  const toggleTheme = (tab) => {
    setActiveTab(tab);
  };

  const theme = {
    activeTab,
    toggleTheme,
    isMaterials: activeTab === 'materials',
    primaryColor: activeTab === 'materials' ? 'blue-700' : 'red-600',
    primaryHover: activeTab === 'materials' ? 'blue-800' : 'red-700',
    accentColor: activeTab === 'materials' ? 'amber-500' : 'blue-400',
    bgColor: activeTab === 'materials' ? 'bg-blue-50' : 'bg-red-50',
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
