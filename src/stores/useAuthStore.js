import { create } from 'zustand';

// Define the initial state and actions
const useAuthStore = create((set) => ({
    
  // State
  isLoggedIn: false,
  user: null, // Stores user details (e.g., id, name, email)
  token: null, // Stores the Xano authentication token

  // Actions
  login: (userData, authToken) => set({ 
    isLoggedIn: true, 
    user: userData, 
    token: authToken 
  }),
  
  logout: () => set({ 
    isLoggedIn: false, 
    user: null, 
    token: null 
  }),
  
  // Example of hydrating state from localStorage on load
  initializeAuth: () => {
    // This is where you would typically check localStorage/sessionStorage
    // For simplicity, we'll keep it empty, but a real app would hydrate here.
    // e.g., const storedToken = localStorage.getItem('xano-token');
    // if (storedToken) { /* set state */ }
  }
}));

// Run initialization logic (optional, but good practice)
useAuthStore.getState().initializeAuth();

export default useAuthStore;