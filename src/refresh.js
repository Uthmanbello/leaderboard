const showScores = (data = []) => {
  const scoreTable = document.querySelector('#score-table');

  let html = '';

  data.forEach((score) => {
    html += `
        <li>${score.user}: ${score.score}</li>
      `;
  });

  scoreTable.innerHTML = html;
};

export default showScores;