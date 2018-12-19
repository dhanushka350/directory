$(document).ready(function () {
    $(".img_up").click(function (event) {
        localStorage.removeItem('CURRENT_UPLOADING_PACKAGE');
        localStorage.setItem('CURRENT_UPLOADING_PACKAGE', event.target.id);
    });
});