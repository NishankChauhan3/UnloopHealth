export const utils = {
    requireAuth() {
        if (!sessionStorage.getItem('access_token')) {
            window.location.href = 'login.html';
        }
    },
    formatDate(dateObj) {
        const d = new Date(dateObj);
        let month = '' + (d.getMonth() + 1);
        let day = '' + d.getDate();
        const year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return [year, month, day].join('-');
    },
    showError(errorElementId, message) {
        const el = document.getElementById(errorElementId);
        if (el) {
            el.textContent = message;
            el.style.display = 'block';
        }
    }
};

window.utils = utils;
