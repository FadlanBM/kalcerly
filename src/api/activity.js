import { apiClient } from './client';

export const getActivities = (page = 1, limit = 20) => apiClient(`/api/activities?page=${page}&limit=${limit}`);
export const getActivity = (id) => apiClient(`/api/activities/${id}`);
export const createActivity = (data) => apiClient('/api/activities', { method: 'POST', body: data });
export const updateActivity = (id, data) => apiClient(`/api/activities/${id}`, { method: 'PATCH', body: data });
export const deleteActivity = (id) => apiClient(`/api/activities/${id}`, { method: 'DELETE' });

export const uploadGpsPoints = (id, points) => apiClient(`/api/activities/${id}/points`, { method: 'POST', body: { points } });
export const getGpsPoints = (id) => apiClient(`/api/activities/${id}/points`);
export const verifyActivity = (id) => apiClient(`/api/activities/${id}/verify`, { method: 'POST' });
