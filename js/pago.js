document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-pago');
    const modalElement = document.getElementById('modalCompraOk');

    const modal = new bootstrap.Modal(modalElement);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        modal.show();
    });
});
