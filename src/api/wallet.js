import { apiClient } from './client';

export const getWallets = () => apiClient('/api/wallet');
export const generateNonce = (address) => apiClient('/api/wallet/nonce', { method: 'POST', body: { address } });
export const verifyWallet = (address, signature, message, chainId) => 
  apiClient('/api/wallet/verify', { method: 'POST', body: { address, signature, message, chainId } });
export const setPrimaryWallet = (walletId) => apiClient('/api/wallet/primary', { method: 'PATCH', body: { walletId } });
export const deleteWallet = (id) => apiClient(`/api/wallet/${id}`, { method: 'DELETE' });
