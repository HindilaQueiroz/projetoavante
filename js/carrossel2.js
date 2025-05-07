
document.addEventListener('DOMContentLoaded', () => {
//Seleciona os elementos do segundo carrossel
const track = document.querySelector('.carrossel-track-2');
const prevBtn = document.querySelector('.carrossel-arrow-2.prev');
const nextBtn = document.querySelector('.carrossel-arrow-2.next');
const dotsContainer = document.querySelector('.carrossel-dots-2');
const items = document.querySelectorAll('.carrossel-track-2 .produto-item');

// Quantos itens aparecem de uma vez (ajuste conforme necessário)
const itemsToShow = 5;
const totalItems = items.length;
let currentIndex = 0;

// Calcula a largura de um item com gap incluído
const itemWidth = items[0].offsetWidth + 5; // 5px de gap
const maxIndex = totalItems - itemsToShow;

// Cria as bolinhas de navegação dinamicamente
for (let i = -1; i <= maxIndex; i++) {
  const dot = document.createElement('span');
  dot.classList.add('carrossel-dot-2');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

// Função para ir para um slide específico
function goToSlide(index) {
  currentIndex = index;
  updateCarrossel();
}

// Função para atualizar posição e bolinhas
function updateCarrossel() {
  const translateX = -currentIndex * itemWidth;
  track.style.transform = `translateX(${translateX}px)`;

  // Atualiza as bolinhas
  const dots = document.querySelectorAll('.carrossel-dot-2');
  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[currentIndex]) dots[currentIndex].classList.add('active');
}

// Clique na seta direita
nextBtn.addEventListener('click', () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateCarrossel();
  }
});

// Clique na seta esquerda
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});
})
