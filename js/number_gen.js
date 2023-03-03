dis_trigger = document.getElementById("number_show");

function randomNumShow() {
  return Math.floor(Math.random() * 10);
}

// Display data in input

function display() {
  let random = randomNumShow();
  let dis_number = document.getElementById("number_input");
  dis_number.value = random;

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

      headEm.innerText = randomarray[i];

      colEm.appendChild(headEm);
      Showitems.appendChild(colEm);
    });
  }
  createarray(randomarray);
}

dis_trigger.addEventListener("click", display);

// show data in div
