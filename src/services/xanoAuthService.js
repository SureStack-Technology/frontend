
const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:N0B3sNMv';

const loginUser = async (email, password) => {
  try {
    
    const response = await fetch(`${XANO_BASE_URL}/auth/login`, { // Update endpoint as needed
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      // Throw an error with the backend's message
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed due to server error.");
    }

    const data = await response.json();
    
    // Xano's successful login typically returns { authToken: '...', user: { ... } }
    return { 
      token: data.authToken, 
      user: data.user 
    };

  } catch (error) {
    console.error("Xano Login Error:", error.message);
    throw error;
  }
};

export default loginUser;