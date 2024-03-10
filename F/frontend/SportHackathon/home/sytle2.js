
async function fetchAllPlayers () {
  const gameList = document.getElementById('playersList');
  gameList.innerHTML = ''
  let html =''
  try {
    const response = await fetch('http://localhost:8500/api/auth/getAllPlayers')
    const players = await response.json();
    players.map(item => {
      html += `<div class="event">
                  <div class="eventImgDiv" style="width:"260px", height: "180px">
                    <img class="eventImg" src=${item.image} alt="" height="180px">
                  </div>
                  <h3 class="eventTitle">${item.name}</h3>
                  <div class="eventDescription">${item.games}</div>
                </div>`
      gameList.innerHTML = html;
    })
  } catch (error) {
    console.log("Error:", error);
  }
}
