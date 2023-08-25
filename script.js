
// Fetching the Data from the API
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
        <img src="./images/Stars2.png"class="card-img-top" alt="Star wars actors">
          <div class="card-body">
            <h5 class="card-title">${person.name}</h5>
            <button class="w3-btn openModalBtn btn btn-dark">More Info</button>
           </div>
        </div>
      `;


        const openModalBtn = card.querySelector(".openModalBtn");
        openModalBtn.addEventListener('click', () => {
          showModal(person);
        });
    
      cardRow.appendChild(card);
    });

    function showModal(person) {
        const modal = document.getElementById("myModal");
        const modalBody = document.getElementById("modalBody");
      
        modal.style.display = "block";
        modalBody.innerHTML = `
          <h2>${person.name}</h2>
          <p>Height: ${person.height}</p>
          <p>Gender: ${person.gender}</p>
        `;
      
        const closeModalBtn = modal.querySelector(".close");
        closeModalBtn.addEventListener('click', () => {
          modal.style.display = "none";
        });
      
        window.addEventListener('click', event => {
          if (event.target === modal) {
            modal.style.display = "none";
          }
        });
      }
      
      
}    

renderCards();

