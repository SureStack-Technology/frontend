import React, { useState } from "react";
import { X, Upload, FileText, Loader } from "lucide-react";
import { uploadDocument } from "../../services/documentService";
import useAuthStore from "../../stores/useAuthStore";

const UploadModal = ({ isOpen, onClose, onUploadSuccess }) => {
    
  const token = useAuthStore((state) => state.token);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");

  if (!isOpen) return null;

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    setError("");

    if (!file || !title) {
      setError("Please provide a document title and select a file.");
      return;
    }

    setIsLoading(true);

    try {
      await uploadDocument({ file, title, token });

      alert(`Document "${title}" uploaded successfully!`);
      onUploadSuccess(); // Trigger document list refresh in Documents.jsx
      onClose();
      setFile(null);
      setTitle("");
    } catch (err) {
      setError(err.message || "An unknown error occurred during upload.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[100]"
      onClick={onClose}
    >
      <div
        className="bg-slate-800 rounded-xl max-w-lg w-full shadow-2xl border border-slate-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white flex items-center">
              <FileText className="w-6 h-6 mr-2 text-cyan-400" /> Upload New
              Document
            </h3>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white"
            >
              <X />
            </button>
          </div>

          <form onSubmit={handleUpload} className="space-y-6">
            {/* Title Input */}
            <div>
              <label
                htmlFor="doc-title"
                className="block text-white font-semibold mb-2"
              >
                Document Title
              </label>
              <input
                id="doc-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
                placeholder="e.g., Q3 Risk Assessment Report"
                required
                disabled={isLoading}
              />
            </div>

            {/* File Input */}
            <div>
              <label
                htmlFor="file-upload"
                className="block text-white font-semibold mb-2"
              >
                Select File
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="w-full text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-cyan-500 file:text-white hover:file:bg-cyan-600 cursor-pointer"
                required
                disabled={isLoading}
              />
            </div>

            {/* Display selected file */}
            {file && (
              <p className="text-sm text-slate-400">
                Selected: {file.name} ({Math.round(file.size / 1024)} KB)
              </p>
            )}

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm text-center font-medium">
                {error}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 flex items-center justify-center"
              disabled={isLoading || !file || !title}
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 mr-2 animate-spin" /> Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2" /> Start Upload
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
