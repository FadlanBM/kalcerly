import { apiClient } from './client';

export const getActiveChallenges = (page = 1, limit = 20) => apiClient(`/api/challenges?page=${page}&limit=${limit}`);
export const getMyChallenges = (page = 1, limit = 20) => apiClient(`/api/challenges/me?page=${page}&limit=${limit}`);
export const getChallenge = (id) => apiClient(`/api/challenges/${id}`);
export const joinChallenge = (id) => apiClient(`/api/challenges/${id}/join`, { method: 'POST' });
export const leaveChallenge = (id) => apiClient(`/api/challenges/${id}/leave`, { method: 'DELETE' });
export const addChallengeProgress = (id, activityId) => apiClient(`/api/challenges/${id}/progress`, { method: 'POST', body: { activityId } });
export const getChallengeParticipants = (id, page = 1, limit = 20) => apiClient(`/api/challenges/${id}/participants?page=${page}&limit=${limit}`);
