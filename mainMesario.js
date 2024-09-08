function voltarHub() {
  document.getElementById("voltarHub");
  location.href = "hub.html";
}

function voltarHubChapas() {
  document.getElementById("voltarHubChapas");
  location.href = "hub_chapas.html";
}

function voltarHubEleitores() {
  document.getElementById("voltarHubEleitores");
  location.href = "hub_eleitor.html";
}

function cadastrar() {
  document.getElementById("cadastrar");
  location.href = "cadastroAdmin.html";
}

function iniciarProcesso() {
  document.getElementById("hub");
  location.href = "id_eleitor.html";
}

function hubSair() {
  document.getElementById("hubSair");
  location.href = "index.html";
}

function entrarCadastrarChapas() {
  document.getElementById("cadastrarChapas");
  location.href = "cadastroChapas.html";
}

function entrarGerenciadorChapas() {
  document.getElementById("gerenciador_chapas");
  location.href = "gerenciador_chapas.html";
}

function entrarHubChapas() {
  document.getElementById("HubChapas");
  location.href = "hub_chapas.html";
}

function entrarCadastrarEleitor() {
  document.getElementById("cadastrarEleitor");
  location.href = "cadastroEleitor.html";
}

function entrarHubEleitor() {
  document.getElementById("HubEleitor");
  location.href = "hub_eleitor.html";
}


function entrarGerenciadorEleitor() {
  document.getElementById("gerenciador_eleitores");
  location.href = "gerenciador_eleitores.html";
}


function entrarContagem() {
  document.getElementById("entrarContagem");
  location.href = "contagem.html";
}

function entrarUrna() {
  const newWindow = window.open("voto.html", "_blank", "width=1360,height=768");
  if (newWindow) {
    const left = 1360;
    const top = 2341;
    newWindow.moveTo(left, top);
  } else {
    alert(
      "Pop-up bloqueado. Por favor, habilite os pop-ups para abrir a página em uma nova janela."
    );
  }
}

function cancelar() {
  document.getElementById("cancela");
  location.href = "voto.html";
}

function confirma() {
  document.getElementById("confirma");
  location.href = "FIM.html";
}

'use strict';


const switcher = document.querySelector('.md_es');
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  if (document.body.classList.contains('dark-theme')) {
    switcher.textContent = 'Tema Claro';
    localStorage.setItem('theme', 'dark');
  } else {
    switcher.textContent = 'Tema Escuro';
    localStorage.setItem('theme', 'light');
  }
  console.log('current class name: ' + document.body.className);
}

if (switcher) {
  switcher.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', function() {
  
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    if (switcher) {
      switcher.textContent = 'Tema Claro';
    }
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    if (switcher) {
      switcher.textContent = 'Tema Escuro';
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const trapContainer = document.getElementById('trap-container');
  const focusableElements = trapContainer.querySelectorAll('input, select, textarea, button');
  const firstFocusableElement = focusableElements[0];
  const lastFocusableElement = focusableElements[focusableElements.length - 1];

  document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
          if (e.shiftKey) {
              if (document.activeElement === firstFocusableElement) {
                  e.preventDefault();
                  lastFocusableElement.focus();
              }
          } else {
              if (document.activeElement === lastFocusableElement) {
                  e.preventDefault();
                  firstFocusableElement.focus();
              }
          }
      }
  });
});

function toggleMenu() {
    const menu = document.getElementById("menuItems");
        menu.classList.toggle("menu-opened");
 }
 document.querySelector('.fa-bars').addEventListener('click', function() {
  document.body.classList.toggle('menu-opened'); 
});