import './style.css';
import { storedScores, newScore } from './api.js';
import showScores from './refresh.js';
import addScore from './add.js';

const refreshButton = document.querySelector('#refresh-btn');
const form = document.querySelector('form');
const submitButton = document.querySelector('#submit-btn');

const refresh = async (e) => {
  const message = document.querySelector('.message');
  message.classList.add('d-none');

  e.target.blur();
  e.target.setAttribute('disabled', true);

  const { status, data } = await storedScores();

  showScores(data.result);

  if (status === 200 || status === 201) {
    e.target.removeAttribute('disabled');
  }
};

const submitScore = async () => {
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const { status } = await newScore({ user, score });

  if (status === 200 || status === 201) {
    addScore({ user, score });
    form.reset();
  }
};

refreshButton.addEventListener('click', refresh);
submitButton.addEventListener('click', submitScore);