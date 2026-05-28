import { api } from './api.js';

export const tracker = {
    async searchFood(query, diet) {
        return await api.request(`/api/tracker/search?q=${encodeURIComponent(query)}&diet=${diet}`, 'GET');
    },
    async logMeal(mealData) {
        return await api.request('/api/tracker/meal', 'POST', mealData);
    },
    async fetchDailySummary() {
        return await api.request('/api/tracker/day', 'GET');
    },
    async deleteMeal(mealId) {
        return await api.request(`/api/tracker/meal/${mealId}`, 'DELETE');
    }
};

window.tracker = tracker;
