(function() {
        // Cria um monitoramento em loop que roda a cada 50 milissegundos para agir o mais rápido possível
        const removerLogo = setInterval(() => {
        const viewer = document.getElementById('meu-objeto-3d');
        
        // Entra na camada oculta (Shadow DOM) onde o Spline esconde o anúncio
        if (viewer && viewer.shadowRoot) {
            const logo = viewer.shadowRoot.querySelector('#logo');
            
            if (logo) {
            logo.remove(); // Deleta a caixinha de créditos do HTML
            clearInterval(removerLogo); // Para o script para não gastar memória do PC
            console.log("Anúncio do Spline removido!");
            }
        }
        }, 50);

        // Se o site demorar a carregar, para de monitorar após 12 segundos para evitar travamentos
        setTimeout(() => clearInterval(removerLogo), 12000);
    })();