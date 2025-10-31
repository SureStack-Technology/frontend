"use client"
import React, { useState, useEffect, useCallback } from 'react';
import useAuthStore from '../../stores/useAuthStore';
import { fetchDocuments } from '../../services/documentService';
import { FileText, Download, ShieldCheck, AlertTriangle, Loader, Upload, UserCheck } from 'lucide-react';
import UploadModal from '../common/UploadModal';

const Documents = () => {

  const token = useAuthStore((state) => state.token);
  const user = useAuthStore((state) => state.user);
  const isSystemUser = user?.role === 'system';
  
  const [documents, setDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

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
  
  // A function to call to refresh the list after a successful upload
  const handleSuccessfulUpload = () => {
      // Re-fetch the document list to display the newly uploaded file
      loadDocuments();
  }

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
        
        {doc.url ? (
            <a href={doc.url} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg font-semibold transition">
                <Download className="w-5 h-5 mr-2" /> Download
            </a>
        ) : (
            <span className="text-yellow-500 text-sm">Link Unavailable</span>
        )}

        {/* {doc.fileUrl ? (
            <a href={doc.fileUrl} 
               target="_blank" 
               rel="noopener noreferrer" 
               className="flex items-center bg-cyan-600 hover:bg-cyan-500 text-white py-2 px-4 rounded-lg font-semibold transition">
                <Download className="w-5 h-5 mr-2" /> Download
            </a>
        ) : (
            <span className="text-yellow-500 text-sm">Link Unavailable</span>
        )} */}
    </div>
  );

  return (
    <>
    <div className="pt-24 min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold mb-6 text-cyan-400 flex items-center">
            <FileText className="w-8 h-8 mr-3" /> Document Library
          </h1>

          {isSystemUser && (
          <button onClick={() => setIsUploadModalOpen(true)}
                  className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center text-lg">
              <Upload className="w-5 h-5 mr-2" /> Upload New
          </button>
          )}
        </div>

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

    {/* Upload Modal (Only renders if opened) */}
    <UploadModal 
      isOpen={isUploadModalOpen} 
      onClose={() => setIsUploadModalOpen(false)} 
      onUploadSuccess={handleSuccessfulUpload}
    />
    </>
  );
};

export default Documents;