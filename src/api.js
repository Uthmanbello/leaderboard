// Game name = My game
// Game id = TqNPpVE8ZIkMxKlwMLrF

export const storedScores = async () => {
  const response = await window.fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TqNPpVE8ZIkMxKlwMLrF/scores/');
  const data = await response.json();
  return { status: response.status, data };
};

export const newScore = async ({ user, score }) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TqNPpVE8ZIkMxKlwMLrF/scores/', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  });
  const data = await response.json();
  return { status: response.status, data };
};
