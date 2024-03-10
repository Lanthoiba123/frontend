
const scroll=document.querySelector('.scroll')
window.addEventListener('scroll',(e)=>{

    console.log(e);
    console.log(window.scrollY)
    if(window.scrollY>100)
    {
        scroll.style.display='none'
    }
    else
    scroll.style.display='flex'
})
const slider=document.querySelector('#eventList')
const game=document.querySelector('#gamesList')


const eventData=[
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War",
        "date":"12/01/2012",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "date":"12/01/2012",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "date":"12/01/2012",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "date":"12/01/2012",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "date":"12/01/2012",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
        "id":1,
        "imageUrl":"../img/tugofwar.jpeg",
        "title":"Tug of War (Green vs Red)",
        
        "description":"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
]

{/* <div class="event">
                        <div class="eventImgDiv">
                            <img class="eventImg" src="../img/tugofwar.jpeg" alt="">
                        </div>
                        <h3 class="eventTitle">Tug of War (Green vs Red)</h3>
                        <div class="eventDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                    </div> */}
const showEventDataUI=(eventData)=>{
   eventData.map((event=>{
    slider.innerHTML+=`<div class="event">
    <div class="eventImgDiv">
        <img class="eventImg" src=${event.imageUrl} alt="">
    </div>
    <h3 class="eventTitle">${event.title} Date: ${event.date}</h3>
    <div class="eventDescription">${event.description} </div>
</div>`
   }))
}
const showPopularGameDataUI=(eventData)=>{
   eventData.map((event=>{
    game.innerHTML+=`<div class="event">
    <div class="eventImgDiv">
        <img class="eventImg" src=${event.imageUrl} alt="">
    </div>
    <h3 class="eventTitle">${event.title}</h3>
    <div class="eventDescription">${event.description}</div>
</div>`
   }))
}

showEventDataUI(eventData)
showPopularGameDataUI(eventData)
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let count = 0;
slider_counts = [0,0,0,0]
document.addEventListener("DOMContentLoaded", function (){   
    function handleButtonClick(button, direction) {
    button.onclick = function () {
        let button_slider = button.dataset.slider;
        let targetSlider = document.querySelector(`.slider#${button_slider}`);
        if (targetSlider) {
        let slider_width = targetSlider.offsetWidth;
        if ('ontouchstart' in window) {
            if (direction === "back" && slider_width > 1231) {
                targetSlider.style.marginLeft = `15px`;
            } 
            else {
                
                let excess = slider_width - 1231 ;
                let current_margin = parseInt(targetSlider.style.marginLeft, 10)*-1;
                
                if(count > 3){
                    console.log("Excess",counters)
                    
                }
                else if (current_margin > 0 && count <4){
                    targetSlider.style.marginLeft = `-${width-83+current_margin}px`;
                    count = count+1
                    // console.log("Has been clicked", current_margin, count);
                }
                else{
                    console.log(count)
                    targetSlider.style.marginLeft = `-${width-83}px`;
                    count = count+1
                }
                
                
            }
        } else {
            if (direction === "back" && slider_width > 1231) {
                targetSlider.style.marginLeft = `15px`;
            } else {
                
                let excess = slider_width - 1231   ;
                console.log(excess)
                targetSlider.style.marginLeft = `-${excess}px`;
            }
    
        }  
    
        
    
        }
    };
    }
  

    document.querySelectorAll(".button-back").forEach(function (button) {
        handleButtonClick(button, "back");
        });
        
        document.querySelectorAll(".button-next").forEach(function (button) {
        handleButtonClick(button, "next");
        });      
});

