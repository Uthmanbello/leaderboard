export const showScores = (data = []) => {
    const scoreTable = document.querySelector('#score-table');
  
    let html = '';
  
    data.forEach((score) => {
      html += `
        <li>${score.user}: ${score.score}</li>
      `;
    });
  
    tableList.innerHTML = html;
  };