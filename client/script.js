const url = 'http://localhost:3000/users';

function fetchServer() {
  fetch(url)
    .then((result) => result.json())
    .then((users) => {
      console.log(users);

      const memberMap = new Map();
      users.forEach((user) => {
        memberMap.set(user.id, user);
      });

      if (memberMap.size > 0) {
        let html = `<ul style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">`;
        memberMap.forEach((user, id) => {
          html += `
          <li style="
            background-color: black; 
            color: ${user.color};
            padding: 5vh; 
            border-radius: 5vh; 
            list-style: none; 
            width: 8vw; 
            text-align: center; 
            border: 0.5rem solid ${user.color};
            font-size: 1.2rem;
          ">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>Användarnamn: ${user.username}</p>
          </li>`;
        });
        html += `</ul>`;
        const listContainer = document.getElementById('Members');
        listContainer.innerHTML = '';
        listContainer.insertAdjacentHTML('beforeend', html);
      }
    });
}

window.addEventListener('load', fetchServer);
