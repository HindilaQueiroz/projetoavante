document.addEventListener('DOMContentLoaded', function() {
    // Selecionando os elementos
    const menuDepartamento = document.getElementById('menuDEPARTAMENTO-toggle');
    const submenuDepartamento = document.getElementById('submenuDEPARTAMENTO');
    
    // Função para mostrar o submenu
    menuDepartamento.addEventListener('mouseenter', function() {
        submenuDepartamento.classList.add('ativo');
    });
    
    // Função para esconder o submenu quando sair dele
    submenuDepartamento.addEventListener('mouseleave', function() {
        submenuDepartamento.classList.remove('ativo');
    });
    
    // Função para manter o submenu aberto quando o mouse estiver sobre ele
    submenuDepartamento.addEventListener('mouseenter', function() {
        submenuDepartamento.classList.add('ativo');
    });
    
    // Função para esconder o submenu quando sair do menu principal
    menuDepartamento.addEventListener('mouseleave', function(e) {
        // Verificar se o mouse não foi para o submenu
        if (!e.relatedTarget || !submenuDepartamento.contains(e.relatedTarget)) {
            // Adiciona um pequeno delay para melhorar a experiência do usuário
            setTimeout(function() {
                if (!submenuDepartamento.matches(':hover')) {
                    submenuDepartamento.classList.remove('ativo');
                }
            }, 200);
        }
    });
});