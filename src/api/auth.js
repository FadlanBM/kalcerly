import { apiClient } from './client';

export const login = (email, password) => {
  return apiClient('/api/auth/login', {
    method: 'POST',
    body: { email, password }
  });
};

export const register = (fullname, email, password) => {
  return apiClient('/api/auth/register', {
    method: 'POST',
    body: { fullname, email, password }
  });
};

export const logout = (refreshToken) => {
  return apiClient('/api/auth/logout', {
    method: 'POST',
    body: { refreshToken }
  });
};

export const getUserProfile = () => {
  return apiClient('/api/auth/me', {
    method: 'GET'
  });
};
export const verifyEmail = (token) => apiClient('/api/auth/verify-email', { method: 'POST', body: { token } });
export const resendVerification = (email) => apiClient('/api/auth/resend-verification', { method: 'POST', body: { email } });
export const updateProfile = (formData) => apiClient('/api/auth/me', { method: 'POST', body: formData });
