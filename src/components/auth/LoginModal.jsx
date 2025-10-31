import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Mail, Lock } from 'lucide-react';
import useAuthStore from '../../stores/useAuthStore';
import loginUser from '../../services/xanoAuthService';

const LoginModal = ({ isOpen, onClose }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Get the login action from the Zustand store
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSubmit = async (e) => {

    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {

      // 0. Login to Xano
      const { token, user } = await loginUser(email, password);
      
      // 1. Store the user data and token in Zustand
      login(user, token); 
      
      // 2. Close the modal and reset form
      onClose();
      setEmail('');
      setPassword('');

      // 3. Navigate to the new Dashboard page
      navigate('/dashboard');

    } catch (err) {
      setError(err.message || 'An unexpected error occurred during login.');
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = "w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 pl-10 text-white focus:outline-none focus:border-cyan-400 transition";

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[100]" onClick={onClose}>
      <div className="bg-slate-800 rounded-xl max-w-sm w-full shadow-2xl border border-slate-700" onClick={e => e.stopPropagation()}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-white">Login to SureStack</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    required
                    disabled={isLoading}
                />
            </div>
            
            {/* Password Input */}
            <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={inputClasses}
                    required
                    disabled={isLoading}
                />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-400 text-sm text-center font-medium">{error}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Logging In...' : 'Login'}
            </button>
          </form>

          <p className="text-center text-sm text-slate-400 mt-4">
            Don't have an account? <a href="#" className="text-cyan-400 hover:underline">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;