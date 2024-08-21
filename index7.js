document.addEventListener('DOMContentLoaded', function() {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const image = getQueryParam('image');
    const name = getQueryParam('name');

    if (image && name) {
        document.getElementById('carName').textContent = decodeURIComponent(name);
        document.getElementById('carImage').src = decodeURIComponent(image);
        document.getElementById('carImage').alt = decodeURIComponent(name);
    }
});
