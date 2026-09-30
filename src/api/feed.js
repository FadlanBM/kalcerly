import { apiClient } from './client';

export const getFeeds = (page = 1, limit = 20) => apiClient(`/api/social/feed?page=${page}&limit=${limit}`);
export const getPost = (id) => apiClient(`/api/social/posts/${id}`);
export const createPost = (data) => apiClient('/api/social/posts', { method: 'POST', body: data });
export const likePost = (id) => apiClient(`/api/social/posts/${id}/like`, { method: 'POST' });
export const unlikePost = (id) => apiClient(`/api/social/posts/${id}/like`, { method: 'DELETE' });
export const commentPost = (id, content) => apiClient(`/api/social/posts/${id}/comments`, { method: 'POST', body: { content } });
