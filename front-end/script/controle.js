document.addEventListener('DOMContentLoaded', function() {

    // --- PARTE 1: LÓGICA DO SLIDER DE VELOCIDADE ---
    const slider = document.getElementById('velocidade-slider');
    const displayVelocidade = document.getElementById('display-velocidade');

    function updateSliderFill() {
        if (!slider) return;
        const min = Number(slider.min) || 0;
        const max = Number(slider.max) || 100;
        const value = Number(slider.value);
        const percentage = ((value - min) * 100) / (max - min);
        slider.style.setProperty('--fill-percentage', `${percentage}%`);
    }

    if (slider && displayVelocidade) {
        displayVelocidade.textContent = slider.value;
        updateSliderFill(); // Define o estado inicial correto
        slider.addEventListener('input', function() {
            displayVelocidade.textContent = slider.value;
            updateSliderFill();
        });
    }

    // --- PARTE 2: LÓGICA DO TOGGLE DA PORTINHA ---
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

    // --- PARTE 3: LÓGICA DO BOTÃO IRRIGAR ---
    const irrigationButton = document.querySelector('.irrigation-button');
    const rainImage = document.querySelector('.chuva-image');

    if (irrigationButton && rainImage) {
        irrigationButton.addEventListener('click', () => {
            irrigationButton.disabled = true;
            rainImage.style.opacity = '1';
            setTimeout(() => {
                rainImage.style.opacity = '0';
                irrigationButton.disabled = false;
            }, 4000);
        });
    }

    // --- PARTE 4: LÓGICA DE HABILITAR/DESABILITAR O MODO MANUAL ---
    const modoManualToggle = document.getElementById('toggle-modo-manual');
    const controlsContainer = document.getElementById('manual-controls-container');
    const plantasImage = document.querySelector('.plantas-image');

    function toggleManualControls() {
        if (modoManualToggle && controlsContainer && plantasImage) {
            const isManualModeOn = modoManualToggle.checked;
            const formElements = controlsContainer.querySelectorAll('input, button');

            if (isManualModeOn) {
                controlsContainer.classList.remove('disabled-controls');
                plantasImage.classList.remove('desativado');
                formElements.forEach(elem => elem.disabled = false);
            } else {
                controlsContainer.classList.add('disabled-controls');
                plantasImage.classList.add('desativado');
                formElements.forEach(elem => elem.disabled = true);
            }
        }
    }

    if (modoManualToggle && controlsContainer && plantasImage) {
        toggleManualControls(); // Roda a função uma vez para definir o estado inicial
        modoManualToggle.addEventListener('change', toggleManualControls);
    }

    const ventilacaoToggle = document.getElementById('toggle-ventilacao');
    function handleVentilacaoState() {
        if (ventilacaoToggle.checked) {
            slider.disabled = false; // Habilita o slider
        } else {
            slider.disabled = true;          // Desabilita o slider
            slider.value = 0;                // Zera o valor do slider
            displayVelocidade.textContent = 0; // Zera o texto do display
            updateSliderFill();              // ATUALIZA a cor da barrinha para 0%
        }
    }

    if (ventilacaoToggle && slider && displayVelocidade) {
        handleVentilacaoState(); // Roda uma vez para definir o estado inicial
        ventilacaoToggle.addEventListener('change', handleVentilacaoState);
    }
});