import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useThemeStore = create(
  persist(
    (set) => ({
      theme: 'dark', // Default theme
      toggleTheme: () =>
        set((state) => {
          const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
          
          // Apply or remove the 'dark' class on the document root element
          if (nextTheme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          
          return { theme: nextTheme };
        }),
      initTheme: () => {
        // Sync theme class on application startup
        const currentTheme = useThemeStore.getState().theme;
        if (currentTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      },
    }),
    {
      name: 'theme-storage', // Key name in localStorage
    }
  )
);

export default useThemeStore;