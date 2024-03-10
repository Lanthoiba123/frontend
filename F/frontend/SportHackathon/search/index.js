const playerButton = document.querySelector(".player");
const eventButton = document.querySelector(".event");
const sectionPlayerElement = document.querySelector(".section");
const body = document.querySelector("body");
const input = document.getElementById("searchInput");
const select = document.getElementById("sportSelect");
// window.onload(()=>{
//     playerUIElement(data)
// })

{
  /* <div class="section player">
<div class="card">
    <img src="../img/johnny.jpeg" alt="">
    <p>Johnny Naorem</p>
    <p>Professionals : Football</p>
    <p>Address : Bishnupur</p>
    <p>Age : 23yrs</p>
</div>
<div class="card">
    <img src="../img/panja.jpeg" alt="">
    <p>Johnny Naorem</p>
    <p>Professionals : Football</p>
    <p>Address : Bishnupur</p>
    <p>Age : 23yrs</p>
</div>
<div class="card">
    <img src="../img/jumpping.jpeg" alt="">
    <p>Konthoujam Lanthoiba</p>
    <p>Professionals : Football</p>
    <p>Address : Bishnupur</p>
    <p>Age : 23yrs</p>
</div>
</div> */
}

// const playerList = [
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
//   {
//     img: "../img/johnny.jpeg",
//     name: "Johnny Naorem",
//     games: "Football",
//     address: "Bishnupur",
//     age: "23yrs",
//   },
// ];

const eventData = [
  {
    id: 1,
    imageUrl: "../img/tugofwar.jpeg",
    title: "Tug of War",
    date: "12/01/2012",
    place: "Kwakeithel",
  },
  {
    id: 1,
    imageUrl: "../img/tugofwar.jpeg",
    title: "Tug of War",
    date: "12/01/2012",
    place: "Patsoi",
  },
  {
    id: 1,
    imageUrl: "../img/tugofwar.jpeg",
    title: "Tug of War",
    date: "12/01/2012",
    place: "Nambol",
  },
  {
    id: 1,
    imageUrl: "../img/tugofwar.jpeg",
    title: "Tug of War",
    date: "12/01/2012",
    place: "Keishampat",
  },
];

function load() {
  playerUIElement(playerList);
}

playerButton.addEventListener("click", (e) => {
  e.preventDefault();
  sectionPlayerElement.innerHTML = " ";
  fetchAllPlayers();
  eventButton.classList.remove("active");
  playerButton.classList.add("active");
});

eventButton.addEventListener("click", (e) => {
  e.preventDefault();
  sectionPlayerElement.innerHTML = " ";
  playerButton.classList.remove("active");
  eventButton.classList.add("active");
  eventUIElement(eventData);
});

async function fetchAllPlayers() {
  try {
    const response = await fetch(
      "http://localhost:8500/api/auth/getAllPlayers"
    );
    const players = await response.json();
    displayPlayers(players);
    return players;
  } catch (error) {
    console.log("Error:", error);
  }
}
fetchAllPlayers();

const searchPlayer = async () => {
  let playerAddress = input.value;
  let sportSelected = select.value;
  console.log(playerAddress, sportSelected)
  console.log(playerAddress);
  const players = await fetchAllPlayers();
  console.log(players)

  if(playerAddress === '' && sportSelected !==''){
    let result = players.filter(i => i.games.toUpperCase() === sportSelected.toUpperCase())
    displaySearch(result)
    displayPlayers(result)
  }
  if(playerAddress !== '' && sportSelected ===''){
    let result = players.filter(function (players) {
      return players.address.toUpperCase().includes(playerAddress.toUpperCase())
    });
    displaySearch(result)
    displayPlayers(result)
  }
  if(playerAddress !== '' && sportSelected !==''){
    let result = players.filter(i => i.games.toUpperCase() === sportSelected.toUpperCase());
    result = result.filter(function(result) {
      return result.address.toUpperCase().includes(playerAddress.toUpperCase())
    });
    displaySearch(result)
    displayPlayers(result)
  }
};

const selectedSport = async () => {
  let sportSelected = select.value;
  const players = await fetchAllPlayers();
  if (sportSelected !== "") {
    let result = players.filter(function (players) {
      return players.games
        .toUpperCase()
        .includes(sportSelected.toUpperCase());
    });
    displayPlayers(result);
    displaySearch(result);
  } else {
    displayPlayers(players);
    displaySearch(null);
  }
};
const openProfilePage = (name, image, games, address, age) =>{
  let merge = {name, image, games, address, age}
  localStorage.setItem('player', JSON.stringify(merge));
  window.location.href = '../playerprofile/player.html'
}
const displayPlayers = (data) => {
  const card = document.getElementById("container");
  let html = ``;
  data.map((item) => {
    html += `<div class="card" onclick="openProfilePage('${item.name}', '${item.image}', '${item.games}', '${item.address}', ${item.age})">
    <img src="${item.image}" alt="">
    <p style="font-weight: bold; font-size: 16px;">${item.name}</p>
    <p>Professionals: ${item.games}</p>
    <p>Address: ${item.address}</p>
    <p>Age: ${item.age}</p>
</div>`;

    card.innerHTML = html;
  });
};
const displaySearch = (data) => {
  const card = document.getElementById("container");
  let html = ``;
  if (data.length === 0) {
    card.innerHTML = "";
  } else {
    data.map((item) => {
      html += `<div class="card" style="width: 18rem;">
                  <img src=${item.image} class="card-img-top" alt="...">
                  <div class="card-body">
                  <p style="font-weight: bold"; font-size: 16px;>${item.name}</p>
                    <p class="card-text">${item.games}</p>
                  </div>
                </div>`;

      card.innerHTML = html;
    });
  }
};
const playerUIElement = (dataElement) => {
  //   sectionPlayerElement.classList.add("section");
  sectionPlayerElement.classList.add("player");

  dataElement.map(
    (data) =>
      (sectionPlayerElement.innerHTML += `<div class="card">
        <img src=${data.img} alt="">
        <p>${data.name}</p>
        <p>Professionals : ${data.games}</p>
        <p>Address : ${data.address}</p>
        <p>Age : ${data.age} </p>
    </div>
        `)
  );
  body.appendChild(sectionPlayerElement);
};
const eventUIElement = async (dataElement) => {
  //   const sectionPlayerElement = document.createElement("div");
  //   sectionPlayerElement.classList.add("section");
  sectionPlayerElement.classList.add("event");
  const response = await fetch('http://localhost:8500/api/auth/getAllEvent');
  const events = await response.json();
  events.map(
    (data) =>
      (sectionPlayerElement.innerHTML += `<div class="card">
        <img src=${data.img} alt="">
        <p style="font-size: 12px;; font-weight: bold;">Title : ${data.tile}</p>
        <p>Location : ${data.location} </p>
        <p>Date : ${data.dates}</p>
    </div>
        `)
  );
  body.appendChild(sectionPlayerElement);
};
