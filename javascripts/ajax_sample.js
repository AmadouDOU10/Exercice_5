let number = 0;
let data=[];

const button = document.getElementById('btn');
const titre  = document.getElementById("title");
const contAr = document.getElementById("content");
const videoArea = document.getElementById("video");

//obtention des données dans ajax.json 
function getData() {
    const demand = new XMLHttpRequest();
    demand.onreadystatechange = function() {
      if (demand.readyState == 4) {
        if(demand.status == 200) {
          data=demand.response
        }
      }
    }
    demand.open("GET", "ajax.json");
    demand.responseType = "json";
    demand.send(null);
  }

//fonction de changement de vidéo
  function videoChange(){
    if (data.length < 1) {
      getData();
    }
    button.addEventListener('click', e => {
      titre.innerHTML = data[number].title;
      contAr.innerHTML = data[number].content;
      videoArea.setAttribute("src", data[number].url);
      number == 2 ? number = 0 : number++ ;
    })
}
window.onload = videoChange(); 