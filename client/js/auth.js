import { api } from './api.js';

export const auth = {
    async login(email, password) {
        return await api.login(email, password);
    },
    async register(name, email, password) {
        return await api.register(name, email, password);
    },
    logout() {
        sessionStorage.removeItem('access_token');
        sessionStorage.removeItem('user');
        window.location.href = 'login.html';
    },
    isAuthenticated() {
        return !!sessionStorage.getItem('access_token');
    }
};

window.auth = auth;
