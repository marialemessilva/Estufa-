document.addEventListener('DOMContentLoaded', function() {
    
    // Função genérica para controlar qualquer modal
    function setupModal(openBtnId, modalId) {
        const openButton = document.getElementById(openBtnId);
        const modal = document.getElementById(modalId);
        
        // Verifica se os elementos essenciais existem
        if (!openButton || !modal) {
            return;
        }

        const closeButton = modal.querySelector('.modal-close');

        function open() {
            modal.classList.add('visible');
        }

        function close() {
            modal.classList.remove('visible');
        }

        openButton.addEventListener('click', (event) => {
            event.preventDefault();
            open();
        });

        if (closeButton) {
            closeButton.addEventListener('click', close);
        }

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                close();
            }
        });
    }

    // Inicializa o modal de Ajuda
    setupModal('open-help-modal', 'help-modal');

    // Inicializa o modal de Configuração
    setupModal('open-config-modal', 'config-modal');

    // Listener global para a tecla 'Escape' que fecha qualquer modal aberto
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const visibleModal = document.querySelector('.modal-overlay.visible');
            if (visibleModal) {
                visibleModal.classList.remove('visible');
            }
        }
    });
});
