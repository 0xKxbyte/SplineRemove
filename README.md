# Spline Ads Remover | SplineRemover

<p align="center">
  <img src="https://spline.design/_next/static/media/spline_image_banner.77c2eb63.png" alt="Spline Banner" width="100%">
</p>

<p align="center">
  <strong>Remove automaticamente anúncios e logos do Spline Viewer.</strong>
  <br><br>
  Um script JavaScript leve e Open Source criado para remover o elemento <code>#logo</code> do Shadow DOM do Spline Viewer.
</p>

<p align="center">
  <img src="https://skillicons.dev/icons?i=javascript" alt="JavaScript Logo" width="100">
</p>

<p align="center">
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
    <img src="https://img.shields.io/badge/Open%20Source-Yes-22C55E?style=for-the-badge">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge">
</p>

---

## Sobre

O **Spline Ads Remover** é um script desenvolvido em JavaScript que monitora o carregamento do Spline Viewer e remove automaticamente o anúncio/logo localizado no canto inferior direito.

O projeto utiliza manipulação do **Shadow DOM** para encontrar e remover o elemento responsável pela exibição do logo.

---

## Recursos

- Remoção automática do logo do Spline.
- Desenvolvido em JavaScript.
- Manipulação de Shadow DOM.
- Baixo consumo de memória.
- Código simples e otimizado.
- Projeto Open Source.
- Licença MIT.

---

## ⚙️ Como funciona

1. O script inicia um monitoramento automático.
2. Procura pelo componente do Spline Viewer.
3. Acessa o Shadow DOM.
4. Localiza o elemento `#logo`.
5. Remove o anúncio.
6. Finaliza o monitoramento automaticamente.

---

## Código

```javascript
//Versão 1.0
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
```

---

## Licença

Este projeto é distribuído sob a **Licença MIT**.

Você pode usar, modificar e distribuir este código livremente, mantendo os termos da licença.

---

## ⚠️ Aviso

Projeto criado para fins educacionais e de estudo sobre JavaScript, DOM e Shadow DOM.
