const images = ['Skyw.png', 'C-3PO2.png', 'R2-D2.png', 'Darth-Vader.png', 'Leia.png', 'Owen-Lars.png', 'Beru-Whitesun-Lars.png', 'R5-D4.png', 'Biggs-Darklighter.png', 'Obi-Wan-Kenobi.png'];


let mainContainer = document.getElementById('container')
let result = []
let datadetail = '';

async function getPeople() {
    let result = await fetch("https://swapi.dev/api/people")
    let data = await result.json()
    results = data.results
      let array = data.results
    array.forEach((item, index) => {

       let card = `
       <div class="card" style="width: 20rem;">
           <img src=${images[index]} class="card-img-top" alt="...">
           <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <a href="#" class="btn btn-dark" data-toggle="modal" data-target="#myModal">More Info</a>
            </div>
        </div>`

    datadetail += card

    mainContainer.innerHTML += card;
    });     
}
getPeople()

document.getElementById("character-detail").addEventListener("click",moreInfo)

function moreInfo(e){
    const clickedActor = e.target
    if(clickedActor.classlist.contains ('name')){
        let actor = e.target.parentElement.querySelector(".name")
        console.log(actor)

        let drop = star.nextElementSibling
    }
}

// //document.getElementById('btn').addEventListener("click", moreInfo)
// document.addEventListener("DOMContentLoaded", function() {
//     const openModalButton = document.getElementById("openModalButton");
//     const modalName = document.getElementById("modalName");
//     const modalGender = document.getElementById("modalGender");
//     const modalHeight = document.getElementById("modalHeight");

//     openModalButton.addEventListener("click", function() {
//         // Update modal content here
//         modalName.textContent = "John Doe";
//         modalGender.textContent = "Gender: Male";
//         modalHeight.textContent = "Height: 180 cm";

//         // Show the modal
//         const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
//         modal.show();
//     });
// });