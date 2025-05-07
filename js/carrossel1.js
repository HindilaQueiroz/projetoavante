
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carrossel-track');
    const items = Array.from(track.children);
    const nextButton = document.querySelector('.carrossel-arrow.next');
    const prevButton = document.querySelector('.carrossel-arrow.prev');
    const dotsNav = document.querySelector('.carrossel-dots');

    if (!track || !nextButton || !prevButton || !dotsNav || items.length === 0) {
        console.error("carrossel elements not found.");
        return; // Saída se faltarem elementos essenciais
    }

    // --- Configuracoes ---
    const itemsPerPage = 4; // Número de itens visíveis ao mesmo tempo (com base na imagem/layout
    const itemWidth = items[0].getBoundingClientRect().width;
    const itemGap = parseInt(window.getComputedStyle(track).gap) || 17; // Obter lacuna ou usar padrão
    const moveWidth = itemWidth + itemGap; // Quanto mover para uma mudança de item
    const totalItems = items.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage); // Calcular páginas se rolar vários itens
    let currentPage = 0; // Ou índice atual se rolar um por um
    let currentSlideIndex = 0; // Índice do item visível mais à esquerda
    // --- Criar pontos ---
    const createDots = () => {
        // If scrolling pages (grupo de itens)
        // for (let i = 0; i < totalPages; i++) {
        // If scrolling one by one (mais pontos necessarios)
        const numScrollPositions = totalItems - itemsPerPage + 1; // How many starting positions possible
        if (numScrollPositions <= 1) { // Quantas posições iniciais são possíveis
             dotsNav.style.display = 'none';
             nextButton.style.display = 'none';
             prevButton.style.display = 'none';
             return;
        }

        for (let i = 0; i < numScrollPositions; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carrossel-dot');
            dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => moveToSlide(i));
            dotsNav.appendChild(dot);
        }
    };
    createDots();
    const dots = Array.from(dotsNav.children);

    // ---Atualizar IU (setas/pontos) ---
    const updateUI = () => {
        // Desativar/ativar setas
        prevButton.disabled = currentSlideIndex === 0;
        // Podemos rolar mais para a direita?
        const maxSlideIndex = totalItems - itemsPerPage;
        nextButton.disabled = currentSlideIndex >= maxSlideIndex;


        // Atualizar ponto ativo
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlideIndex);
        });
    };

    // --- Mover trilha ---
    const moveToSlide = (targetIndex) => {
        // Garantir que o índice de destino esteja dentro dos limites
        const maxSlideIndex = totalItems - itemsPerPage;
        targetIndex = Math.max(0, Math.min(targetIndex, maxSlideIndex));

        const amountToMove = targetIndex * moveWidth;
        track.style.transform = `translateX(-${amountToMove}px)`;
        currentSlideIndex = targetIndex;
        updateUI();
    };

    // --- Ouvintes de eventos ---
    nextButton.addEventListener('click', () => {
        moveToSlide(currentSlideIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        moveToSlide(currentSlideIndex - 1);
    });

       // --- Estado Inicial ---
    if (dots.length > 0) { // Verifique se os pontos foram criados
        updateUI();
    } else { // Ocultar controles se não for necessário rolar
         prevButton.style.display = 'none';
         nextButton.style.display = 'none';
    }

});
