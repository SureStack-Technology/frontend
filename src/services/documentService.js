const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:5m-n75rP'; 
const DOCUMENTS_ENDPOINT = `${XANO_BASE_URL}/document`;

/**
 * Fetches a list of protected document metadata from the Xano backend.
 * The endpoint is expected to return an array of document objects.
 * @param {string} token - The Xano authentication token.
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of document objects.
 */
export const fetchDocuments = async (token) => {

  if (!token) {
    throw new Error("Authentication token is missing.");
  }
  
  try {
    const response = await fetch(DOCUMENTS_ENDPOINT, {

      method: 'GET',
      headers: {
        // Xano requires the token in the Authorization header
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      // The API call failed (e.g., 401 Unauthorized, 404 Not Found)
      const errorData = await response.json().catch(() => ({ message: "Failed to fetch document." }));
      throw new Error(errorData.message || "Access denied or document not found.");
    }
    
    // Expect the response data to be an array of document objects:
    // e.g., [{ id: 1, title: 'Whitepaper', fileUrl: '...', size: '...' }, ...]
    const documentArray = await response.json();
    
    if (!Array.isArray(documentArray)) {
        throw new Error("Invalid response format: Expected an array of documents.");
    }
    
    return documentArray;

  } catch (error) {
    console.error("Document Fetch Error:", error.message);
    throw error;
  }
};