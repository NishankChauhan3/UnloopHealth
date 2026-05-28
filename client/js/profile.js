import { api } from './api.js';

export const profile = {
    async fetchProfile() {
        return await api.request('/api/analytics/profile', 'GET');
    },
    async saveProfile(data) {
        return await api.saveProfile(data);
    },
    calculateBMI(weightKg, heightCm) {
        if (!weightKg || !heightCm) return 0;
        const heightM = heightCm / 100;
        return (weightKg / (heightM * heightM)).toFixed(1);
    }
};

window.profile = profile;
