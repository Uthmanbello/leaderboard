export const addScore = ({ user, score }) => {
    const scoreTable = document.querySelector('#score-table');
  
    const listItem = document.createElement('li');
  
    listItem.innerHTML = `${user}: ${score}`;
  
    scoreTable.appendChild(listItem);
  }