
async function fetchAllPlayers () {
  try {
    const response = await fetch('http://localhost:8500/api/auth/getAllPlayers')
    const players = await response.json();  
    displayPlayers(players)
    return players;
  } catch (error) {
    console.log("Error:", error);
  }
}
const searchPlayer = async() =>{
const players = await fetchAllPlayers()
  let playerAddress = input.value;
  if(playerAddress!==''){
    let result = players.filter(function(players)
    {
      return players.address.toUpperCase().includes(playerAddress.toUpperCase())
    })
    displayPlayers(result)
    displaySearch(result)
  }
  else{
    displayPlayers(players);
    displaySearch(null)
  }
}

const displayPlayers = (data) => {
  const card = document.getElementById('container')
  let html = ``
  data.map(item => {
    html += `<div class="card" style="width: 18rem;">
              <img src=${item.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.games}</p>
              </div>
            </div>`

    card.innerHTML = html;
  })
}
const displaySearch = (data) => {
  const card = document.getElementById('container')
  let html = ``
  data.map(item => {
    html += `<div class="card" style="width: 18rem;">
              <img src=${item.image} class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.games}</p>
              </div>
            </div>`

    card.innerHTML = html;
  })
}
