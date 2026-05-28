import { api } from './api.js';

export const risk = {
    async fetchRiskScores() {
        return await api.getRiskScores();
    },
    async recalculateRisk() {
        return await api.request('/api/risk/recalculate', 'POST');
    },
    async fetchHistory(days = 30) {
        return await api.request(`/api/risk/history?days=${days}`, 'GET');
    },
    getRiskColour(label) {
        const lower = label.toLowerCase();
        if (lower.includes('critical')) return 'var(--risk-critical)';
        if (lower.includes('high')) return 'var(--risk-high)';
        if (lower.includes('elevated') || lower.includes('moderate')) return 'var(--risk-elevated)';
        return 'var(--risk-low)';
    }
};

window.risk = risk;
