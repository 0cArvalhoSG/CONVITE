function abrirConvite() {
    document.querySelector('.tela-inicial').style.display = 'none';
    document.getElementById('convite').style.display = 'block';
    }
    
    const params = new URLSearchParams(window.location.search);
    const nomeConvidado = params.get('nome') || 'Convidado';
    
    const mensagem = `Olá, aqui é o(a) ${nomeConvidado}. Confirmo minha presença no aniversário do nosso pequeno herói Gabriel. Será uma honra participar desse momento especial!`;
    
    const telefone = '5544998331676';
    const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
    
    document.getElementById('confirmarLink').href = linkWhatsApp;