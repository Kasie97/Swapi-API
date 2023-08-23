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
        <img src="Stars2.png"class="card-img-top" alt="Star wars actors">
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
    async function updateModalContent() {
        try {
          const response = await fetch("https://swapi.dev/api/people");
          const data = await response.json();
          
          const modalContent = document.getElementById("modalContent");
          modalContent.innerHTML = `
            <p>Name: ${data.name}</p>
            <p>Height: ${data.height}</p>
            <p>Gender: ${data.gender}</p>
            <!-- Add more data as needed -->
          `;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  }

  renderCards();