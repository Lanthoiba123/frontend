const playerButton = document.querySelector(".player");
const eventButton = document.querySelector(".event");
const sectionPlayerElement = document.querySelector(".section");
const body = document.querySelector("body");

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

const playerList = [
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
  {
    img: "../img/johnny.jpeg",
    name: "Johnny Naorem",
    games: "Football",
    address: "Bishnupur",
    age: "23yrs",
  },
];

const eventData=[
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War",
        "date":"12/01/2012",
        "place":"Kwakeithel"
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War",
        "date":"12/01/2012",
        "place":"Patsoi"
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War",
        "date":"12/01/2012",
        "place":"Nambol"
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War",
        "date":"12/01/2012",
        "place":"Keishampat"
    },
]

function load(){
    playerUIElement(playerList);
}

playerButton.addEventListener("click",  (e) => {
  e.preventDefault();
   sectionPlayerElement.innerHTML=" "
  playerUIElement(playerList)
  eventButton.classList.remove('active')
  playerButton.classList.add('active')
  console.log("click");
});

eventButton.addEventListener('click',(e)=>{
    e.preventDefault();
    sectionPlayerElement.innerHTML=" "
    playerButton.classList.remove('active')
    eventButton.classList.add('active')
    eventUIElement(eventData);

})


const playerUIElement = (dataElement) => {
//   sectionPlayerElement.classList.add("section");
  sectionPlayerElement.classList.add("player");

  dataElement.map(
    (data) =>
      (sectionPlayerElement.innerHTML += `<a href="../playerprofile/player.html" <div class="card">
        <img src=${data.img} alt="">
        <p>${data.name}</p>
        <p>Professionals : ${data.games}</p>
        <p>Address : ${data.address}</p>
        <p>Age : ${data.age} </p></a>
    </div>
        `)
  );
  // body.appendChild(sectionPlayerElement);
};
const eventUIElement = (dataElement) => {
//   const sectionPlayerElement = document.createElement("div");
//   sectionPlayerElement.classList.add("section");
  sectionPlayerElement.classList.add("event");

  dataElement.map(
    (data) =>
      (sectionPlayerElement.innerHTML += `<div class="card">
        <img src=${data.imageUrl} alt="">
        <p>Title : ${data.title}</p>
        <p>Date : ${data.date}</p>
        <p>Place : ${data.place} </p>
    </div>
        `)
  );
  // body.appendChild(sectionPlayerElement);
};
