import { fetch as tauriFetch } from '@tauri-apps/plugin-http';

// Polyfill/Fallback for running in standard browser (e.g., npm run dev)
const httpFetch = window.__TAURI__ ? tauriFetch : window.fetch;

const BASE_URL = 'https://kalcerly.vercel.app';

export const apiClient = async (endpoint, options = {}) => {
  const token = localStorage.getItem('accessToken');
  
  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  const config = {
    method: options.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...options.headers
    }
  };

  if (options.body) {
    if (options.body instanceof FormData) {
      delete config.headers['Content-Type']; // Let browser/tauri set boundary for multipart
      config.body = options.body;
    } else {
      config.body = JSON.stringify(options.body);
    }
  }

  try {
    const response = await httpFetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json().catch(() => ({}));

    // Handle Token Expiry
    if (response.status === 401 && data.errors === 'UNAUTHORIZED' && !options._retry) {
      options._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      
      if (refreshToken) {
        try {
          const refreshRes = await httpFetch(`${BASE_URL}/api/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken })
          });
          
          if (refreshRes.ok) {
            const refreshData = await refreshRes.json();
            localStorage.setItem('accessToken', refreshData.data.accessToken);
            localStorage.setItem('refreshToken', refreshData.data.refreshToken);
            
            // Retry the original request
            config.headers.Authorization = `Bearer ${refreshData.data.accessToken}`;
            const retryResponse = await httpFetch(`${BASE_URL}${endpoint}`, config);
            const retryData = await retryResponse.json().catch(() => ({}));
            
            if (!retryResponse.ok) throw { status: retryResponse.status, data: retryData };
            return retryData;
          }
        } catch (e) {
          // Refresh failed, force logout
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
          window.location.href = '/login';
          throw e;
        }
      }
    }

    if (!response.ok) {
      throw { status: response.status, data };
    }

    return data;
  } catch (error) {
    throw error;
  }
};
