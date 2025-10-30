"use client"
import React, { useState, useEffect, useCallback } from 'react';
import useAuthStore from '../../stores/useAuthStore';
import { fetchDocuments } from '../../services/documentService';
import { FileText, Download, ShieldCheck, AlertTriangle, Loader } from 'lucide-react';

const Documents = () => {

  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  
  const [documents, setDocuments] = useState([]); // State to hold the array of documents
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadDocuments = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Call the service to fetch the array of documents
      const docs = await fetchDocuments(token);
      setDocuments(docs);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    loadDocuments();
  }, [loadDocuments]);
  
  // Helper Component for a single document card
  const DocumentCard = ({ doc }) => (
    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg flex justify-between items-center transition hover:border-cyan-500">
        <div>
            <h3 className="text-xl font-semibold mb-1 text-white flex items-center">
                <FileText className="w-5 h-5 mr-3 text-cyan-400" />
                {doc.title || `Document #${doc.id}`}
            </h3>
            <p className="text-slate-400 text-sm mb-2">{doc.description || 'Secure documentation for authenticated users.'}</p>
            <p className="text-xs text-slate-500">
                Size: <span className="font-medium">{doc.size || 'N/A'}</span> | 
                Type: <span className="font-medium">{doc.type || 'File'}</span>
            </p>
        </div>
        
        {doc.fileUrl ? (
            <a 
                href={doc.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg font-semibold transition"
            >
                <Download className="w-5 h-5 mr-2" /> Download
            </a>
        ) : (
            <span className="text-yellow-500 text-sm">Link Unavailable</span>
        )}
    </div>
  );

  return (
    <div className="pt-24 min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6 text-cyan-400 flex items-center">
          <FileText className="w-8 h-8 mr-3" /> Document Library
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Here are all the privileged documents available to your account.
        </p>

        {isLoading && (
          <div className="flex items-center text-cyan-400">
            <Loader className="w-5 h-5 mr-2 animate-spin" /> Loading documents...
          </div>
        )}

        {error && (
            <div className="mt-4 p-4 bg-red-900/50 border border-red-700 rounded-lg text-red-400 flex items-center">
              <AlertTriangle className="w-5 h-5 mr-3" />
              Error fetching documents: {error}
            </div>
        )}

        {!isLoading && documents.length === 0 && !error && (
            <div className="mt-4 p-4 bg-yellow-900/50 border border-yellow-700 rounded-lg text-yellow-400">
                No documents are currently available for your user account.
            </div>
        )}

        {/* Document List: Iterate over the array and render a card for each */}
        {!isLoading && documents.length > 0 && (
            <div className="space-y-4">
                {documents.map(doc => (
                    <DocumentCard key={doc.id || doc.title} doc={doc} />
                ))}
            </div>
        )}

      </div>
    </div>
  );
};

export default Documents;