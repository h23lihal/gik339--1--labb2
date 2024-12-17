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
        let html = `<section class="Members"
    style="
        background-color: #9fe1c3;
        width: 85vw;
        height: auto;
        border-radius: 1rem;
        padding: 2rem;
        margin-left: auto;
        margin-right: auto;
      ">
    <ul style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">`;
        memberMap.forEach((user, id) => {
          html += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-3">
          <div class="Member" style="
            background-color: black;
            color: ${user.color};
            padding: 2rem;
            border-radius: 1rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            border: 0.5rem solid ${user.color};
            font-size: 1.2rem;
          ">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>Användarnamn: ${user.username}</p>
          </div>
        </div>
      `;
        });

        html += `</div></section>`;

        // Inserting the HTML into the container
        const listContainer = document.getElementById('Members');
        listContainer.innerHTML = '';
        listContainer.insertAdjacentHTML('beforeend', html);
      }
    });
}

window.addEventListener('load', fetchServer);
