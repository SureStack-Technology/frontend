import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      setUser: (user) =>
        set({
          user,
          isAuthenticated: true,
          error: null
        }
      ),

      login: async (email, password) => {

        set({ isLoading: true, error: null })

        try {
          const apiUrl = `https://x8ki-letl-twmt.n7.xano.io/api:g_2X5-Xc/auth/login?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`

          console.log("Url: ", apiUrl)

          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || 'Login failed')
          }

          const loginResponse = await response.json()

          // Create user object with API response
          const user = {
            id: loginResponse.id || email, // Use id from response or fallback to email
            email: email,
            role: loginResponse.role,
            authToken: loginResponse.authToken,
            ...loginResponse // Include any other properties from the API response
          }

          // Store user in state
          set({
            user,
            isAuthenticated: true,
            isLoading: false,
            error: null
          })

          // Store auth info in localStorage for compatibility
          if (typeof window !== "undefined") {
            localStorage.setItem("authToken", loginResponse.authToken)
            localStorage.setItem("userRole", loginResponse.role)
            localStorage.setItem("userId", user.id)
            localStorage.setItem("userEmail", email)
          }

          return user

        } catch (error) {

          const errorMessage = error instanceof Error ? error.message : 'Login failed'
          set({
            isLoading: false,
            error: errorMessage,
            user: null,
            isAuthenticated: false
          })
          throw error
        }
      },

      logout: () => {
        // Clear localStorage
        if (typeof window !== "undefined") {
          localStorage.removeItem("authToken")
          localStorage.removeItem("userRole")
          localStorage.removeItem("userId")
          localStorage.removeItem("userEmail")
        }
        // Clear store state
        set({
          user: null,
          isAuthenticated: false,
          error: null
        })
      },

      clearUser: () =>
        set({
          user: null,
          isAuthenticated: false,
          error: null
        }),

      changePassword: async (currentPassword, newPassword) => {
        const user = get().user
        if (!user) {
          throw new Error('No user logged in')
        }

        set({ isLoading: true, error: null })

        try {
          // Construct the change password API URL
          const apiUrl = `https://x8ki-letl-twmt.n7.xano.io/api:g_2X5-Xc/auth/change-password`
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user.authToken}`,
            },
            body: JSON.stringify({
              email: user.email,
              currentPassword,
              newPassword,
            }),
          })

          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}))
            throw new Error(errorData.message || 'Password change failed')
          }

          const data = await response.json()

          // Update user with new auth token if provided
          if (data.authToken) {
            const updatedUser = { ...user, authToken: data.authToken }
          set({
            user: updatedUser,
            isLoading: false,
            error: null
          })

          // Update localStorage
          if (typeof window !== "undefined") {
            localStorage.setItem("authToken", data.authToken)
          }
          } else {
            set({ isLoading: false, error: null })
          }

        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : 'Password change failed'
          set({
            isLoading: false,
            error: errorMessage
          })
          throw error
        }
      },

      setLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'user-storage', // name of item in localStorage
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated
      }),
    }
  )
)