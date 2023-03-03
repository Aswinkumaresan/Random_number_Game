dis_trigger = document.getElementById("number_show");

function randomNumShow() {
  return Math.floor(Math.random() * 10);
}

// Display data in input
let dis_number;
function display() {
  let random = randomNumShow();
  dis_number = document.getElementById("number_input");
  // dis_number.value = random;
  dis_number.innerText = random;

  let randomarray = [];

  while (randomarray.length < 10) {
    let ranDivData = randomNumShow();
    if (!randomarray.includes(ranDivData)) {
      randomarray.push(ranDivData);
    }
  }
  console.log(randomarray);

  let Showitems = document.getElementById("display_number");

  function createarray(data) {
    Showitems.innerText = "";
    data.forEach(function (elm, i, arr) {
      let colEm = document.createElement("div");
      let headEm = document.createElement("h2");

      colEm.setAttribute("class", "displaydata col-4");
      colEm.setAttribute("data-target", elm);
      colEm.onclick = findNumber;

      // headEm.innerText = elm;
      headEm.innerText = randomarray[i];

      colEm.appendChild(headEm);
      Showitems.appendChild(colEm);
    });
  }
  createarray(randomarray);
}

dis_trigger.addEventListener("click", display);


count=0;
function findNumber(event){
  let num=event.target.dataset.target;
  count +=1;
  if(count<=3){
    if(num == dis_number.innerText){
      event.target.classList.add("active_success");
    }
    else{ 
      event.target.classList.add("active");
    }
    alert("Your  chance count is "+ count + "/3")
  }
  else{
    alert("Your chance is closed by 3/3" +"Try by refreshing");
  }
  
 
  console.log(num);
}

// function findNumber(eventshow){
//   // let num=eventshow.target.dataset.target;
//   // console.log(eventshow.target.dataset.target);

//   // if(num == dis_number.value){
//     // eventshow.target.classList("active_success")
//   }
  // else{
    // eventshow.target.classList("active")
//   }
  
// }

// show data in div
