function crearAlerta(divId, message, tipo = 'success') {
    const container = document.getElementById(divId);
    if (!container) return;

    // Eliminar la alerta anterior
    container.innerHTML = '';

    container.classList.add('contenedor-alertas');

    const iconClass = tipo === 'success'
        ? 'bi-check-circle-fill text-success'
        : 'bi-exclamation-triangle-fill text-danger';

    const alertClass = tipo === 'success'
        ? 'alert-success border-success-subtle'
        : 'alert-danger border-danger-subtle';

    const strongText = tipo === 'success'
        ? 'Éxito:'
        : 'Error:';

    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-dismissible fade show shadow-lg border-2 ${alertClass}`;
    alertDiv.role = 'alert';

    alertDiv.innerHTML = `
        <div class="d-flex align-items-center">
            <i class="bi ${iconClass} me-2 fs-4"></i>
            <div class="flex-grow-1">
                <strong>${strongText}</strong> ${message}
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;

    container.appendChild(alertDiv);

    alertDiv.addEventListener('closed.bs.alert', () => {
        alertDiv.remove();
    });

    setTimeout(() => {
        bootstrap.Alert.getOrCreateInstance(alertDiv).close();
    }, 4000);
}
//Alerta de exito con un input y un output
export function mostrarFeedbackExito(divId, message) {
    crearAlerta(divId, message, 'success');
}

//Alerta de error con un input y un output
export function mostrarFeedbackError(divId, message) {
    crearAlerta(divId, message, 'error');
}
