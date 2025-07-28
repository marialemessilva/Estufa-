// Espera todo o conteúdo da página carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA EXISTENTE PARA O SLIDER ---
    const slider = document.getElementById('velocidade-slider');
    const displayVelocidade = document.getElementById('display-velocidade');

    function updateSliderFill() {
        if (!slider) return;
        const min = slider.min ? slider.min : 0;
        const max = slider.max ? slider.max : 100;
        const value = slider.value;
        const percentage = ((value - min) * 100) / (max - min);
        slider.style.setProperty('--fill-percentage', `${percentage}%`);
    }

    if (slider && displayVelocidade) {
        displayVelocidade.textContent = slider.value;
        updateSliderFill();
        slider.addEventListener('input', function() {
            displayVelocidade.textContent = slider.value;
            updateSliderFill();
        });
    }

    // --- LÓGICA EXISTENTE PARA A PORTINHA ---
    const portinhaToggle = document.getElementById('toggle-portinha');
    const portaDisplay = document.getElementById('display-porta');

    function atualizarStatusPorta() {
        if (portinhaToggle && portaDisplay) {
            portaDisplay.textContent = portinhaToggle.checked ? 'Aberta' : 'Fechada';
        }
    }

    if (portinhaToggle && portaDisplay) {
        atualizarStatusPorta();
        portinhaToggle.addEventListener('change', atualizarStatusPorta);
    }

    // --- NOVA LÓGICA PARA O MODO MANUAL ---
    const modoManualToggle = document.getElementById('toggle-modo-manual');
    const controlsContainer = document.getElementById('manual-controls-container');

    function toggleManualControls() {
        if (modoManualToggle && controlsContainer) {
            const isManualModeOn = modoManualToggle.checked;
            if (isManualModeOn) {
                controlsContainer.classList.remove('disabled-controls');
            } else {
                controlsContainer.classList.add('disabled-controls');
            }
        }
    }

    if (modoManualToggle && controlsContainer) {
        toggleManualControls();
        modoManualToggle.addEventListener('change', toggleManualControls);
    }
});