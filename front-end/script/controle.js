
document.addEventListener('DOMContentLoaded', function() {    
    const modoManualToggle = document.getElementById('toggle-modo-manual');
    const controlsContainer = document.getElementById('manual-controls-container');
    const plantasImage = document.querySelector('.plantas-image'); // Pegamos a imagem da planta

    function toggleManualControls() {
    if (modoManualToggle && controlsContainer && plantasImage) {
    const isManualModeOn = modoManualToggle.checked;
    if (isManualModeOn) {
    controlsContainer.classList.remove('disabled-controls');
    plantasImage.classList.remove('desativado'); // Remove a classe da imagem
    } else {
    controlsContainer.classList.add('disabled-controls');
    plantasImage.classList.add('desativado'); // Adiciona a classe à imagem
    }
    }
    }

    if (modoManualToggle && controlsContainer && plantasImage) {
    toggleManualControls();
    modoManualToggle.addEventListener('change', toggleManualControls);
    }

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
    const irrigationButton = document.querySelector('.irrigation-button');
    const rainImage = document.querySelector('.chuva-image');

    if (irrigationButton && rainImage) {
    irrigationButton.addEventListener('click', () => {
        irrigationButton.disabled = true;
        rainImage.style.opacity = '1';
        setTimeout(() => {
        rainImage.style.opacity = '0';
        irrigationButton.disabled = false;
        }, 3200);

    });
    }
});