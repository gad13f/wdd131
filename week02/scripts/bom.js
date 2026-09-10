const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');

// Crear elementos para un capítulo nuevo
const li = document.createElement('li');
const deleteButton = document.createElement('button');

// Asignar valores e iconos
li.textContent = input.value;
deleteButton.textContent = '❌';
deleteButton.setAttribute('aria-label', 'Remove chapter');

// Combinar los elementos y agregarlos a la lista en pantalla
li.append(deleteButton);
list.append(li);