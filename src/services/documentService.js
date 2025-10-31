const XANO_BASE_URL = 'https://x8ki-letl-twmt.n7.xano.io/api:5m-n75rP'; 
const DOCUMENTS_ENDPOINT = `${XANO_BASE_URL}/document`;
const UPLOAD_ENDPOINT = `${XANO_BASE_URL}/upload/media`;
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

/**
 * Uploads a new document to the protected Xano endpoint (POST).
 * This typically uses FormData for file uploads.
 * @param {File} file - The file to upload.
 * @param {string} title - The title/name for the document.
 * @param {string} token - The Xano authentication token.
 * @returns {Promise<Object>} A promise that resolves to the new document object from the server.
 */
export const uploadDocument = async ({ file, title, token }) => {

    if (!token) {
        throw new Error("Authentication token is missing.");
    }

    if (!file || !title) {
        throw new Error("File and title are required for upload.");
    }

    // 1. Create FormData object
    const formData = new FormData();
    // Xano usually requires the file to be appended with a specific key (e.g., 'file')
    formData.append('file', file);
    // Append any other data, like the document title
    formData.append('title', title); 
    
    // You may also need to append other metadata depending on your Xano function stack (e.g., user_id)

    try {
        const response = await fetch(UPLOAD_ENDPOINT, {
            method: 'POST',
            headers: {
                // IMPORTANT: Do NOT manually set Content-Type: 'multipart/form-data'. 
                // The browser sets the correct boundary header when using FormData.
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({ message: "File upload failed." }));
            throw new Error(errorData.message || `Upload failed due to server error (${response.status}).`);
        }

        // Xano returns the newly created document record on success
        const newDocument = await response.json();
        return newDocument;

    } catch (error) {
        console.error("Document Upload Error:", error.message);
        throw error;
    }
};