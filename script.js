const images = ['Skywalker.png', 'C-3PO2.png', 'R2-D2.png', 'Darth-Vader.png', 'Leia-Organa.png', 'Owen-Lars.png', 'Beru-Whitesun-Lars.png', 'R5-D4.png', 'Biggs-Darklighter.png', 'Obi-Wan-Kenobi.png'];


async function fetchPeople() {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    return data.results;
  }

  async function renderCards() {
    const people = await fetchPeople();
    const cardRow = document.getElementById("cardRow");
    const modalBody = document.getElementById("modalBody");

    people.forEach(person => {
      const card = document.createElement("div");
      card.classList.add("col-md-2", "mb-4");
      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${person.name}</h5>
            <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#infoModal" data-info="${JSON.stringify(person, null, 2)}">
              More Info
            </button>
          </div>
        </div>
      `;
      cardRow.appendChild(card);
    });

    // Show more info in the modal
    const modal = new bootstrap.Modal(document.getElementById("infoModal"));
    cardRow.addEventListener("click", event => {
      const target = event.target;
      if (target.classList.contains("btn")) {
        const info = JSON.parse(target.getAttribute("data-info"));
        modalBody.innerHTML = `
          <p>Height: ${person.height}</p>
          <p>Gender: ${person.gender}</p>
        `;
        modal.show();
      }
    });
  }

  renderCards();