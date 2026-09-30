import { apiClient } from './client';

const path = (resource, id = '') => `/api/${resource}${id ? `/${encodeURIComponent(id)}` : ''}`;
export const listResource = (resource, query = {}) => apiClient(`${path(resource)}?${new URLSearchParams(query)}`);
export const getResource = (resource, id) => apiClient(path(resource, id));
export const createResource = (resource, body) => apiClient(path(resource), { method: 'POST', body });
export const updateResource = (resource, id, body) => apiClient(path(resource, id), { method: 'PATCH', body });
export const deleteResource = (resource, id) => apiClient(path(resource, id), { method: 'DELETE' });
export const resourceAction = (resource, id, action, method = 'POST', body) => apiClient(`${path(resource, id)}/${action}`, { method, body });
export const getStats = () => apiClient('/api/stats/me');
export const getRecords = () => apiClient('/api/stats/me/records');
export const getAchievements = () => apiClient('/api/stats/achievements');
export const getMyAchievements = () => apiClient('/api/stats/me/achievements');
export const getLeaderboard = (kind, type = 'TOTAL') => apiClient(`/api/stats/leaderboard/${kind}${kind === 'distance' ? `?type=${type}` : ''}`);
export const getBalance = () => apiClient('/api/rewards/balance');
export const getTransactions = () => apiClient('/api/rewards/transactions');
export const getReward = (activityId) => apiClient(`/api/rewards/activities/${activityId}`);
export const claimReward = (activityId) => apiClient(`/api/rewards/activities/${activityId}`, { method: 'POST' });
