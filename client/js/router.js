// Basic SPA router functionality if needed for partials
export const router = {
    navigateTo(path) {
        window.location.hash = path;
    },
    onNavigate(callback) {
        window.addEventListener('hashchange', () => {
            callback(window.location.hash.substring(1));
        });
    }
};

window.router = router;
