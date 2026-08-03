const nomeUser = document.querySelector('#nome-usuario');
nomeUser.textContent = 'Seu Nome Completo Aqui';

const fotoPerfil = document.querySelector('#foto-perfil'); 
fotoPerfil.src = '/src/img/Corinthians wallpaper.png';

const corFundo = document.querySelector('#container-perfil');
corFundo.style.backgroundColor = 'red';

const statusUser = document.querySelector('#badge-status');
statusUser.classList.add('online'); 
statusUser.textContent = 'Status Ativo.';

const skillsTotal = document.querySelectorAll('.skill');
console.log(skillsTotal.length);