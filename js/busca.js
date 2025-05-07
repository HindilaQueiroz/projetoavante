document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('pesquisa-input');
    const searchButton = document.getElementById('pesquisa-button');
    const searchResultDiv = document.getElementById('pesquisa-result');
    const searchContainer = document.querySelector('.pesquisa-container'); 

    // Função para exibir resultado da pesquisa
    const displaySearchResult = () => {
        const searchTerm = searchInput.value.trim(); 
        if (searchTerm) {
            searchResultDiv.textContent = `Você buscou por: '${searchTerm}'`;
        } else {
            searchResultDiv.textContent = ''; 
        }
    };

    // Adicionar ouvinte de eventos ao botão de pesquisa
    searchButton.addEventListener('click', displaySearchResult);

    // Opcional: Adicionar ouvinte de eventos para pressionar a tecla Enter no campo de entrada
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            displaySearchResult();
        }
    });
});
