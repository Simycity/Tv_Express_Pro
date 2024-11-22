// Seleciona o contêiner onde o botão será inserido
const buttonContainer = document.getElementById('button-container');

// Cria o elemento <a> para o botão
const appButton = document.createElement('a');
appButton.href = 'https://play.google.com/store/apps/details?id=iptvpro.player';
appButton.target = '_blank';
appButton.rel = 'noopener noreferrer';
appButton.textContent = 'APP';

// Adiciona a classe para estilo
appButton.style.textDecoration = 'none';
appButton.style.color = '#fff';
appButton.style.background = '#0ff';
appButton.style.padding = '10px 20px';
appButton.style.borderRadius = '5px';
appButton.style.fontSize = '1.2em';
appButton.style.fontWeight = 'bold';
appButton.style.transition = 'background 0.3s ease';

// Estilo de hover
appButton.addEventListener('mouseenter', () => {
  appButton.style.background = '#0cc'; // Tom mais escuro ao passar o mouse
});
appButton.addEventListener('mouseleave', () => {
  appButton.style.background = '#0ff'; // Volta ao original
});

// Adiciona o botão ao contêiner
buttonContainer.appendChild(appButton);


// Cria o botão START
const startButton = document.createElement('a');
startButton.href = ('./pag_registro/index_2.html'); // Link para a página index_2.html
startButton.textContent = 'START'; // Texto do botão

// Adiciona a classe CSS ao botão para aplicar o estilo
startButton.classList.add('start-button');

// Seleciona a div com o id 'form-container' e adiciona o botão nela
const formContainer = document.getElementById('form-container');
formContainer.appendChild(startButton);

//ASS: Café☕

