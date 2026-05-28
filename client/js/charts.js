export const charts = {
    renderPatternChart(canvasId, labels, dataPoints, color) {
        // Assuming Chart.js is imported via CDN in the HTML
        if (!window.Chart) {
            console.warn("Chart.js not loaded");
            return;
        }
        const ctx = document.getElementById(canvasId).getContext('2d');
        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Trend',
                    data: dataPoints,
                    borderColor: color,
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    }
};

window.charts = charts;
