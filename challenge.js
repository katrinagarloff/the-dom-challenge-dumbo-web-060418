function like() {
  let num = parseInt(counter.innerHTML);
  let numOfLikes = 1;

  if (document.getElementById(`${num}`)) {
    let line = document.getElementById(`${num}`);
    numOfLikes = parseInt(line.getAttribute('name')) + 1;

    line.outerHTML = `<li id = ${num} name = ${numOfLikes}>${num} has ${numOfLikes} likes!</li>`
  } else {
    listParent.innerHTML += `<li id = ${num} name = ${numOfLikes}>${num} has ${numOfLikes} like!</li>`;
  }
}

function incrementCounter(){
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

function decrementCounter(){
  counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

function pause() {
  if(paused === false){
    clearInterval(timerInterval);
    pauseButton.innerText = "play"
    paused = true;
  } else {
    timerInterval = setInterval(incrementCounter, 1000);
    pauseButton.innerText = "pause"
    paused = false;
  }
}

function addComment(e){
  e.preventDefault();

  const commentInput = e.target.querySelector('[name="comment-input"]').value;
  const newCommentTemplate = `<p>${commentInput}</p>`;
  commentsList.innerHTML += newCommentTemplate;
}

const counter = document.querySelector('#counter');
const minusButton = document.getElementById('-');
const addButton = document.getElementById('+');
const heartButton = document.getElementById('<3');
const listParent = document.querySelector('.likes');
const pauseButton = document.querySelector('#pause');
const commentForm = document.querySelector('#comment-form')
const commentsList = document.querySelector('.comments#list')

let timerInterval = setInterval(incrementCounter, 1000);
let paused = false;


heartButton.addEventListener('click', like);
minusButton.addEventListener('click', decrementCounter);
addButton.addEventListener('click', incrementCounter);
pauseButton.addEventListener('click', pause);
commentForm.addEventListener('submit', addComment);
