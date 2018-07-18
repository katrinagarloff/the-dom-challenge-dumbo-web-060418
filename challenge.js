function like() {
  let num = parseInt(counter.innerHTML);
  let numOfLikes = 1;

  if (document.getElementById(`${num}`)) {
    let line = document.getElementById(`${num}`);
    numOfLikes = parseInt(line.getAttribute('name')) + 1;

    line.outerHTML = createLikeTemplate(num, numOfLikes)
  } else {
    listParent.innerHTML += createLikeTemplate(num, numOfLikes)
  }
}

function createLikeTemplate(num, numOfLikes){
  return `<li id=${num} name=${numOfLikes}>${num} has ${numOfLikes} likes!</li>`;
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
    minusButton.disabled = true;
    addButton.disabled = true;
    heartButton.disabled = true;
    commentForm.querySelector('button').disabled = true;
    paused = true;
  } else {
    timerInterval = setInterval(incrementCounter, 1000);
    pauseButton.innerText = "pause"
    minusButton.disabled = false;
    addButton.disabled = false;
    heartButton.disabled = false;
    commentForm.querySelector('button').disabled = false;
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
