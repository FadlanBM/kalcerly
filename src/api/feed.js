import { apiClient } from './client';

export const getFeeds = (page = 1, limit = 20) => apiClient(`/api/social/feed?page=${page}&limit=${limit}`);
export const getPost = (id) => apiClient(`/api/social/posts/${id}`);
export const createPost = (data) => apiClient('/api/social/posts', { method: 'POST', body: data });
export const likePost = (id) => apiClient(`/api/social/posts/${id}/kudos`, { method: 'POST' });
export const unlikePost = (id) => apiClient(`/api/social/posts/${id}/kudos`, { method: 'DELETE' });
export const commentPost = (id, content) => apiClient(`/api/social/posts/${id}/comments`, { method: 'POST', body: { content } });
export const getComments = (id) => apiClient(`/api/social/posts/${id}/comments`);
export const deletePost = (id) => apiClient(`/api/social/posts/${id}`, { method: 'DELETE' });
export const updatePost = (id, body) => apiClient(`/api/social/posts/${id}`, { method: 'PATCH', body });
