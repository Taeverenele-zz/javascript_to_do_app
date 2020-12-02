'use strict';

let addToDoBtn = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoBtn.addEventListener('click', () => {
  // create a div with class 'row' and append to the DOM
  let rowDiv = document.createElement('div')
  rowDiv.classList.add('row');
  toDoContainer.appendChild(rowDiv);

  // create paragraph with class 'paragraph-styling' with input field value as text and add it to the DOM
  let paragraph = document.createElement('p');
  paragraph.classList.add('paragraph-styling')
  paragraph.textContent = inputField.value;
  rowDiv.appendChild(paragraph);

  // create a div inside the row div for buttons
  let btnsDiv = document.createElement('div');
  btnsDiv.classList.add('buttons');
  rowDiv.appendChild(btnsDiv);

  // create done button
  let doneBtn = document.createElement('button');
  doneBtn.classList.add('doneBtn');
  doneBtn.textContent = 'Done'
  btnsDiv.appendChild(doneBtn);

  // create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.classList.add('deleteBtn');
  deleteBtn.textContent = 'Delete'
  btnsDiv.appendChild(deleteBtn);

  // clear input field
  inputField.value = '';

  doneBtn.addEventListener('click', () => {
    rowDiv.classList.add('done');
    paragraph.style.textDecoration = 'line-through';
    doneBtn.remove();
  });
  deleteBtn.addEventListener('click', () => {
    toDoContainer.removeChild(rowDiv);
  })

})