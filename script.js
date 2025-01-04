const lists =  document.querySelectorAll(".bottom ul li");
let dateList = "weekly" ;
lists.forEach((li) => {
    li.addEventListener("click" , function (e) {
        e.target.parentElement.querySelectorAll(".active").forEach((ac) => {
            ac.classList.remove("active")
        });
        e.target.classList.add("active");
        dateList = e.target.dataset.date;
        showData() 
    });
});
let jsonUrl = "data.json";
let result;
async function getData(url) {
    let response = await fetch(url);
    let data = await response.json();
    result = data;
    localStorage.setItem("timeTrack",JSON.stringify(result))
    showData()
}
getData(jsonUrl);
function showData() {
    const titleBox = document.querySelectorAll(".titleBox span");
    const hursInfo = document.querySelectorAll(".hurs-info h2");
    const prevInfo = document.querySelectorAll(".hurs-info span");
for (let i = 0 ; i < result.length; i++) {
    titleBox[i].innerHTML = result[i].title;
    hursInfo[i].innerHTML = result[i].timeframes[dateList].current + "hrs";
    prevInfo[i].innerHTML = "last week - "+ result[i].timeframes[dateList].previous +"hrs";
}
}


 
